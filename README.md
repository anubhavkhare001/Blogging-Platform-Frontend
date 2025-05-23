# Blogging-Platform-Frontend

This is the **ReactJS frontend** for the full-stack Blogging Platform assignment. It uses Bootstrap for styling and CKEditor for rich text editing.

## 🔧 Tech Stack

- ReactJS
- Bootstrap (via react-bootstrap)
- React Router
- Axios
- CKEditor 5

## ✨ Features

- User Authentication (Login/Signup)
- Create, edit, delete blog posts (with CKEditor)
- Public view of blog posts
- User dashboard for managing posts
- Responsive UI using Bootstrap

## 🔐 Auth

Uses JWT stored in `localStorage`, and managed via `AuthContext`.

## 🧠 AI Tools Used

- [ChatGPT](https://chat.openai.com) for:
  - debugging
  - Routing, context, and form design
  - Understanding and implementing JWT authentication
  - Writing middleware and token verification logic
  - Debugging backend API issues related to JWT
  - Writing Express middleware for protected routes
  - Handling login, signup, and token-based session flow

## 🚀 Setup Instructions

1. Clone the repository:
      ```bash
      git clone https://github.com/anubhavkhare001/blog-platform-frontend
      cd blog-platform-frontend
      
2. Install dependencies:
      npm install
   
4. Start the development server:   
      npm start


📹 Demo
Google Drive Link to Demo Video: https://drive.google.com/file/d/10wNo4PDSutWosudLEajc_U7wgQEHnX_v/view?usp=sharing

📁 Folder Structure

src/
├── components/
│   └── Navbar.js
├── context/
│   └── AuthContext.js
├── pages/
│   ├── Home.js
│   ├── Login.js
│   ├── Signup.js
│   ├── Dashboard.js
│   ├── NewPost.js
│   ├── EditPost.js
│   └── PostDetail.js
└── App.js

