import { motion } from "framer-motion";

type Props = {};

const LoadingComponent = (props: Props) => {
  return (
    <div
      role="status"
      className="w-full p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700 space-y-5"
    >
      <div className="flex items-center justify-center h-52 w-52 mx-auto bg-gray-300 rounded-full dark:bg-gray-700" />
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    </div>
  );
};

export default LoadingComponent;
