import Link from "next/link";

export default function Checkout() {
  return (
    <div className="flex flex-col items-center justify-between p-24 gap-12">
      <div className="text-xl font-bold">Success!</div>
      <div className=" flex flex-row gap-4">
        <Link className=" hover:text-gray-600 underline" href={`/`}>
          Continue Shopping
        </Link>
        <Link className=" hover:text-gray-600 underline" href={`/account`}>
          Your Account
        </Link>
      </div>
    </div>
  );
}
