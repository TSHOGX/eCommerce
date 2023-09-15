import "./globals.css";
import type { Metadata } from "next";
import { ReactNode, Suspense } from "react";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "eCommerce",
  description: "e-commerce project",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="">
        <Suspense>
          <main>{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
