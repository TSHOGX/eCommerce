import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import SignoutButton from "@/components/auth/signout-button";
import {
  checkAndGetCart,
  getUserOrders,
  testPrisma,
  testPrismaDeleteAll,
} from "@/lib";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Account() {
  // testPrisma();
  // testPrismaDeleteAll();

  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("Please Login First!");
  }

  if (!session.user?.email) {
    throw new Error("User has no email address??");
  }

  // check and get, or create new
  await checkAndGetCart(session.user.email);

  // get orders
  const userOrders = await getUserOrders(session.user.email);
  // console.log(userOrders);

  // get time
  const hourNow = new Date().getHours();
  let greeding;
  if (hourNow < 12 && hourNow > 6) {
    greeding = "Good Morning!";
  } else if (hourNow < 18 && hourNow >= 12) {
    greeding = "Good Afternoon!";
  } else {
    greeding = "Good Evening!";
  }

  return (
    <div className=" max-w-5xl mx-12 lg:mx-auto">
      <div className=" my-20">
        <div className=" mb-16 text-4xl lg:text-5xl">{greeding}</div>

        <div className=" mb-16 flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between">
          <div className=" flex gap-8">
            <img
              className=" rounded-full w-20 h-20"
              src={session.user.image ?? ""}
              alt="user avatar"
            />
            <div className=" flex flex-col my-1 h-full gap-4">
              <div className=" text-2xl">{session.user.name}</div>
              <div className=" text-sm text-gray-400">{session.user.email}</div>
            </div>
          </div>
          <div className=" flex flex-row my-1 gap-12 mx-4 uppercase">
            <Link className=" hover:text-gray-600" href={`/cart`}>
              Shopping cart
            </Link>
            <div className=" hover:text-gray-600">
              <SignoutButton />
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-6 ">
          <div className=" text-xl font-semibold">Past Orders</div>

          <div>
            <ol className=" relative ml-2 border-l border-gray-200 dark:border-gray-700">
              {userOrders.map((order) => (
                <li className="mb-10 ml-4" key={order.id}>
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                  <div className="text-base font-semibold text-gray-900 dark:text-white">
                    {order.timestamp.split("T")[0]}
                  </div>

                  {order.transProducts.map((product) => (
                    <div
                      key={order.id + product.productID}
                      className=" grid grid-cols-3 text-base font-normal text-gray-500 dark:text-gray-400"
                    >
                      <div>
                        Product:{` `}
                        <Link
                          href={`/product/${product.productID}`}
                          className=" underline"
                        >
                          {product.productID}
                        </Link>
                      </div>
                      <div>Quantity: {product.quantity}</div>
                      <div>Size: {product.size}</div>
                    </div>
                  ))}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
