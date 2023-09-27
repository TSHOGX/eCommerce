import ChangeQuantityButton from "./change-quantity-button";
import { getCart } from "@/lib";

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

      <button className=" hover:bg-slate-400 mr-4">Pay</button>
    </ul>
  );
}
