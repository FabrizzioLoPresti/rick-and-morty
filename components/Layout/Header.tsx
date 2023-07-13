'use client'

import Image from "next/image";
import Link from "next/link";
import { useAppDispatch } from "@/hooks/useReduxStore";
import { setFilters } from "@/store/features/characters/characterSlice";

type Props = {};

const Header = (props: Props) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setFilters({status: null, gender: null}))
  }

  return (
    <header className="sticky top-0 z-10 bg-gray-200/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto space-y-4 md:space-y-0 flex flex-col md:flex-row md:justify-between items-center py-5">
        <Link href="/" passHref onClick={handleClick}>
          <Image src="/Logo.png" alt="logo" width="200" height="200" />
        </Link>
        <nav className="flex gap-5">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300 ease-in-out"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
