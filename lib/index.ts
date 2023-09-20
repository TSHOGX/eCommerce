import { Cart, CartItem, Product } from "./types";

// const ENDPOINT = "http://localhost:3000";
const ENDPOINT = "https://e-commerce-tawny-eight.vercel.app";

export async function addToCart(productID: string, productTitle: string) {
  try {
    const response = await fetch(`${ENDPOINT}/api/cart/${productID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.message) {
      // create a new cartItem
      const item = {
        quantity: 1,
        id: productID,
        productTitle: productTitle,
      };
      console.log(JSON.stringify(item));
      await fetch(`${ENDPOINT}/api/cart`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      // error message
    } else {
      // add one to the cart
      const item: CartItem = data;
      await updateItemQuantity(item, item.quantity + 1);
    }
  } catch (error) {
    console.log("error", error);
    throw {
      error: error,
    };
  }
}

export async function updateItemQuantity(item: CartItem, quantity: number) {
  try {
    item.quantity = quantity;

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
