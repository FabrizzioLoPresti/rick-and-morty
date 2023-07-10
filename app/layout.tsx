import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StoreProvider } from "@/store/provider";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick and Morty App",
  description: "React and Morty App using Next.js, Tailwind CSS, Axios, Redux-Toolkit and Framer-Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <StoreProvider>
            <Header />
            {children}
            <Footer />
          </StoreProvider>
        </body>
      </html>
  );
}
