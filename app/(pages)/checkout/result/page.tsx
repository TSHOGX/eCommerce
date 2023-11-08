import { TransProduct, Transaction } from "@/lib/types";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import Link from "next/link";
import { createCart, deleteCart, getItemsInCart, putOrder } from "@/lib";

export default async function Result({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  // get transaction session
  const { session_id: session_id, amount: amount } = searchParams as {
    [key: string]: string;
  };

  if (!session_id) {
    return (
      <div className="flex flex-col items-center justify-between p-24 gap-12">
        <div className="text-xl font-bold">Unauthorized access</div>
        <div className=" flex flex-row gap-4">
          <Link className=" hover:text-gray-600 underline" href={`/`}>
            Continue Shopping
          </Link>
          <Link className=" hover:text-gray-600 underline" href={`/account`}>
            Your Account
          </Link>
        </div>
      </div>
    );
  }

  // get UTC timestamp
  const timestamp = new Date();

  // get session email
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return (
      <div className="flex flex-col items-center justify-between p-24 gap-12">
        <div className="text-xl font-bold">Unauthorized access</div>
        <div className=" flex flex-row gap-4">
          <Link className=" hover:text-gray-600 underline" href={`/`}>
            Continue Shopping
          </Link>
          <Link className=" hover:text-gray-600 underline" href={`/account`}>
            Your Account
          </Link>
        </div>
      </div>
    );
  }

  // get cart
  const cartList = await getItemsInCart();
  let transProducts: TransProduct[] = [];
  for (let cartItem of cartList) {
    transProducts.push({
      productID: cartItem.productId,
      quantity: cartItem.quantity,
      size: cartItem.size ?? "",
    });
  }

  // create transaction
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const items = await stripe.checkout.sessions.retrieve(session_id);
  // console.log(items);
  const transaction: Transaction = {
    id: session_id,
    timestamp: timestamp.toISOString(),
    accountEmail: session.user.email,
    transProducts: transProducts,
    shippingAddress: items.shipping_details.address,
  };
  // console.log(transaction);

  // store into DynamoDB
  await putOrder(transaction);

  // create new cart
  await deleteCart(session.user.email);
  await createCart(session.user.email);

  return (
    <div className="flex flex-col items-center justify-between p-24 gap-12">
      <div className="text-xl font-bold">Success!</div>
      <div className=" flex flex-row gap-4">
        <Link className=" hover:text-gray-600 underline" href={`/`}>
          Continue Shopping
        </Link>
        <Link className=" hover:text-gray-600 underline" href={`/account`}>
          Your Account
        </Link>
      </div>
    </div>
  );
}
