"use client"

import { useEffect, useState } from "react";
import ItemCard from "../../components/ItemCard"
import Fetch from "@/utils/fetch"

export default function Items() {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {  
    const fetchProducts = async () => {
        setLoading(true);
        const res = await Fetch("/api/products","GET",null,"Failed to load products");
        const data = res;
        if(data.errorMsg || !data.success){
            setProducts([]);
        } else {
            setProducts(data.data);
        }
        setLoading(false);
    };
    fetchProducts();
}, []);
if(loading){
    return <p>Loading...</p>
}
return (
<div className="p-6 bg-black text-white min-h-screen">
<h2 className="text-3xl font-bold mb-2">Products</h2>
<input className="border p-2 w-full mb-4" placeholder="Search products..." />


<div className="grid md:grid-cols-3 gap-6">
{products.map(item => <ItemCard key={item._id} item={item} />)}
</div>
</div>
)
}