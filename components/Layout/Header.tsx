import Image from "next/image";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 z-10 bg-gray-200/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center py-5">
        <Image src="/Logo.png" alt="logo" width="200" height="200" />
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
