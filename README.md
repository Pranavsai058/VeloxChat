<<<<<<< HEAD
# 💬 MERN Stack Chat App  

A **real-time private chat application** built using the **MERN Stack (MongoDB, Express, React, Node.js)** with **Redux Toolkit** for state management and **Socket.IO** for instant messaging.  

This is a **1-to-1 chat app** – no group chat, no online/offline status, just simple direct messaging.  

---

## 📖 How It Works  

1. **Authentication**  
   - Users register & log in using a JWT-based authentication system.  
   - Passwords are hashed with bcrypt before saving to the database.  

2. **Chat Flow**  
   - When a user sends a message, it is **saved in MongoDB**.  
   - Socket.IO emits the message to the other user in **real-time**.  
   - Redux stores the current chat history in the frontend state.  

3. **Real-Time Updates**  
   - No need to refresh – new messages appear instantly via Socket.IO events.  

So basically:  
**React (UI)** ⇄ **Redux (state)** ⇄ **Socket.IO (real-time)** ⇄ **Node/Express (backend)** ⇄ **MongoDB (database)**  

---

## 🚀 Features  

✅ **1-to-1 Private Chat** – Simple direct messaging  
✅ **Real-time Messaging** – Instant updates using Socket.IO  
✅ **User Authentication** – JWT-based login & signup  
✅ **Redux State Management** – Manages chat messages & auth state  
✅ **Message Persistence** – Chats saved in MongoDB  
✅ **Responsive UI** – Works on desktop & mobile  

---

## 🛠️ Tech Stack  

- **Frontend**: React + Redux Toolkit + TailwindCSS (or any CSS framework)  
- **Backend**: Node.js + Express.js  
- **Database**: MongoDB + Mongoose  
- **Real-time**: Socket.IO  
- **Authentication**: JWT + bcrypt  

---

## 📂 Project Structure  
=======
# 💬 React + Vite Chat App

A modern real-time chat application built using **React**, **Redux**, and **Vite**. Features include user authentication, profile management, and live messaging — all wrapped in a fast and scalable frontend.

---

## 🚀 Tech Stack

- ⚛️ **React** — UI library
- ⚡ **Vite** — blazing fast build tool
- 🧠 **Redux Toolkit** — state management
- 🛠️ **React Router** — page navigation
- 💅 **Tailwind CSS / CSS Modules** (customize as needed)
- 🌐 **Socket.IO** (optional for real-time features)

---

>>>>>>> 7b9bf63cf0cb15282d0877fece596f90195817d5

