"use client";

import { addToCart } from "@/lib";
import { useRouter } from "next/navigation";

export default async function AddToCartButton({
  productID,
  productTitle,
}: {
  productID: string;
  productTitle: string;
}) {
  const router = useRouter();
  return (
    <button
      className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-4 py-2"
      onClick={async () => {
        await addToCart(productID, productTitle);
        router.refresh();
      }}
    >
      Add To Cart
    </button>
  );
}
