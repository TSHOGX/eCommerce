import { getProductInfo } from "@/lib";
import { Product } from "@/lib/types";
import { Suspense } from "react";
import ProductSingle from "@/components/product/product-single";
import ProductLoading from "@/components/product/product-loading";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product: Product = await getProductInfo(params.id);
  return (
    <div className="">
      <Suspense fallback={<ProductLoading />}>
        <ProductSingle product={product} />
      </Suspense>
    </div>
  );
}
