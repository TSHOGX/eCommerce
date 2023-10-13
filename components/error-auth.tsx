"use client";

import { signIn } from "next-auth/react";

export default function ErrorAuth() {
  return (
    <div className="flex flex-col items-center justify-between p-24 gap-12">
      <div className="text-2xl font-bold">Please Login First!</div>
      <button
        onClick={async (e) => {
          e.preventDefault();
          await signIn();
        }}
        className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-4 py-2"
      >
        Sign In
      </button>
    </div>
  );
}
