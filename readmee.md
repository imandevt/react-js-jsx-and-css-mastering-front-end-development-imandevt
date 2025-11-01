# 🗂️ Task Management Application

A responsive and user-friendly **Task Management App** built with **React (Vite)** that allows users to **add, delete, and manage tasks efficiently**.  
The app uses **Local Storage** to save tasks persistently, even after closing or refreshing the browser.

---

## 🧾 Project Information

**Course:** MERN Stack Development  
**Project Title:** Task Management Application  
**Student Name:** Abdulmumuni Yusuf  
**Institution:** Bayero University Kano  
**Instructor:** Dedan Okware  
**Submission Date:** October 2025

---

## 🎯 Project Objective

The goal of this project is to **develop a functional front-end application** using React to manage a user’s tasks dynamically.  
It demonstrates understanding of:

- React components and state management
- React Router for navigation
- Persistent data using Local Storage
- UI responsiveness and component reuse

---

## 🚀 Features

✅ Add new tasks  
✅ Delete existing tasks  
✅ Mark tasks as completed or active  
✅ Filter tasks (All / Active / Completed)  
✅ Persistent storage using Local Storage  
✅ Responsive design for all devices

---

## 🛠️ Tech Stack

| Category               | Technology Used                       |
| ---------------------- | ------------------------------------- |
| **Frontend Framework** | React (Vite)                          |
| **Routing**            | React Router DOM                      |
| **Styling**            | CSS (custom + responsive)             |
| **State Management**   | React Hooks (`useState`, `useEffect`) |
| **Storage**            | Browser Local Storage                 |

---

## 📁 Folder Structure

project-root/
├── public/
├── src/
│ ├── components/
│ │ ├── Card.jsx
│ │ ├── TaskManager.jsx
│ ├── hooks/
│ │ ├── useLocalStorage.js
│ ├── pages/
│ │ ├── Tasks.jsx
│ ├── layout/
│ │ ├── Layout.jsx
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
├── package.json
├── vite.config.js
└── README.md

🧩 Usage

Type a new task in the input field and click Add.

Click on a task to mark it as Completed or revert it to Active.

Use the filter buttons — All, Active, or Completed — to view tasks accordingly.

Click Delete to remove a task permanently.

All data is stored in Local Storage, so your tasks remain saved even after refresh.

🧠 Key Concepts Demonstrated

React Component Architecture — Reusable UI elements (Card, TaskManager, Layout)

State & Effects — Managing data using useState and useEffect

Custom Hooks — LocalStorage handling with a custom useLocalStorage hook

Routing — Navigation handled with react-router-dom

Styling — Clean and responsive layout with plain CSS

💡 Customization Options

You can easily:

Update theme or colors in index.css

Modify task card design in Card.jsx

Integrate backend API for database-driven task storage

Extend filtering and sorting logic for better task organization

🖥️ Deployment

To build and deploy the project for production:

npm run build

This generates an optimized /dist folder that can be deployed to platforms like:

Vercel

Netlify

GitHub Pages

Render

📸 Preview (Optional)

You can add screenshots of your running application here:

/screenshots/
├── home-page.png
├── task-page.png

👨‍💻 Author

Name: Abdulmumuni Yusuf
Location: Ungwan Shanu, Kaduna, Nigeria
Occupation: Information & Media Studies Student / IT Professional
Institution: Bayero University Kano

🏁 Acknowledgements

Special thanks to Dedan okware for guidance and supervision throughout the MERN Stack project.
Also, gratitude to all contributors and peers who provided feedback and collaboration during development.
