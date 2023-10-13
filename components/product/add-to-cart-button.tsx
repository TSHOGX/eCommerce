"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { createCartItem } from "@/lib/client";
import { useTransition } from "react";
import { Button, Tooltip } from "@nextui-org/react";

export default function AddToCartButton({
  productID,
  selectedSize,
}: {
  productID: string;
  selectedSize: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { data: session, status } = useSession();

  const sessionEmail = session?.user?.email;

  return (
    <div>
      {session && sessionEmail ? (
        <div>
          {!isPending ? (
            <Tooltip content={`Size: ${selectedSize}`}>
              <Button
                className=" bg-gray-800 w-72 h-14 text-white text-xl"
                onClick={() => {
                  startTransition(async () => {
                    await createCartItem(productID, sessionEmail, selectedSize);
                    router.refresh();
                  });
                }}
              >
                Add To Cart
              </Button>
            </Tooltip>
          ) : (
            <Button
              className=" bg-gray-400 w-72 h-14 text-white text-xl"
              isLoading
            >
              Loading
            </Button>
          )}
        </div>
      ) : (
        <Button
          disableAnimation
          className=" bg-gray-800 hover:bg-rose-500 w-72 h-14 text-white text-xl"
        >
          Login To Add
        </Button>
      )}
    </div>
  );
}
