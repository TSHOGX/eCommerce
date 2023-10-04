import prisma from "./db";
import { Cart, CartItem, Product, Products } from "./types";

// const ENDPOINT = "http://localhost:3000";
const ENDPOINT = "https://e-commerce-tawny-eight.vercel.app";
// const ENDPOINT = process.env.ENDPOINT;
// console.log(process.env.ENDPOINT);
const DynamoDBENDPOINT =
  "https://3w50jb0ire.execute-api.us-east-2.amazonaws.com";

export async function getProductInfo(productID: string): Promise<Product> {
  try {
    const response = await fetch(`${DynamoDBENDPOINT}/items/${productID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.errors) {
      throw data.errors[0];
    }

    return data;
  } catch (error) {
    console.log("error", error);
    throw {
      error: error,
    };
  }
}

export async function getAllProducts(): Promise<Products> {
  try {
    const response = await fetch(`${DynamoDBENDPOINT}/items`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.errors) {
      throw data.errors[0];
    }

    return data;
  } catch (error) {
    console.log("error", error);
    throw {
      error: error,
    };
  }
}

export async function addToCart(
  productID: string,
  productTitle: string
): Promise<any> {
  try {
    const response = await fetch(`${ENDPOINT}/api/cart/${productID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
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
        cache: "no-store",
      });
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

export async function deleteFromCart(productID: string): Promise<any> {
  try {
    const response = await fetch(`${ENDPOINT}/api/cart/${productID}`, {
      method: "DELETE",
      cache: "no-store",
    });

    const res = await response.json();
    if (res.errors) {
      throw res.errors[0];
    }
  } catch (error) {
    console.log("error", error);
    throw {
      error: error,
    };
  }
}

export async function updateItemQuantity(
  item: CartItem,
  quantity: number
): Promise<any> {
  try {
    item.quantity = quantity;

    const response = await fetch(`${ENDPOINT}/api/cart`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
      cache: "no-store",
    });

    const res = await response.json();

    if (res.errors) {
      throw res.errors[0];
    }
  } catch (error) {
    console.log("error", error);
    throw {
      error: error,
    };
  }
}

export async function getCart(): Promise<Cart | undefined> {
  try {
    const response = await fetch(`${ENDPOINT}/api/cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const res = await response.json();

    if (res.errors) {
      return undefined;
    }

    const cartSorted: Cart = [...res].sort((a, b) => a.id - b.id);
    const cart: Cart = cartSorted.filter(
      (cartItem) => Number(cartItem.quantity) > 0
    );

    return cart;
  } catch (error) {
    return undefined;
  }
}
