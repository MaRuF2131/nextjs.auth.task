import Fetch from "@/utils/fetch";
import Link from "next/link";

export default async function ItemDetails({ params }) {

  const { id } =await params;
  // Fetch single product from API
  const res = await Fetch(`/api/products?id=${id}`,'GET',null,'Failed to load product');

  const data = res;
  
  if (!data || !data.success || data.errorMsg || !data.data) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-red-600">Product Not Found!</h2>
        <Link
          href="/product"
          className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded"
        >
          Back
        </Link>
      </div>
    );
  }

  const product = data.data;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={product.image || "https://picsum.photos/600"}
        className="w-full h-80 object-cover rounded"
      />

      <h2 className="text-3xl font-bold mt-4">{product.title}</h2>
      <p className="text-gray-700 mt-2">{product.description}</p>

      <p className="text-gray-700 mt-2">{product.fullDescription}</p>

      <p className="mt-4 font-bold text-xl">${product.price}</p>

      <Link
        href="/product"
        className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded"
      >
        Back
      </Link>
    </div>
  );
}
