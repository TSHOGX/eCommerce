"use client";

import { updateCartItem } from "@/lib";
import { deleteCartItem } from "@/lib/client";
import { CartListItem } from "@/lib/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function ChangeQuantityButton({ item }: { item: CartListItem }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { data: session, status } = useSession();

  const sessionEmail = session?.user?.email;

  return (
    <div>
      {session && sessionEmail ? (
        <ButtonGroup>
          {isPending ? (
            <Button isLoading size="sm" aria-label="Add"></Button>
          ) : (
            <Button
              isIconOnly
              size="sm"
              aria-label="Add"
              onPress={() => {
                startTransition(async () => {
                  await updateCartItem(item.id, item.quantity + 1);

                  router.refresh();
                });
              }}
            >
              <AddIcon />
            </Button>
          )}
          {isPending ? (
            <Button isLoading size="sm" aria-label="Remove"></Button>
          ) : (
            <Button
              isIconOnly
              size="sm"
              aria-label="Remove"
              onPress={() => {
                startTransition(async () => {
                  if (item.quantity - 1 == 0) {
                    await deleteCartItem(item.id, sessionEmail);
                  } else {
                    await updateCartItem(item.id, item.quantity - 1);
                  }
                  router.refresh();
                });
              }}
            >
              <RemoveIcon />
            </Button>
          )}
        </ButtonGroup>
      ) : (
        // <button
        //   disabled={isPending}
        //   className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-4 py-2"
        //   onClick={() => {
        //     startTransition(async () => {
        //       if (type === "plus") {
        //         await updateCartItem(item.id, item.quantity + 1);
        //       } else if (item.quantity - 1 == 0) {
        //         await deleteCartItem(item.id, sessionEmail);
        //       } else {
        //         await updateCartItem(item.id, item.quantity - 1);
        //       }
        //       router.refresh();
        //     });
        //   }}
        // >
        //   {isPending ? <div>wait</div> : <div>{type}</div>}
        // </button>
        <></>
      )}
    </div>
  );
}
