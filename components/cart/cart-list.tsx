import ChangeQuantityButton from "./change-quantity-button";
import { getCart } from "@/lib";
// import Link from "next/link";
import CheckoutButton from "../checkout/checkout-button";

export default async function CartList() {
  let cart = await getCart();
  return (
    <ul className=" flex flex-col gap-2">
      {cart?.map((cartItem) => (
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

      <CheckoutButton />
    </ul>
  );
}
