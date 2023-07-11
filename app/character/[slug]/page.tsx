"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from 'framer-motion'
import { useAppSelector, useAppDispatch } from "@/hooks/useReduxStore";
import { fetchCharacter } from "@/store/features/characters/characterSlice";

type Props = {
  params: {
    slug: string;
  };
};

const characterPageVariants = {
  initial: {
    opacity: 0,
    x: -50
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.5
    }
  }
}

const transition = {
  duration: 0.5,
  ease: "easeInOut"
}

const CharacterPage = ({ params }: Props) => {
  const { character, loading, error } = useAppSelector(
    (state) => state.characters
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCharacter(Number(params.slug)));
  }, [dispatch, params]);

  return (
    <motion.div 
      className="max-w-7xl mx-auto overflow-x-hidden"
      variants={characterPageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
    >
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && character && (
        <div className="h-screen md:grid md:grid-cols-5 md:gap-5 justify-center items-center">
          <div className="col-span-2 flex flex-col justify-center items-center gap-5">
            <Image
              src={character.image}
              alt={character.name}
              width="400"
              height="400"
              className="rounded-full"
            />
            <h3 className="text-2xl font-bold text-gray-800">
              {character.name}
            </h3>
          </div>

          <div className="col-span-3 flex flex-col">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Origin</h3>
              <p className="p-5">{character.origin.name}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Location</h3>
              <p className="p-5">{character.location.name}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Status</h3>
              <p className="p-5">{character.status}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Species</h3>
              <p className="p-5">{character.species}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Gender</h3>
              <p className="p-5">{character.gender}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Type</h3>
              <p className="p-5">{character.type ? character.type : "-"}</p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CharacterPage;
