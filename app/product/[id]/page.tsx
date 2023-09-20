import AddToCartButton from "@/components/product/add-to-cart-button";
import { getProductInfo } from "@/lib";
import { Product } from "@/lib/types";
import Link from "next/link";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product: Product = await getProductInfo(params.id);
  return (
    <div className="flex flex-col items-center justify-between p-24 gap-3">
      <div className=" text-2xl">{product.title}</div>
      <div>Description: {product.description}</div>
      <div>Price: {product.price}</div>
      <div>In Stock: {product.inventoryQuantity}</div>
      <AddToCartButton productID={product.id} productTitle={product.title} />
      <Link
        className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-4 py-2"
        href={`/`}
      >
        Back To Main Page
      </Link>
    </div>
  );
}
