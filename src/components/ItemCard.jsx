import Link from 'next/link'


export default function ItemCard({ item }) {
return (
<div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
<img src={item.image} className="w-full h-40 object-cover rounded" />
<h3 className="text-lg font-semibold mt-2">{item.title}</h3>
<p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
<p className="font-bold mt-2">${item.price}</p>
<Link href={`/product/${item._id}`} className="mt-2 inline-block px-4 py-1 bg-blue-600 text-white rounded">Details</Link>
</div>
)
}