const express = require("express");
const jwt = require("jsonwebtoken");

const Progress = require("../models/Progress");

const router = express.Router();

function auth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
}

router.get("/:courseId", auth, async (req, res) => {
  try {
    const { courseId } = req.params;

    const progress = await Progress.findOne({
      user: req.userId,
      course: courseId,
    });

    if (!progress) {
      return res.json({ completedLessons: [] });
    }

    res.json(progress);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/:courseId/complete", auth, async (req, res) => {
  try {
    const { courseId } = req.params;
    const { lessonId } = req.body;

    if (!lessonId) {
      return res.status(400).json({ message: "lessonId is required" });
    }

    let progress = await Progress.findOne({
      user: req.userId,
      course: courseId,
    });

    if (!progress) {
      progress = new Progress({
        user: req.userId,
        course: courseId,
        completedLessons: [],
      });
    }

    const alreadyCompleted = progress.completedLessons.some(
      (id) => id.toString() === lessonId
    );

    if (!alreadyCompleted) {
      progress.completedLessons.push(lessonId);
    }

    await progress.save();

    res.json(progress);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
