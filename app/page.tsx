import ProductGallery from "@/components/product/product-gallery";
import ProductLoading from "@/components/product/product-loading";
import { getAllProducts } from "@/lib";
import { Products } from "@/lib/types";
import Image from "next/image";
import { Suspense } from "react";

export default async function Home() {
  const products: Products = await getAllProducts();
  return (
    <div className=" flex flex-col items-center justify-between pb-44">
      <img
        className=" w-full"
        src="./head-background.png"
        alt="head background"
      />

      <div className=" container mx-auto">
        <Suspense fallback={<ProductLoading />}>
          <ProductGallery products={products} />
        </Suspense>
      </div>
    </div>
  );
}
