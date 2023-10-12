import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import SignoutButton from "@/components/auth/signout-button";
import { checkAndGetCart, testPrisma, testPrismaDeleteAll } from "@/lib";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Image from "next/image";

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

        <div className=" flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between">
          <div className=" flex gap-8">
            <Image
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
      </div>
    </div>
  );
}
