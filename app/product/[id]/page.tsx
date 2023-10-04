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
    <div className=" container mx-auto flex flex-col items-center justify-between pt-24 pb-44 gap-3">
      <div className=" text-2xl">{product.name}</div>
      <div>{product.subtitle}</div>
      <div>Description: {product.description}</div>
      <div>Price: {product.price}</div>
      <div>Size:{product.size}</div>
      <div>In Stock: {product.inventoryQuantity}</div>
      <Link
        className=" underline underline-offset-1 hover:text-gray-800"
        href={product.url}
      >
        View Original Page
      </Link>
      <AddToCartButton productID={product.id} productTitle={product.name} />
      <Link
        className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-4 py-2"
        href={`/`}
      >
        Back To Main Page
      </Link>
      {product.images.map((imageURL, imageURLInedx) => (
        <img
          key={imageURLInedx}
          className=" h-auto max-w-md rounded-lg"
          src={imageURL}
          alt={imageURLInedx.toString()}
        />
      ))}
    </div>
  );
}
