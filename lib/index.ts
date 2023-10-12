"use server";

import { Cart, CartItem, Prisma } from "@prisma/client";
import prisma from "./db";
import { CartList, Product, Products } from "./types";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

const DynamoDBCRUDENDPOINT =
  "https://3w50jb0ire.execute-api.us-east-2.amazonaws.com";

const DynamoDBRESTENDPOINT =
  "https://079o2llti9.execute-api.us-east-2.amazonaws.com/test";

// Product - DynamoDB
export async function searchProducts(
  searchValue: string,
  searchFilter: string,
  searchSort: string
): Promise<Products> {
  try {
    const value = searchValue ?? "";
    const filter = searchFilter ?? "";
    const sort = searchSort ?? "";

    const response = await fetch(
      `${DynamoDBRESTENDPOINT}/get?value=${value}&filter=${filter}&sort=${sort}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

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
export async function getProductInfo(productID: string): Promise<Product> {
  try {
    const response = await fetch(`${DynamoDBCRUDENDPOINT}/items/${productID}`, {
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
    const response = await fetch(`${DynamoDBCRUDENDPOINT}/items`, {
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
  console.log("testPrisma cartItem", await prisma.cartItem.findMany());
  console.log("testPrisma account", await prisma.account.findMany());
  console.log("testPrisma session", await prisma.session.findMany());
  console.log("testPrisma user", await prisma.user.findMany());
  console.log("testPrisma verifi", await prisma.verificationToken.findMany());
}

export async function testPrismaDeleteAll() {
  console.log("testPrismaDeleteAll ");
  console.log("testPrisma cartItem", await prisma.cartItem.deleteMany());
  console.log("testPrisma cart", await prisma.cart.deleteMany());
  console.log("testPrisma account", await prisma.account.deleteMany());
  console.log("testPrisma session", await prisma.session.deleteMany());
  console.log("testPrisma user", await prisma.user.deleteMany());
  console.log("testPrisma verifi", await prisma.verificationToken.deleteMany());
}

export async function deleteSession() {
  const session = await getServerSession(authOptions);

  testPrisma();

  if (!session) {
    throw new Error("why no session??");
  }

  if (!session.user?.email) {
    throw new Error("User has no email address??");
  }

  // delete user
  // const res = await prisma.user.deleteMany({
  //   // where: {
  //   //   email: session.user.email
  //   // },
  // });

  testPrisma();
}

// Cart - Prisma server side
export async function checkAndGetCart(email: string): Promise<Cart> {
  try {
    console.log("checkAndGetCart");

    // testPrisma();

    const cartDB = await prisma.cart.upsert({
      where: {
        userId: email,
      },
      update: {},
      create: { userId: email },
    });

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
export async function getItemsInCart(): Promise<CartList> {
  try {
    console.log("getItemsInCart");

    const session = await getServerSession(authOptions);

    if (!session) {
      throw { error: "User not login. API is be protected." };
    }

    if (!session.user?.email) {
      throw { error: "User has no email address??" };
    }

    try {
      const all = await prisma.cart.findMany({
        where: {
          userId: session.user.email,
        },
        include: {
          items: true,
        },
      });

      const items: CartItem[] = all[0].items;

      let cartList: CartList = [];
      for (const item of items) {
        const productInfo: Product = await getProductInfo(item.productId);
        cartList.push({
          id: item.id,
          image: productInfo.images[0],
          productCategory: productInfo.subtitle,
          prize: productInfo.price,
          productId: item.productId,
          productTitle: item.productTitle,
          quantity: item.quantity,
          size: item.size,
        });
      }

      // console.log("items", items); // if no items, just return []

      return cartList;
    } catch (error) {
      throw error;
    }
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
