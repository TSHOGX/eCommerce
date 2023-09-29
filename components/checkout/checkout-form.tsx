"use client";

import { createCheckoutSession } from "@/app/actions/stripe";
import React, { useState } from "react";

export const MIN_AMOUNT = 10.0;
export const MAX_AMOUNT = 5000.0;
export const AMOUNT_STEP = 5.0;

export default function CheckoutForm(): JSX.Element {
  const [input, setInput] = useState<{ customDonation: number }>({
    customDonation: Math.round(MAX_AMOUNT / AMOUNT_STEP),
  });

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  return (
    <form action={createCheckoutSession} className=" flex flex-col gap-8">
      <div>Show cart info here</div>
      <label>
        Custom amount:
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          name="customDonation"
          onChange={handleInputChange}
        ></input>
      </label>
      <div className=" mx-auto">
        <button
          className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-4 py-2"
          type="submit"
        >
          Purchase
        </button>
      </div>
    </form>
  );
}
