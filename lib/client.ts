// const ENDPOINT = "http://localhost:3000";
const ENDPOINT = "https://e-commerce-tawny-eight.vercel.app";

// CartItem - Prisma client request
export async function createCartItem(productID: string, userEmail: string) {
  try {
    console.log("createCartItem");

    // create or update
    const res = await fetch(
      `${ENDPOINT}/api/product/${productID}/${userEmail}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("  createCartItem down");
  } catch (error) {
    throw error;
  }
}

// CartItem - Prisma client request
export async function deleteCartItem(productID: string, userEmail: string) {
  try {
    console.log("deleteCartItem");

    const res = await fetch(
      `${ENDPOINT}/api/product/${productID}/${userEmail}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("  deleteCartItem down");
  } catch (error) {
    throw error;
  }
}
