const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const authRoutes = require('./Routes/auth');
const courseRoutes = require('./Routes/courses');
const progressRoutes = require('./Routes/progress');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the frontend directory
const frontendPath = path.join(__dirname, '../E-Learning-Website-HTML-CSS-main');
app.use(express.static(frontendPath));

// Static folder for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/progress', progressRoutes);

const PORT = process.env.PORT || 5000;

// Connect to Database
mongoose.connect(process.env.MONGO_URI, {})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Frontend available at http://localhost:${PORT}`);
    });
  })
  .catch(err => console.log('MongoDB Error:', err));

// Handle SPA routing (must be after all other routes)
// Handle SPA routing (must be after all other routes)
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});
