import SigninButton from "@/components/auth/signin-button";
import EcommerceLogo from "@/components/icons/ecommerce";
import Link from "next/link";

export default async function Header() {
  return (
    <div className=" container px-10 py-10 mx-auto flex items-end justify-between">
      <Link href={`/`}>
        <EcommerceLogo />
      </Link>
      <div className=" inline-flex gap-4">
        <Link className=" hover:text-gray-600" href={`/`}>
          Home
        </Link>
        <Link className=" hover:text-gray-600" href={`/about`}>
          About
        </Link>
        <SigninButton />
      </div>
    </div>
  );
}
