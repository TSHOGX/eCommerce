import CartList from "@/components/cart/cart-list";

export default async function Purchase() {
  return (
    <div className="flex flex-col items-center justify-between">
      <div className=" text-2xl pt-8 pb-14">Your Cart</div>
      <CartList />
    </div>
  );
}
