import ProductGallary from "@/components/product/product-gallery";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className=" text-2xl pt-8 pb-14">All Products</div>
      <ProductGallary />
    </main>
  );
}
