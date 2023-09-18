import ChangeQuantityButton from "@/components/cart/change-quantity-button";
import { getCart } from "../../lib";

export default async function Purchase() {
  const cart = await getCart();
  if (!cart.length) return null;

  return (
    <div className="flex min-h-screen flex-col items-center">
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
    </div>
  );
}
