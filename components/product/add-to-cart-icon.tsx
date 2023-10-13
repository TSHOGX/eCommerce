"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { createCartItem } from "@/lib/client";
import { useTransition } from "react";
import { IconButton } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Button } from "@nextui-org/react";

export default function AddToCartIcon({
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
        <div>
          {!isPending ? (
            <IconButton
              onClick={() => {
                startTransition(async () => {
                  // await createCartItem(productID, sessionEmail);
                  router.refresh();
                });
              }}
            >
              <ShoppingBasketIcon sx={{ color: "white" }} />
            </IconButton>
          ) : (
            <Button isLoading isIconOnly className=" bg-transparent" />
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
