import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "India",
  description: "Let's fix India, one step at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <>
            <Navbar />
            {children}
          </>
        </Providers>
      </body>
    </html>
  );
}
