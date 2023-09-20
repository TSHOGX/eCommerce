import ProductGallary from "@/components/product/product-gallery";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className=" text-2xl py-8">All Products</div>
      <ProductGallary />
    </main>
  );
}
