import { Products } from "@/lib/types";
import { getAllProducts } from "@/lib";
import ProductCard from "./product-card/product-card";

export default async function ProductGallery() {
  const products: Products = await getAllProducts();
  return (
    <div className=" product-gallery-container gap-y-6 flex flex-wrap ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      
    </div>
  );
}
