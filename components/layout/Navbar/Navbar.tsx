import SigninButton from "@/components/auth/signin-button";
import EcommerceLogo from "@/components/icons/ecommerce";
import Link from "next/link";
import './Navbar.css';

export default async function Header() {
  return (
    <div className="z-50 navbar bg-fixed shadow-xl sticky top-0 py-6 px-6 flex items-end justify-between">
      <Link className= 'ml-4' href={`/`}>
        <EcommerceLogo />
      </Link>
      <div className=" inline-flex gap-4 ">
        <Link className=" hover:text-teal-400" href={`/`}>
          Home
        </Link>

        <Link className=" hover:text-teal-400" href={`/about`}>
          About
        </Link>

        <Link className=" hover:text-teal-400" href={`/purchase`}>
          Purchase
        </Link>

        <Link className=" hover:text-teal-400" href={`/shoppingCart`}>
          Shopping Cart
        </Link>

        <SigninButton />
   
      </div>
    </div>
  
  );
}
