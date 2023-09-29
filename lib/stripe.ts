import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2023-08-16",
  appInfo: {
    name: "eCommerce",
    url: "https://e-commerce-tawny-eight.vercel.app",
    // url: "http://localhost:3000/",
  },
});
