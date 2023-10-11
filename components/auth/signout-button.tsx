"use client";

import { signOut } from "next-auth/react";

export default function SignoutButton() {
  return (
    <button
      onClick={async (e) => {
        e.preventDefault();
        await signOut({ callbackUrl: "/" });
      }}
    >
      LOGOUT
    </button>
  );
}
