"use client";

import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";

interface Props {
  children: ReactNode;
}

export default function Provider({ children }: Props) {
  return (
    <NextUIProvider>
      <SessionProvider>{children}</SessionProvider>
    </NextUIProvider>
  );
}
