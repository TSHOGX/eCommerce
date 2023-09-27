"use client";

import { deleteFromCart, updateItemQuantity } from "@/lib";
import { CartItem } from "@/lib/types";
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
  return (
    <button
      disabled={isPending}
      className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-4 py-2"
      onClick={() => {
        startTransition(async () => {
          let error;
          if (type === "plus") {
            error = await updateItemQuantity(item, item.quantity + 1);
          } else if (item.quantity - 1 == 0) {
            error = await deleteFromCart(item.id);
          } else {
            error = await updateItemQuantity(item, item.quantity - 1);
          }
          if (error) {
            // Trigger the error boundary in the root error.js
            throw new Error(error.toString());
          }
          router.refresh();
        });
      }}
    >
      {isPending ? <div>wait</div> : <div>{type}</div>}
    </button>
  );
}
