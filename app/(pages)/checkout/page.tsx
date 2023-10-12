import CheckoutList from "@/components/checkout/checkout-list";
import CheckoutLoading from "@/components/checkout/checkout-loading";
import { Suspense } from "react";

export default function Checkout() {
  return (
    <div className="">
      <Suspense fallback={<CheckoutLoading />}>
        <CheckoutList />
      </Suspense>
    </div>
  );
}
