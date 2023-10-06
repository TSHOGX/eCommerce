"use server";

import { Cart, CartItem, Prisma } from "@prisma/client";
import prisma from "./db";
import { Product, Products } from "./types";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

const DynamoDBENDPOINT =
  "https://3w50jb0ire.execute-api.us-east-2.amazonaws.com";

// Product - DynamoDB
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

// Product - DynamoDB
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

export async function testPrisma() {
  console.log("testPrisma ");
  console.log("testPrisma cart", await prisma.cart.findMany());
  console.log("testPrisma user", await prisma.user.findMany());
}

// Cart - Prisma server side
export async function checkAndGetCart(email: string): Promise<Cart> {
  try {
    console.log("checkAndGetCart");

    const cartDB = await prisma.cart.findUnique({
      where: {
        userId: email,
      },
    });

    if (!cartDB) {
      throw {
        error: "get cart failed",
      };
    }

    if (!cartDB.userId) {
      throw {
        error: "why no user id??",
      };
    }

    return cartDB;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        console.log("There is a unique constraint violation");
      }
    }
    throw error;
  }
}

// Cart - Prisma server side
export async function createCart(email: string): Promise<Cart> {
  try {
    console.log("createCart");

    const cartDB = await prisma.cart.create({
      data: { userId: email },
    });

    if (!cartDB.userId) {
      throw {
        error: "why no user id??",
      };
    }

    return cartDB;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        console.log("There is a unique constraint violation");
      }
    }
    throw error;
  }
}

// CartItem - Prisma server side
export async function getItemsInCart(): Promise<CartItem[]> {
  try {
    console.log("getItemsInCart");

    const session = await getServerSession(authOptions);

    if (!session) {
      throw { error: "User not login. API is be protected." };
    }

    if (!session.user?.email) {
      throw { error: "User has no email address??" };
    }

    const all = await prisma.cart.findMany({
      where: {
        userId: session.user.email,
      },
      include: {
        items: true,
      },
    });

    const items: CartItem[] = all[0].items;

    console.log(items);

    return items;
  } catch (error) {
    throw error;
  }
}

// CartItem - Prisma server side
export async function updateCartItem(
  productId: string,
  quantity: number
): Promise<CartItem> {
  try {
    console.log("updateCartItem");

    const cartItemDB = await prisma.cartItem.update({
      where: { id: productId },
      data: { quantity: quantity },
    });

    return cartItemDB;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        console.log("There is a unique constraint violation");
      }
    }
    throw error;
  }
}
