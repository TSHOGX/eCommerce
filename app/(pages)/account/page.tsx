import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { checkAndGetCart, testPrisma, testPrismaDeleteAll } from "@/lib";
import { getServerSession } from "next-auth";

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

  return (
    <div className="flex flex-col items-center justify-between p-24">
      hello, Account
    </div>
  );
}
