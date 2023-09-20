"use client";

import useSWR from "swr";
import { Cart } from "@/lib/types";
import ChangeQuantityButton from "./change-quantity-button";

export default function CartList() {
  const fetcher = (url: RequestInfo | URL) =>
    fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/cart", fetcher);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  const cart: Cart = data;
  return (
    <ul className=" flex flex-col gap-2">
      {cart.map((cartItem) => (
        <li key={cartItem.id}>
          <div className=" flex flex-row gap-2 items-center">
            <div className=" text-black">{cartItem.productTitle}: </div>
            <div className=" text-black">
              Quantity: {cartItem.quantity.toString()}
            </div>
            <ChangeQuantityButton item={cartItem} type="minus" />
            <ChangeQuantityButton item={cartItem} type="plus" />
          </div>
        </li>
      ))}

      <button className=" hover:bg-slate-400 mr-4">Pay</button>
    </ul>
  );
}
