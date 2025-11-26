import Link from "next/link";

export default function ItemDetails({ params }) {
return (
<div className="max-w-3xl mx-auto p-6">
<img src="https://picsum.photos/600" className="w-full h-80 object-cover rounded" />
<h2 className="text-3xl font-bold mt-4">Product Title {params?.id}</h2>
<p className="text-gray-700 mt-2">Full product description here...</p>
<p className="mt-4 font-bold text-xl">$30</p>
<Link href="/product" className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded">Back</Link>
</div>
)
}