'use client'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'


export default function Navbar() {
const { data: session } = useSession()


return (
<nav className="sticky top-0 bg-white shadow z-50 p-4 flex justify-between items-center">
<Link href="/" className="font-bold text-xl">MyStore</Link>


<div className="flex gap-6 items-center">
<Link href="/">Home</Link>
<Link href="/items">Products</Link>
<Link href="#features">Features</Link>
<Link href="#about">About</Link>


{!session ? (
<>
<Link href="/login" className="px-3 py-1 bg-blue-600 text-white rounded">Login</Link>
<Link href="/register" className="px-3 py-1 border rounded">Register</Link>
</>
) : (
<div className="relative group">
<button className="px-3 py-1 bg-gray-800 text-white rounded">{session.user.name}</button>


<div className="hidden group-hover:block absolute right-0 mt-2 bg-white border rounded shadow">
<Link href="/dashboard/add-product" className="block px-4 py-2">Add Product</Link>
<Link href="/dashboard/manage-products" className="block px-4 py-2">Manage Products</Link>
<button onClick={() => signOut()} className="block w-full text-left px-4 py-2 text-red-600">Logout</button>
</div>
</div>
)}
</div>
</nav>
)
}