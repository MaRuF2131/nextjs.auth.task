"use client"

import { useEffect, useState } from "react";
import ItemCard from "./ItemCard"
import Fetch from "@/utils/fetch"
import Section from "./Section";

export default function TrendingProduct() {
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
     fetchProducts() 
}, []);
if(loading){
    return <p className="text-blue-950 text-center">Loading...</p>
}
return (
<div className="p-6 w-full">
   <Section title="Trending Products" subtitle="Check out our popular items" />

    <div className="grid md:grid-cols-3 gap-6">
    {products.slice(0, 3).map(item => <ItemCard key={item._id} item={item} />)}
    </div>
</div>
)
}