import ProductGallery from "@/components/product/product-gallery";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-between pt-8 pb-44">
      <div className=" text-2xl pb-14">All Products</div>
      <ProductGallery />
    </main>
  );
}
