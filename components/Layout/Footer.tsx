import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-400 py-10">
      <div className="w-full max-w-7xl mx-auto">
        <p className="text-center text-gray-800 text-xl font-bold">
          Made with ❤️ by{" "}
          <Link
            href="https://github.com/FabrizzioLoPresti"
            className="text-lime-300 hover:text-lime-500 transition duration-300"
            target="_blank"
          >
            @FabrizzioLoPresti
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
