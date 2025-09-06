# 🛒 FOREVER | Full-Stack E-Commerce Platform

<div align="center">

**A modern, full-stack MERN e-commerce application featuring a customer storefront, a powerful admin dashboard, and a secure backend API.**

</div>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
  <img src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white" alt="Stripe">
</p>

<p align="center">
  <a href="#-about-the-project">About The Project</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-screenshots">Screenshots</a> •
  <a href="#-contributing">Contributing</a>
</p>

---

## 📌 About The Project

FOREVER is a complete e-commerce solution built with the MERN stack, designed to provide a seamless and intuitive shopping experience. It includes a beautiful customer-facing storefront, a comprehensive admin dashboard for managing the store, and a robust backend API to handle all the business logic.

**Key Highlights:**
* **Secure Authentication:** JWT-based authentication and authorization to protect user data and admin routes.
* **Dynamic Storefront:** Real-time product filtering, a persistent shopping cart, and a streamlined checkout process.
* **Payment Integration:** Secure and reliable payment processing powered by **Stripe**.
* **Powerful Admin Panel:** A dedicated dashboard for easy management of products, inventory, and customer orders.
* **Automated Deployment:** Deployed on **Vercel** with CI/CD pipelines for continuous integration and delivery.

---

## ✨ Features

| Feature                 | 🛍️ Customer Storefront | 🛠️ Admin Dashboard | ⚙️ Backend API (RESTful)         |
| :---------------------- | :--------------------: | :----------------: | :-------------------------------: |
| **Authentication** |      Register/Login      |   Role-Based Access    |        JWT Authentication         |
| **Product Management** |   Browse & Filter    |   CRUD Operations    |       Product/Order Models        |
| **Shopping Cart** |   Add/Remove Items   |         N/A          |      Cart State Management      |
| **Checkout & Payments** |   Stripe Integration   |    View Payments     |      Secure Payment Intent      |
| **Order Management** |    View History      |   Track & Update   |        Order Logic/Routes         |
| **Inventory** |    Stock Display     |   Manage Stock     | Inventory Tracking in DB |

---

## 🛠️ Tech Stack

This project is built with modern, industry-standard technologies:

* **Frontend (Customer & Admin):** React.js (Vite), Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (with Mongoose)
* **Authentication:** JSON Web Tokens (JWT)
* **Payment Gateway:** Stripe
* **Deployment:** Vercel

---

## 🚀 Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

Make sure you have the following installed on your machine:
* [Node.js](https://nodejs.org/en/) (v16.x or higher)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
* [Git](https://git-scm.com/)
* A running MongoDB instance (either local or via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation & Setup

1.  **Clone the Repository**
    ```sh
    git clone [https://github.com/RahulAdyaa/E-Commerce-App.git](https://github.com/RahulAdyaa/E-Commerce-App.git)
    cd E-Commerce-App
    ```

2.  **Backend Setup**
    ```sh
    cd backend
    npm install
    ```
    Create a `.env` file in the `backend` directory by copying the example file:
    ```sh
    cp .env.example .env
    ```
    Update the `.env` file with your credentials:
    ```env
    MONGO_URI="your_mongodb_connection_string"
    JWT_SECRET="your_super_secret_key"
    STRIPE_SECRET_KEY="your_stripe_secret_key"
    ```
    Start the backend server:
    ```sh
    npm run dev
    ```

3.  **Frontend (Client) Setup**
    ```sh
    # Open a new terminal
    cd frontend
    npm install
    npm run dev
    ```

4.  **Admin Dashboard Setup**
    ```sh
    # Open a new terminal
    cd admin
    npm install
    npm run dev
    ```
> Your application should now be running!
> * Frontend: `http://localhost:5173`
> * Admin: `http://localhost:5174` (or as specified by Vite)
> * Backend: `http://localhost:8000`

---

## 📸 Screenshots

*(Add your screenshots here to showcase the application)*





---

## 🔮 Future Enhancements

We have many ideas for improving FOREVER! Here are a few:
- [ ] Implement a user wishlist feature.
- [ ] Add product reviews and ratings.
- [ ] Develop a personalized recommendation engine.
- [ ] Expand to a multi-vendor marketplace.
- [ ] Create an advanced analytics dashboard for admins.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/NewFeature`)
3.  Commit your Changes (`git commit -m 'Add some NewFeature'`)
4.  Push to the Branch (`git push origin feature/NewFeature`)
5.  Open a Pull Request
