# E-Learning Platform

This project is originally based on an open-source frontend template created by [keerti1924](https://github.com/keerti1924), built using HTML, CSS, Bootstrap, and JavaScript.  
I have customized the frontend and added my own backend system using Node.js, Express, and MongoDB.

---

## ⭐ Overview

This is a responsive E-Learning platform where users can:

- Browse available courses  
- Register and log in  
- Access learning pages  
- Navigate through a clean, modern UI  

The frontend layout is taken from the open-source template, but I made several design changes and added a complete backend to make it fully functional.

---

## 🔧 Tech Stack

### Frontend
- HTML5  
- CSS3 / Bootstrap 5  
- JavaScript  

### Backend (My Implementation)
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- REST API for authentication and user data  

**Backend Features Implemented:**
- User registration and login  
- Password hashing for security  
- MongoDB database connection  
- API routes for authentication  
- Error handling and validation  

---

## 📌 What I Customized

### Frontend
- Updated UI elements (colors, images, icons, fonts)  
- Modified text content and layout  
- Removed unused sections  
- Improved responsiveness and styling  

### Backend
- Complete authentication system  
- Integrated frontend forms with backend APIs  
- Connected to MongoDB Atlas or local database  
- Added error handling and input validation  

---

## 📁 Folder Structure
E-Learning-Website/
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── css/
│   │   ├── style.css
│   │   └── bootstrap.min.css
│   ├── js/
│   │   ├── main.js
│   │   └── script.js
│   └── images/
│       ├── logo.png
│       └── banner.jpg
│
└── backend/
    ├── server.js
    ├── .env
    ├── routes/
    │   ├── auth.js
    │   ├── course.js
    │   └── progress.js
    ├── models/
    │   ├── User.js
    │   ├── Course.js
    │   └── Progress.js
    └── utils/
        ├── db.js
        ├── helpers.js
        └── seed.js


---

## ⚡ Features

- User authentication (Sign Up / Login / Logout)  
- Secure password storage with hashing  
- Integration with MongoDB for user data storage  
- Responsive design for desktop and mobile  
- Modern UI with customized colors, icons, and fonts  

---

## 🛠 Installation and Setup

# 1. Clone the repository
```bash
git clone https://github.com/yourusername/E-Learning-Website.git
cd E-Learning-Website
```

# 2. Setup Backend
```bash
cd backend
npm install
```

# 3. Create a .env file in the backend folder with the following content
# (replace values with your own)
```bash
echo "PORT=5000" >> .env
echo "MONGO_URI=your_mongodb_connection_string" >> .env
echo "JWT_SECRET=your_jwt_secret_key" >> .env
```
# 4. Start the backend server
```bash
node server.js
```
# Backend will run at http://localhost:5000

# 5. Setup Frontend
```bash
cd ../frontend
```
## 🔗 Usage

1. Open the frontend in a browser.
2. Register a new account or login if you already have one.
3. Browse available courses and navigate learning pages.
4. Logout when done.

## 📝 Credits

- **Original UI Template:** [keerti1924](https://github.com/keerti1924)  
- **Backend Development & Customization:** 10rmn

# Open index.html in browser or use Live Server in VS Code
