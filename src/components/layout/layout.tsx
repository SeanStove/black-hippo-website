import React from "react";
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "400", "700"] });

import { Header, Footer } from "@/components";
import { Ubuntu } from "next/font/google";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={ubuntu.className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
