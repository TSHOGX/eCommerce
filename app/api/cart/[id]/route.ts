// import * as uuid from "uuid";
import {
  DynamoDBClient,
  GetItemCommand,
  DeleteItemCommand,
} from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { NextResponse } from "next/server";

const client = new DynamoDBClient({
  region: process.env.REGION,
});

const CART_TABLE_NAME = "CartItem";

export async function GET(request: Request, context: { params: any }) {
  try {
    const response = await client.send(
      new GetItemCommand({
        TableName: CART_TABLE_NAME,
        Key: {
          id: { S: context.params.id },
        },
      })
    );
    if (!response.Item) {
      return NextResponse.json({ message: "Error", response }, { status: 404 });
    } else {
      return NextResponse.json(unmarshall(response.Item), { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 200 });
  }
}

export async function DELETE(request: Request, context: { params: any }) {
  try {
    const response = await client.send(
      new DeleteItemCommand({
        TableName: CART_TABLE_NAME,
        Key: {
          id: { S: context.params.id },
        },
      })
    );
    return NextResponse.json({ message: "OK", response }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
