import CartList from "@/components/cart/cart-list";

export default async function Purchase() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <CartList />
    </div>
  );
}
