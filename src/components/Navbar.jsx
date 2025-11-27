'use client'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useState } from 'react';


export default function Navbar() {
const { data: session } = useSession()
const [hover, setHover] = useState(false);


return (
<nav className="sticky top-0 bg-white shadow z-[999] w-full p-4 flex justify-between items-center">
<Link href="/" className="font-bold text-xl">MyStore</Link>


<div className="flex gap-6 items-center">
<Link href="/">Home</Link>
<Link href="/product">Products</Link>
<Link href="#features">Features</Link>
<Link href="#about">About</Link>


{!session ? (
<>
<Link href="/login" className="px-3 py-1 bg-blue-600 text-white rounded">Login</Link>
<Link href="/register" className="px-3 py-1 border rounded">Register</Link>
</>
) : (
<div className="relative ">
<button onClick={()=>setHover(!hover)} className="px-3 py-1 bg-gray-800 text-white rounded cursor-pointer">{session.user.name}</button>


<div onClick={()=>setHover(false)} className={` ${hover ? "block" : "hidden"} w-auto min-w-56 absolute right-0 mt-4 px-4 py-2 bg-white border rounded shadow`}>
<Link href="/dashboard/add-product" className="block w-full p-2">Add Product</Link>
<Link href="/dashboard/manage-products" className="block w-full p-2 ">Manage Products</Link>
<button onClick={() => signOut()} className="block w-full text-left p-2  text-red-600">Logout</button>
</div>
</div>
)}
</div>
</nav>
)
}