import { Cart, CartItem, Product } from "./types";

const ENDPOINT = "http://localhost:3000/api";

export async function getCart(): Promise<Cart | never> {
  try {
    const res = await fetch(ENDPOINT + "/cart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    return await res.json();
  } catch (error) {
    console.log("error", error);
    throw {
      error: error,
    };
  }
}

export function addToCart(productID: string, quantity: number) {
  // add new items to cart
}

export async function updateItemQuantity(item: CartItem, quantity: number) {
  try {
    item.quantity = quantity;
    const res = await fetch(ENDPOINT + "/cart", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    return await res.json();
  } catch (error) {
    console.log("error", error);
    throw {
      error: error,
    };
  }
}
