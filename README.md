# 🧶 Glim Store — Frontend

A full-stack e-commerce web app for handmade crochet products, built with React and connected to a Node.js/Express backend.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?style=flat&logo=react-router)

---

##  Features

-  Browse and filter products by category
-  Search products from the navbar
-  Add to cart with quantity controls
-  Save favourites
-  User authentication (signup & login)
-  Place orders with shipping details
-  View past orders in profile page
-  Custom order request form
-  Responsive design

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, categories, featured products |
| Products | `/products` | Full product grid with filter & search |
| Product Detail | `/products/:id` | Single product with add to cart |
| Cart | `/cart` | Cart items, quantities, subtotal |
| Checkout | `/checkout` | Shipping form, order placement |
| Confirmation | `/confirmation/:id` | Order success screen |
| Favourites | `/favourites` | Saved products |
| Login | `/login` | User login |
| Signup | `/signup` | New account |
| Profile | `/profile` | Account info & order history |
| About | `/about` | Brand story & team |
| Custom Orders | `/contact` | Custom crochet request form |
| Contact Us | `/contact-us` | Contact info & message form |

---

## Tech Stack

- **React 18** with Vite
- **React Router v6** for navigation
- **Context API** for global state (Cart, Auth, Favourites)
- **Tailwind CSS** for styling
- **Fetch API** for backend communication
- **JWT** stored in localStorage for auth sessions

---

##  Getting Started

### Prerequisites
- Node.js 18+
- [glim-backend](https://github.com/mayarSultan/glim-backend) running on port 5000

### Installation

```bash
# Clone the repo
git clone https://github.com/mayarSultan/glim-store.git
cd glim-store

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

---

##  Related

- **Backend repo:** [glim-backend](https://github.com/mayarSultan/glim-backend)

---

##  Author

**Mayar Sultan** — built as a portfolio project to demonstrate full-stack React development skills.