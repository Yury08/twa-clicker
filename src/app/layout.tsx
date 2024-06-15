import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kravzov Coin",
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="container__inner">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

export default RootLayout