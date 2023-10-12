import CartList from "@/components/cart/cart-list";
import CartLoading from "@/components/cart/cart-loading";
import { Suspense } from "react";

export default async function Cart() {
  return (
    <div className="">
      <Suspense fallback={<CartLoading />}>
        <CartList />
      </Suspense>
    </div>
  );
}
