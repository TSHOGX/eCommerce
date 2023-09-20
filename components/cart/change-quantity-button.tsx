"use client";

import { deleteFromCart, updateItemQuantity } from "@/lib";
import { CartItem } from "@/lib/types";
import { useRouter } from "next/navigation";

export default async function ChangeQuantityButton({
  item,
  type,
}: {
  item: CartItem;
  type: "plus" | "minus";
}) {
  const router = useRouter();
  return (
    <button
      className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-4 py-2"
      onClick={async () => {
        if (type === "plus") {
          await updateItemQuantity(item, item.quantity + 1);
        } else {
          if (item.quantity - 1 == 0) {
            await deleteFromCart(item.id);
          } else {
            await updateItemQuantity(item, item.quantity - 1);
          }
          router.refresh();
        }
      }}
    >
      {type}
    </button>
  );
}
