import SigninButton from "@/components/auth/signin-button";
import EcommerceLogo from "@/components/icons/ecommerce";
import Link from "next/link";
import CartIcon from "@/components/icons/cart";
import { IconButton } from "@mui/material";
import ProductSearch from "@/components/layout/header/search-bar";
import MenuButton from "./menu-button";

export default async function Header() {
  return (
    <div className=" z-50 bg-white bg-fixed sticky top-0 py-4 px-8 flex items-end justify-between">
      <div className=" items-center inline-flex gap-12">
        <Link href={`/`}>
          <EcommerceLogo />
        </Link>

        <div className=" gap-12 hidden lg:inline-flex">
          <Link className=" uppercase hover:text-gray-600" href={`/`}>
            Home
          </Link>

          <Link className=" uppercase hover:text-gray-600" href={`/`}>
            Products
          </Link>

          <Link className=" uppercase hover:text-gray-600" href={`/about`}>
            About
          </Link>

          <Link className=" uppercase hover:text-gray-600" href={`/contact`}>
            Contact Us
          </Link>
        </div>
      </div>

      <div className=" items-center gap-8 hidden lg:inline-flex">
        <ProductSearch />

        <Link href={`/purchase`}>
          <IconButton>
            <CartIcon />
          </IconButton>
        </Link>

        <SigninButton />
      </div>

      <div className=" block lg:hidden">
        <MenuButton />
      </div>
    </div>
  );
}
