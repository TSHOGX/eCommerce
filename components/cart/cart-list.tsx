import ChangeQuantityButton from "./change-quantity-button";
import { checkAndGetCart, createCart, getItemsInCart } from "@/lib";
import CheckoutButton from "../checkout/checkout-button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { Cart } from "@prisma/client";

export default async function CartList() {
  let cart: Cart;

  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("Please Login First!");
  }

  if (!session.user?.email) {
    throw new Error("User has no email address??");
  }

  // check and get, or create new
  const tryCart = await checkAndGetCart(session.user.email);

  if (!tryCart) {
    cart = await createCart(session.user.email);
  } else {
    cart = tryCart;
  }

  const cartItems = await getItemsInCart();

  return (
    <ul className=" flex flex-col gap-2">
      {cartItems.map((cartItem) => (
        <li key={cartItem.id}>
          <div className=" flex flex-row gap-2 items-center">
            <div className=" text-black">{cartItem.productTitle}: </div>
            <div className=" text-black">Quantity: {cartItem.quantity}</div>
            <ChangeQuantityButton item={cartItem} type="minus" />
            <ChangeQuantityButton item={cartItem} type="plus" />
          </div>
        </li>
      ))}

      <CheckoutButton />
    </ul>
  );
}
