import Link from "next/link";

export default function Hero() {
return (
<section className="text-center w-full py-24 bg-blue-600 text-white">
<h1 className="text-4xl font-bold mb-4">Welcome to MyStore</h1>
<p className="text-lg mb-6">Your perfect place to find quality products</p>
<Link href="/product" className="px-6 py-3 bg-white text-blue-600 rounded font-semibold">Explore Products</Link>
</section>
)
}