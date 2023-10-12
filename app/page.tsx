import ProductGallery from "@/components/product/product-gallery";
import { getAllProducts } from "@/lib";
import { Products } from "@/lib/types";

export default async function Home() {
  const products: Products = await getAllProducts();
  return (
    <div className=" flex flex-col items-center justify-between pb-44">
      <img className=" w-full" src="./head-background.png" />

      <div className=" container mx-auto">
        <ProductGallery products={products} />
      </div>
    </div>
  );
}
