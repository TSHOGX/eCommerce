// product/productID/userEmail

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getProductInfo, testPrisma } from "@/lib";

// createCartItem (productID, userEmail)
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string[] } }
) {
  try {
    console.log("createCartItem API");

    const productID = params.id[0];
    const userEmail = params.id[1];
    const selectedSize = params.id[2];

    // get cart now
    const cartDB = await prisma.cart.findUnique({
      where: {
        userId: userEmail,
      },
    });

    if (!cartDB) {
      throw { error: "cart not found" };
    }

    // get product
    const product = await getProductInfo(productID);

    // check size
    let sizeNow;
    if (selectedSize == "NONE") {
      sizeNow = product.size[0];
    } else {
      sizeNow = selectedSize;
    }

    sizeNow = sizeNow.replace("-", "/");

    // create cartItem
    console.log("  create or update cart itemDB");

    const checkNew = await prisma.cartItem.findFirst({
      where: {
        productId: product.id,
        cartId: cartDB.id,
        size: sizeNow,
      },
    });

    if (checkNew) {
      // update existing cartItem
      await prisma.cartItem.update({
        where: { id: checkNew.id },
        data: { quantity: checkNew.quantity + 1 },
      });

      console.log("  update cart itemDB finish");

      return NextResponse.json({ message: "OK" }, { status: 200 });
    } else {
      // create new cart item
      const itemDB = await prisma.cartItem.create({
        data: {
          productId: product.id,
          productTitle: product.name,
          quantity: 1,
          cartId: cartDB.id,
          size: sizeNow,
        },
      });

      console.log("  create cart itemDB finish");

      // connect this item to the cart
      const updateCart = await prisma.cart.update({
        where: { id: cartDB.id },
        data: { items: { connect: { id: itemDB.id } } },
      });

      return NextResponse.json({ message: "OK" }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

// deleteCartItem productID DN1772-305
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string[] } }
) {
  try {
    console.log("deleteCartItem API");

    const cartItemID = params.id[0];
    const userEmail = params.id[1];

    // get cart now
    const cartDB = await prisma.cart.findUnique({
      where: {
        userId: userEmail,
      },
    });

    if (!cartDB) {
      throw { error: "error not found" };
    }

    // create cartItem
    console.log("  delete cart itemDB", cartItemID);

    const res = await prisma.cartItem.deleteMany({
      where: {
        id: cartItemID,
      },
    });

    console.log("  delete cart itemDB finish");

    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
