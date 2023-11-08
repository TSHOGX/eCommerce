"use server";

import type { Stripe } from "stripe";

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { CartList } from "@/lib/types";

const CURRENCY = "usd";

function formatAmountForStripe(amount: number, currency: string): number {
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency: boolean = true;
  for (let part of parts) {
    if (part.type === "decimal") {
      zeroDecimalCurrency = false;
    }
  }
  return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}

export async function createCheckoutSession(cartList: CartList): Promise<void> {
  let items = [];

  for (const cartItem of cartList) {
    items.push({
      quantity: cartItem.quantity,
      price_data: {
        currency: CURRENCY,
        product_data: {
          name: cartItem.productTitle,
        },
        unit_amount: formatAmountForStripe(Number(cartItem.prize), CURRENCY),
      },
    });
  }

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create({
      mode: "payment",
      // submit_type: "donate",
      line_items: items,
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      phone_number_collection: {
        enabled: true,
      },
      custom_text: {
        submit: {
          message: "No charge in test mode!",
        },
      },
      success_url: `${headers().get(
        "origin"
      )}/checkout/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${headers().get("origin")}/checkout`,
    });

  redirect(checkoutSession.url as string);
}

export async function createPaymentIntent(
  data: FormData
): Promise<{ client_secret: string }> {
  const paymentIntent: Stripe.PaymentIntent =
    await stripe.paymentIntents.create({
      amount: formatAmountForStripe(
        Number(data.get("customDonation") as string),
        CURRENCY
      ),
      automatic_payment_methods: { enabled: true },
      currency: CURRENCY,
    });

  return { client_secret: paymentIntent.client_secret as string };
}
