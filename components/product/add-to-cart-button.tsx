"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { createCartItem } from "@/lib/client";
import { useTransition } from "react";

export default function AddToCartButton({
  productID,
}: {
  productID: string;
  productTitle: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { data: session, status } = useSession();

  const sessionEmail = session?.user?.email;

  return (
    <div>
      {session && sessionEmail ? (
        <button
          disabled={isPending}
          className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-4 py-2"
          onClick={() => {
            startTransition(async () => {
              await createCartItem(productID, sessionEmail);
              router.refresh();
            });
          }}
        >
          {isPending ? <div>adding</div> : <div>Add To Cart</div>}
        </button>
      ) : (
        <></>
        // <button
        //   disabled
        //   className=" disabled:opacity-90 text-white bg-gray-800 font-medium rounded-full text-sm px-4 py-2"
        // >
        //   {isPending ? <div>adding</div> : <div>Add To Cart</div>}
        // </button>
      )}
    </div>
  );
}
