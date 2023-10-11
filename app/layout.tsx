import "./globals.css";
import type { Metadata } from "next";
import { ReactNode, Suspense } from "react";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/header";
import Provider from "@/components/auth/provider";

export const metadata: Metadata = {
  title: "eCommerce",
  description: "e-commerce project",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="">
        <Provider>
          <Header />
          <Suspense>{children}</Suspense>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
