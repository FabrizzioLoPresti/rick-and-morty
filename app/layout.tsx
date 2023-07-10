import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { store } from "@/store/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React and Morty App",
  description: "React and Morty App using Next.js, Tailwind CSS, Axios, Redux-Toolkit and Framer-Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Provider>
  );
}
