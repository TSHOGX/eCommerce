import ProductGallery from "@/components/product/product-gallery";
import ProductLoading from "@/components/product/product-loading";
import { searchProducts } from "@/lib";
import { Products } from "@/lib/types";
import { Suspense } from "react";

export default async function Search({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const {
    value: searchValue,
    filter: searchFilter,
    sort: searchSort,
  } = searchParams as {
    [key: string]: string;
  };

  const products: Products = await searchProducts(
    searchValue,
    searchFilter,
    searchSort
  );

  if (products.length === 0) {
    return (
      <div className=" mt-16">
        <div className=" w-fit mx-auto justify-center uppercase text-4xl">
          result not found
        </div>
        <div className=" w-fit mx-auto justify-self-centerer text-xl">
          input is case sensitive
        </div>
      </div>
    );
  }

  return (
    <div className=" flex flex-col items-center justify-between pb-44">
      <div className=" container mx-auto">
        <Suspense fallback={<ProductLoading />}>
          <ProductGallery products={products} />
        </Suspense>
      </div>
    </div>
  );
}
