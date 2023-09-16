// list of items. Item contains name, price, and quantity fields
// Validate and Save user selected items for purchase
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Purchase() {
  const router = useRouter();

  const [order, setOrder] = useState({
    buyQuantity: [0, 0, 0, 0, 0],
    credit_card_number: "",
    expir_date: "",
    cvvCode: "",
    car_holder_name: "",
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(order.buyQuantity);
    router.push("/purchase/paymentEntry");
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <form className=" flex flex-col gap-2" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">product 1</label>
          <input
            className=" bg-slate-400 mx-4 text-white"
            type="number"
            required
            onChange={(e) => {
              order.buyQuantity[0] = parseInt(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">product 2</label>
          <input
            className=" bg-slate-400 mx-4 text-white"
            type="number"
            required
            onChange={(e) => {
              order.buyQuantity[1] = parseInt(e.target.value);
            }}
          />
        </div>
        <button className=" hover:bg-slate-400 mr-4">Pay</button>
      </form>
    </main>
  );
}
