"use client";

import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function MenuButton() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const [open, setOpen] = useState(false);

  return session && session.user ? (
    // authenticated user
    open ? (
      <div className=" relative flex-1">
        <IconButton onClick={() => setOpen(!open)}>
          <CloseIcon />
        </IconButton>

        <div
          className={` absolute right-0 my-2 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ${
            open ? "block" : "hidden"
          }`}
        >
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <Link
                className=" block px-4 py-2 hover:bg-gray-100"
                href={`/`}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                className=" block px-4 py-2 hover:bg-gray-100"
                href={`/cart`}
                onClick={() => setOpen(false)}
              >
                Your Cart
              </Link>
              <Link
                className=" block px-4 py-2 hover:bg-gray-100"
                href={`/about`}
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className=" block px-4 py-2 hover:bg-gray-100"
                href={`/account`}
                onClick={() => setOpen(false)}
              >
                Account
              </Link>
            </li>
          </ul>
          <div className="py-1 text-gray-700 hover:bg-gray-100">
            <button
              onClick={async (e) => {
                e.preventDefault();
                await signOut({ callbackUrl: "/" });
              }}
              className="block px-4 py-2 text-sm"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    ) : (
      <div>
        <IconButton onClick={() => setOpen(!open)}>
          <MenuIcon />
        </IconButton>
      </div>
    )
  ) : // unauthenticated
  open ? (
    <div className=" relative flex-1">
      <IconButton onClick={() => setOpen(!open)}>
        <CloseIcon />
      </IconButton>

      <div
        className={` absolute right-0 my-2 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="py-2 text-sm text-gray-700">
          <li>
            <Link
              className=" block px-4 py-2 hover:bg-gray-100"
              href={`/`}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              className=" block px-4 py-2 hover:bg-gray-100"
              href={`/about`}
              onClick={() => setOpen(false)}
            >
              About
            </Link>
          </li>
        </ul>
        <div className="py-1 text-gray-700 hover:bg-gray-100">
          <button
            onClick={async (e) => {
              e.preventDefault();
              await signIn();
            }}
            className="block px-4 py-2 text-sm"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <IconButton onClick={() => setOpen(!open)}>
        <MenuIcon />
      </IconButton>
    </div>
  );
}
