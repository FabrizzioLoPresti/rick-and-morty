import Image from "next/image"
import { motion } from "framer-motion"

type Props = {}

const ErrorComponent = (props: Props) => {
  return (
    <div className=" w-full my-12 flex items-center justify-center">
      <Image src="/Error404.png" alt="Error" width="500" height="500" />
    </div>
  )
}

export default ErrorComponent