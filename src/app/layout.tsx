import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import UserStore from "../store/user-store";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kravzov Coin",
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default RootLayout