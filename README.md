🛒 Next.js Product Management App

A full-stack product management application built using Next.js (App Router) with user authentication powered by NextAuth.js and database storage using MongoDB (Official MongoDB Driver).
The app includes both public pages and protected pages (Add Product, Manage Products).

🚀 Live Demo https://nextjs-auth-task.vercel.app

(তুমি এখানে Vercel live link দেবে)

✨ Features
🔓 Public Pages

Landing Page with:

Sticky Navbar

Hero Section

Trending Products

Features / Sections

Responsive Design

Product Listing Page

Product Details Page

🔐 Authentication

Google Login

GitHub Login

Email + Password Login (Credentials Provider)

Secure JWT session using NextAuth

Custom Login & Register Page (MongoDB User Storage)

🔒 Protected Pages

Add Product (only logged-in users)

Manage Products (View/Delete)

Server-side session verification

Client wrapper to protect UI components

🛢️ Database

MongoDB (Official driver, no Mongoose)

Store:

Users

Products

⚙️ Backend (API Routes)

/api/auth/[...nextauth] → Authentication handling

/api/products → GET, POST, DELETE

Fully secured API only allowing modification if user has a valid session token

🧰 Tech Stack
Frontend

Next.js 14 (App Router)

React 18

Tailwind CSS

NextAuth.js (Client + Server)

Backend

API Routes via Next.js

MongoDB Driver (No Mongoose)

Auth Providers

Google

GitHub

Credentials (Email + Password)

📂 Project Structure
src/
 ├── app/
 │   ├── login/
 │   ├── register/
 │   ├── product/
 │   │     ├── page.js
 │   │     └── [id]/page.js
 │   ├── add-product/
 │   ├── manage-products/
 │   ├── api/
 │   │     ├── auth/[...nextauth]/route.js
 │   │     └── products/route.js
 ├── components/
 │   ├── Navbar.jsx
 │   ├── ProtectedWrapper.jsx
 │   ├── TrendingProducts.jsx
 │   └── Loader.jsx
 └── lib/
     └── mongodb.js

⚙️ Environment Variables

Create a .env.local file:

# Auth URLs
NEXTAUTH_URL=http://localhost:3000

# JWT Secret
NEXTAUTH_SECRET=your-secret-key

# Google Auth
GOOGLE_ID=your-google-client-id
GOOGLE_SECRET=your-google-secret

# GitHub Auth
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-secret

# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/

🛠️ Installation & Setup
# 1️⃣ Clone the repo
git clone https://github.com/yourname/yourrepo.git
cd yourrepo

# 2️⃣ Install dependencies
npm install

# 3️⃣ Set environment variables

Create .env.local (as shown above)

# 4️⃣ Run development server
npm run dev


# Visit:
👉 http://localhost:3000

🧭 Route Summary
# Route	Type	Description
# /	Public	Landing Page
# /login	Public	Login (Google, GitHub, Credentials)
# /register	Public	Register User
# /product	Public	Product Listing
# /product/[id]	Public	Product Details
# /add-product	Protected	Add new product
# /manage-products	Protected	View + Delete products
# /api/products	API	GET, POST, DELETE
# /api/auth/[...nextauth]	Auth	NextAuth providers
# 🔒 Protected Routes

# Protected pages use a custom wrapper:

# import { useSession } from "next-auth/react";

# export default function Protected({ children }) {
  # const { status } = useSession();
  # if (status === "loading") return <p>Loading...</p>;
  # if (status === "unauthenticated") return redirect("/login");
  # return children;
}

🧪 Screenshots (Optional Section)

# You can add screenshots here:

# /public/screenshots/

# 📦 Deployment
Deploy to Vercel:
vercel


# Make sure you set all environment variables in Vercel Dashboard → Project Settings → Environment Variables.

📜 License

MIT License

🎉 Final Notes

This project demonstrates:

Full authentication

Protected routes

MongoDB database operations

Clean UI & responsive layout

App Router best practices
