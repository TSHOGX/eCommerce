"use client";

import useSWR from "swr";
import { Products } from "@/lib/types";
import AddToCartButton from "./add-to-cart-button";

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
            <div className=" text-black">{product.title}: </div>
            <div className=" text-black">Price: {product.price.toString()}</div>
            <AddToCartButton
              productID={product.id}
              productTitle={product.title}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
