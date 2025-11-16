const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

require("dotenv").config();

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);

  const hashed = await bcrypt.hash("admin123", 10);

  const admin = await User.findOne({ email: "admin@example.com" });

  if (!admin) {
    await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: hashed,
      role: "admin"
    });

    console.log("Admin user created");
  }

  process.exit(0);
}

seed();
