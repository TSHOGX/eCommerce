"use client";

import { updateCartItem } from "@/lib";
import { deleteCartItem } from "@/lib/client";
import { CartItem } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function ChangeQuantityButton({
  item,
  type,
}: {
  item: CartItem;
  type: "plus" | "minus";
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
              if (type === "plus") {
                await updateCartItem(item.id, item.quantity + 1);
              } else if (item.quantity - 1 == 0) {
                await deleteCartItem(item.id, sessionEmail);
              } else {
                await updateCartItem(item.id, item.quantity - 1);
              }
              router.refresh();
            });
          }}
        >
          {isPending ? <div>wait</div> : <div>{type}</div>}
        </button>
      ) : (
        <></>
        // <button
        //   disabled
        //   className=" disabled:opacity-90 text-white bg-gray-800 font-medium rounded-full text-sm px-4 py-2"
        // >
        //   {isPending ? <div>wait</div> : <div>{type}</div>}
        // </button>
      )}
    </div>
  );
}
