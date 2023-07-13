"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.5,
    },
  },
};

const transition = {
  duration: 0.5,
  ease: "easeInOut",
};

const CharacterPage = ({ params }: Props) => {
  const { character, loading, error } = useAppSelector(
    (state) => state.characters
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCharacter(Number(params.slug)));
  }, [dispatch, params]);

  return (
    <div className="max-w-7xl mx-auto overflow-x-hidden px-5 md:px-0">
      {/* {loading && <p>Loading...</p>}
      {!loading && !character && <p>Character not found</p>}
      {error && <p>{error}</p>} */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key={1}
            className="h-screen flex justify-center items-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
          >
            <Image src="/giphy.gif" alt="loading" width="500" height="500" />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {!loading && character && (
          <motion.div
            key={2}
            className="h-screen md:grid md:grid-cols-5 md:gap-5 justify-center items-center"
            variants={characterPageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
          >
            <div className="col-span-2 flex flex-col justify-center items-center gap-5">
              <Image
                src={character.image}
                alt={character.name}
                width="500"
                height="500"
                className="rounded-full w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CharacterPage;
