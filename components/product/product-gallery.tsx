import { Products } from "@/lib/types";
import AddToCartButton from "./add-to-cart-button";
import Link from "next/link";
import { getAllProducts } from "@/lib";

export default async function ProductGallary() {
  const products: Products = await getAllProducts();
  return (
    <ul className=" flex flex-col gap-2">
      {products.map((product) => (
        <li key={product.id}>
          <div className=" flex flex-row gap-2 items-center">
            <div className=" text-black">{product.name}:</div>
            <div className=" text-black">Price: {product.price}</div>
            <AddToCartButton
              productID={product.id}
              productTitle={product.name}
            />
            <Link
              className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-4 py-2"
              href={`/product/${product.id}`}
            >
              View More
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
