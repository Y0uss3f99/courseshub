import type { Metadata } from "next";
import Providers from "./providers";
import "./globals.css";

import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import LayoutContent from "./_Components/LayoutContent/page";


const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Course Platform",
  description: "Online course platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <Providers>

           <LayoutContent>{children}</LayoutContent>

          
          </Providers>
      </body>
    </html>
  );
}