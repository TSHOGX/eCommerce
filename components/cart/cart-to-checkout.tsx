import Link from "next/link";

export default function CartToCheckout() {
  return (
    <div className=" mx-auto pt-2">
      <Link
        href="/checkout"
        className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-4 py-2"
      >
        Check Out
      </Link>
    </div>
  );
}
