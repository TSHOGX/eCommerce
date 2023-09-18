import { Cart, CartItem, Product } from "./types";

export async function getCart(): Promise<Cart | never> {
  // Get existing cart from endpoint
  try {
    const res = await fetch(
      "https://my-json-server.typicode.com/TSHOGX/MyJSONServer/cart",
      { cache: "no-store" }
    );
    const cart: Cart = await res.json();
    return cart;
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
  // update existing cart item's quantity

  // fetch current cart
  const cart: Cart = await getCart();
  if (!cart) return;

  // find target item
  const cartItem = cart.find((x: CartItem) => x.id === item.id) as CartItem;
  if (!cartItem) {
    console.error("Product not found in the cart");
    return;
  }

  // update quantity with PUT
  cartItem.quantity = quantity;
  const endpoint =
    "https://my-json-server.typicode.com/TSHOGX/MyJSONServer/cart/" +
    cartItem.id;
  try {
    const res = await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(cartItem),
    });
    console.log("Quantity updated", await res.json());
  } catch (error) {
    console.log("error", error);
    throw {
      error: error,
    };
  }
}
