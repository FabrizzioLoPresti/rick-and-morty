'use client'

import Link from "next/link";
import { motion } from 'framer-motion'

type Props = {};

const aboutPageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const transition = {
  duration: 0.5,
  ease: "easeInOut",
};

const AboutPage = (props: Props) => {
  return (
    <motion.section 
      className="h-screen max-w-7xl mx-auto"
      variants={aboutPageVariants}
      initial="hidden"
      animate="visible"
      transition={transition}
      exit={{ opacity: 0 }}
    >
      <div className="mt-5">
        <h1 className="text-4xl font-bold text-gray-800">About</h1>
        <p className="text-gray-600 px-5">
          This is a demo project to showcase the usage of Next.js with
          TypeScript, Tailwind CSS, Redux Toolkit, Axios and Framer Motion. The
          project is based on the Rick and Morty API and a pagination system is
          implemented to fetch the data, including filters and search.
        </p>
      </div>
      <div className="mt-5">
        <h3 className="text-2xl font-bold text-gray-800">Technologies</h3>
        <ul className="list-disc list-inside text-gray-600 px-5">
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Redux Toolkit</li>
          <li>Axios</li>
          <li>Framer Motion</li>
        </ul>
      </div>
      <div className="mt-5">
        <h3 className="text-2xl font-bold text-gray-800">API</h3>
        <Link
          href="https://rickandmortyapi.com/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 px-5"
        >
          https://rickandmortyapi.com/
        </Link>
      </div>
      <div className="mt-5">
        <h3 className="text-2xl font-bold text-gray-800">Source Code</h3>
        <Link
          href='https://github.com/FabrizzioLoPresti/rick-and-morty'
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 px-5"
        >
          Repository on GitHub
        </Link>
      </div>
    </motion.section>
  );
};

export default AboutPage;
