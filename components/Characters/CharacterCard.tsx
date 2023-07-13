import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Character } from "@/interfaces/Character";

type Props = {
  character: Character;
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const transition = {
  duration: 0.5,
  ease: "easeInOut",
};

const CharacterCard = ({ character }: Props) => {
  const {
    name,
    image,
    origin: { name: nameOrigin },
  } = character;

  return (
    <div className="w-full h-[300px] bg-gray-200 rounded-lg shadow-md hover:bg-gray-400/80 transition-colors duration-300 ease-out">
      <Link href={`/character/${character.id}`} passHref className="p-5 h-full w-full flex flex-col justify-center items-center">
        <Image
          src={image}
          alt={name}
          width="200"
          height="200"
          className="rounded-full"
        />
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-xl font-bold text-gray-800">{nameOrigin}</p>
      </Link>
    </div>
  );
};

export default CharacterCard;
