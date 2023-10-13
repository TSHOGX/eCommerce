"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { createCartItem } from "@/lib/client";
import { useTransition } from "react";
import { Button } from "@nextui-org/react";

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
        <></>
      )}
    </div>
  );
}
