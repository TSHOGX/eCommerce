import {
  DynamoDBClient,
  ScanCommand,
  PutItemCommand,
} from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { NextResponse } from "next/server";

const client = new DynamoDBClient({
  region: process.env.REGION,
});

const PRODUCT_TABLE_NAME = "Product";

export async function GET() {
  try {
    const response = await client.send(
      new ScanCommand({
        TableName: PRODUCT_TABLE_NAME,
      })
    );
    const items = response.Items?.map((item) => {
      return unmarshall(item);
    });
    return NextResponse.json(items, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 200 });
  }
}

export async function PUT(request: Request) {
  try {
    const Item = marshall(await request.json());
    const response = await client.send(
      new PutItemCommand({
        TableName: PRODUCT_TABLE_NAME,
        Item,
      })
    );
    return NextResponse.json({ message: "OK", Item }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
