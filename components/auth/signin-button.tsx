"use client";
import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SigninButton() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return session && session.user ? (
    <div className=" relative flex-1 gap-4">
      <button onClick={() => setOpen(!open)}>
        <img
          className=" rounded-full w-6 h-6"
          src={session.user.image ?? "./user_icon.png"}
          alt="user_icon"
        />
      </button>

      <div
        className={` absolute right-0 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="py-2 text-sm text-gray-700">
          <li>
            <Link
              className=" block px-4 py-2 hover:bg-gray-100"
              href={`/purchase`}
              onClick={() => setOpen(false)}
            >
              Cart
            </Link>
          </li>
        </ul>
        <div className="py-1 text-gray-700 hover:bg-gray-100">
          <button
            onClick={() => {
              signOut();
              router.push("/");
            }}
            className="block px-4 py-2 text-sm"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className=" relative flex-1 gap-4">
      <button onClick={() => setOpen(!open)}>
        <img
          className=" rounded-full w-6 h-6"
          src="./user_icon.png"
          alt="user_icon"
        />
      </button>

      <div
        className={` absolute right-0 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="py-1 text-gray-700 hover:bg-gray-100">
          <button onClick={() => signIn()} className="block px-4 py-2 text-sm">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
