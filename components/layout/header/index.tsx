import Logo from "@/components/icons/logo";
import Link from "next/link";

export default async function Footer() {
  return (
    <div className="">
      <div className=" container px-10 py-10 mx-auto flex items-end justify-between">
        <Link href={`/`}>
          <Logo />
        </Link>
        <div className=" inline-flex gap-4">
          <Link className=" hover:font-bold" href={`/purchase`}>
            Cart
          </Link>
          <Link className=" hover:font-bold" href={`/about`}>
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
