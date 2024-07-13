import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thierry Wyss",
  description: "Persöndliche Webseite von Thierry Wyss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className='bg-gradient-to-r from-white via-gray-100 to-white'>{children}</body>
    </html>
  );
}
