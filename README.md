# 🛒 FOREVER | Full-Stack E-Commerce Platform

## 📌 Overview
FOREVER is a **full-stack MERN e-commerce platform** designed to deliver a seamless shopping experience.  
It includes a **customer-facing storefront**, an **admin dashboard**, and a secure **backend API**.  

Key Highlights:
- JWT-based **authentication & authorization**
- Product filtering, cart, and checkout
- **Stripe** payment integration
- Admin dashboard for inventory and orders
- Deployed on **Vercel** with CI/CD pipelines

---

## 🛠️ Tech Stack
- **Frontend**: React.js (Vite), Tailwind CSS  
- **Admin Dashboard**: React.js (Vite), Tailwind CSS  
- **Backend**: Node.js, Express.js, JWT Authentication  
- **Database**: MongoDB (Atlas/local)  
- **Other Tools**: Stripe (payments), Git, Vercel (deployment)  

---

## 📂 Project Structure
``bash
E-COMMERCE-APP/
│
├── admin/                  # Admin Dashboard (React + Vite)
│   ├── public/
│   ├── src/
│   └── package.json
│
├── frontend/               # Customer Storefront (React + Vite)
│   ├── public/
│   ├── src/
│   └── package.json
│
├── backend/                # Express.js Backend
│   ├── config/             # DB connection, env setup
│   ├── controllers/        # Route logic
│   ├── middlewares/        # Auth, error handling
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   ├── server.js           # App entry point
│   └── package.json
│
└── README.md

## Features
👤 User (Frontend)
Register/Login with JWT authentication

Browse products with search & filters

Add/remove items in cart

Checkout with Stripe payments

View order history

🛠️ Admin
Add, edit, delete products

Manage inventory

Track orders & update status

Secure role-based access

🔒 Backend
RESTful APIs (Express.js)

MongoDB schemas for users, products, orders

Middleware for authentication/validation

CI/CD deployment on Vercel

🚀 Getting Started
🔑 Prerequisites
Node.js (>= 16.x)

MongoDB (local or Atlas)

Stripe API Keys

⚙️ Setup Instructions
1️⃣ Clone Repo
bash
Copy code
git clone https://github.com/RahulAdyaa/E-Commerce-App.git
cd E-Commerce-App
2️⃣ Backend Setup
bash
Copy code
cd backend
npm install
cp .env.example .env   # add MongoDB URI, JWT_SECRET, STRIPE keys
npm run dev
3️⃣ Frontend Setup (Customer)
bash
Copy code
cd ../frontend
npm install
npm run dev
4️⃣ Admin Setup
bash
Copy code
cd ../admin
npm install
npm run dev
🌐 Live Demo
🔗 Frontend App

🔗 GitHub Repository

📸 Screenshots
Add screenshots here for extra appeal (Homepage, Product Page, Admin Dashboard).

🔮 Future Enhancements
✅ Wishlist feature

✅ Personalized recommendations (ML-based)

✅ Multi-vendor support

✅ Advanced analytics dashboard

🤝 Contributing
Contributions are welcome 🚀

Fork the repo

Create your branch (git checkout -b feature/newFeature)

Commit changes (git commit -m 'Added newFeature')

Push to branch (git push origin feature/newFeature)

Open a Pull Request

