const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String,
  order: Number
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  lessons: [lessonSchema]
}, { timestamps: true });

module.exports = mongoose.model("Course", courseSchema);
