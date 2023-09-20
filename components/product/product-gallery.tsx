"use client";

import useSWR from "swr";
import { Products } from "@/lib/types";
import AddToCartButton from "./add-to-cart-button";
import Link from "next/link";

export default function ProductGallary() {
  const fetcher = (url: RequestInfo | URL) =>
    fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/product", fetcher);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  const products: Products = data;
  return (
    <ul className=" flex flex-col gap-2">
      {products.map((product) => (
        <li key={product.id}>
          <div className=" flex flex-row gap-2 items-center">
            <div className=" text-black">{product.title}:</div>
            <div className=" text-black">Price: {product.price.toString()}</div>
            <AddToCartButton
              productID={product.id}
              productTitle={product.title}
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
