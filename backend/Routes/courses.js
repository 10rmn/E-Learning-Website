 const express = require("express");
 const Course = require("../models/Course");

 const router = express.Router();

 router.get("/", async (req, res) => {
   try {
     const courses = await Course.find().populate("instructor", "name email");
     res.json(courses);
   } catch (err) {
     res.status(500).json({ message: "Server error" });
   }
 });

 router.get("/:id", async (req, res) => {
   try {
     const course = await Course.findById(req.params.id).populate(
       "instructor",
       "name email"
     );

     if (!course) {
       return res.status(404).json({ message: "Course not found" });
     }

     res.json(course);
   } catch (err) {
     res.status(500).json({ message: "Server error" });
   }
 });

 router.post("/", async (req, res) => {
   try {
     const { title, description, image, instructor, lessons } = req.body;

     const course = await Course.create({
       title,
       description,
       image,
       instructor,
       lessons: lessons || [],
     });

     res.status(201).json(course);
   } catch (err) {
     res.status(500).json({ message: "Server error" });
   }
 });

 router.put("/:id", async (req, res) => {
   try {
     const { title, description, image, instructor, lessons } = req.body;

     const course = await Course.findByIdAndUpdate(
       req.params.id,
       {
         title,
         description,
         image,
         instructor,
         lessons,
       },
       { new: true }
     );

     if (!course) {
       return res.status(404).json({ message: "Course not found" });
     }

     res.json(course);
   } catch (err) {
     res.status(500).json({ message: "Server error" });
   }
 });

 router.delete("/:id", async (req, res) => {
   try {
     const course = await Course.findByIdAndDelete(req.params.id);

     if (!course) {
       return res.status(404).json({ message: "Course not found" });
     }

     res.json({ message: "Course deleted" });
   } catch (err) {
     res.status(500).json({ message: "Server error" });
   }
 });

 module.exports = router;

