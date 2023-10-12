"use client";
import { createCheckoutSession } from "@/app/actions/stripe";
import { CartList } from "@/lib/types";

export default function CheckoutButton({ cartList }: { cartList: CartList }) {
  function handleClick() {
    createCheckoutSession(cartList);
  }

  return (
    <div className=" mx-auto pt-2">
      <button
        className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-4 py-2"
        onClick={() => handleClick()}
      >
        Pay
      </button>
    </div>
  );
}
