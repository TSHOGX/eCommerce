import { Cart, CartItem, Product } from "./types";

// const ENDPOINT = "http://localhost:3000";
const ENDPOINT = "https://e-commerce-tawny-eight.vercel.app";

export function addToCart(productID: string, quantity: number) {
  // add new items to cart
}

export async function updateItemQuantity(item: CartItem, quantity: number) {
  try {
    item.quantity = quantity;
    console.log(process.env.ENDPOINT);

    const response = await fetch(`${ENDPOINT}/api/cart`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    const res = await response.json();

    if (res.errors) {
      throw res.errors[0];
    }

    return res;
  } catch (error) {
    console.log("error", error);
    throw {
      error: error,
    };
  }
}
