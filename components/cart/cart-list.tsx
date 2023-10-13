import ChangeQuantityButton from "./change-quantity-button";
import { checkAndGetCart, createCart, getItemsInCart } from "@/lib";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { Cart } from "@prisma/client";
import CartToCheckout from "./cart-to-checkout";

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

  const cartList = await getItemsInCart();

  let subtotal = 0;
  if (cartList.length != 0) {
    for (let item of cartList) {
      if (item.prize) {
        subtotal += parseFloat(item.prize) * item.quantity;
      }
    }
  } else {
    return (
      <div className="flex flex-col items-center justify-between p-24">
        <div className="text-xl font-bold">Cart is empty</div>
      </div>
    );
  }

  return (
    <div className=" container mx-auto">
      <div className=" mx-auto w-fit my-20">
        <div className=" flex flex-col gap-12 lg:gap-40 lg:flex-row">
          <div className=" flex flex-col gap-3 lg:min-w-[556px]">
            <div className=" text-2xl font-bold">Shopping Cart</div>

            <div className=" text-base text-gray-500">
              Total {cartList.length} item(s) in the cart
            </div>

            <div className=" flex flex-col gap-9">
              {cartList.map((cartItem) => (
                <div
                  className=" flex flex-row gap-3 lg:gap-12 justify-between"
                  key={cartItem.id}
                >
                  <div className=" flex flex-row gap-3 lg:gap-12">
                    <img
                      src={cartItem.image}
                      alt="cartItem Imag"
                      className=" w-32 h-32"
                    />

                    <div className=" flex flex-col gap-1 lg:min-w-[250px] my-1">
                      <div className=" text-base font-bold">
                        {cartItem.productTitle}
                      </div>
                      <div className=" text-base text-gray-500">
                        {cartItem.productCategory}
                      </div>
                      <div className=" text-base text-gray-500 flex flex-row gap-4">
                        <div>Size {cartItem.size}</div>
                        <div>Quantity {cartItem.quantity}</div>
                      </div>
                      <ChangeQuantityButton item={cartItem} />
                    </div>
                  </div>

                  <div>
                    <div className=" font-semibold text-gray-700">
                      $
                      {(
                        parseFloat(cartItem.prize ?? "") * cartItem.quantity
                      ).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className=" flex flex-col gap-3 min-w-[350px] mb-20">
            <div className=" text-2xl font-bold">Summary</div>

            <div className=" flex flex-row justify-between">
              <div>Subtotal</div>
              <div>${subtotal.toFixed(2)}</div>
            </div>
            <div className=" flex flex-row justify-between">
              <div>Estimated Shipping & Handling</div>
              <div>$0.00</div>
            </div>
            <div className=" flex flex-row justify-between">
              <div>Estimated Tax</div>
              <div>-</div>
            </div>

            <div className="w-full h-0.5 mx-auto bg-gray-300 border-0"></div>

            <div className=" flex flex-row justify-between">
              <div>Total</div>
              <div>${subtotal.toFixed(2)}</div>
            </div>

            <div className="w-full h-0.5 mx-auto bg-gray-300 border-0"></div>

            <CartToCheckout />
          </div>
        </div>
      </div>
    </div>
  );
}
