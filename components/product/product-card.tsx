import { Product } from "@/lib/types";
import AddToCartIcon from "./add-to-cart-icon";
import Link from "next/link";

export default async function ProductCard({ product }: { product: Product }) {
  return (
    <div className=" ">
      <div className=" relative">
        <Link className="" href={`/product/${product.id}`}>
          <img
            className=" w-64 h-64"
            key={product.id}
            src={product.images[0]}
            alt={product.name}
          />
        </Link>
        <div className=" absolute mx-1 top-1">
          <AddToCartIcon productID={product.id} productTitle={product.name} />
        </div>
      </div>

      <div className=" mx-2 my-3 gap-4">
        <div className=" font-bold">{product.name}</div>
        <div className=" text-gray-500 text-sm">{product.subtitle}</div>
        <div className=" font-semibold text-gray-700 text-sm">
          ${product.price}
        </div>
      </div>
    </div>
  );
}
