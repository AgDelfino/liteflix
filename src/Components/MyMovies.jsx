import React from "react";
import { BsPlay } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";


const MyMovies = ({ postedMovies, isShown, setIsShown }) => {

console.log(postedMovies)
  return (
    <div className="flex flex-col space-y-2 md:space-y-0 md:grid md:grid-cols-2 md:gap-10 lg:flex lg:flex-col lg:gap-2 relative">
      {postedMovies.length >= 0 ? postedMovies.map((movie, i) => {
        return (
          <div
            className="relative w-48 md:w-64 lg:w-44 flex flex-col items-center justify-center overflow-hidden 2xl:w-56"
            key={i}
          >
            {/* Contenedor de Imange de fondo */}
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="w-full"
            >
              <img
                key={i}
                src={movie.backdrop_path}
                className="w-full aspect-video object-cover"
                alt=""
              />
            </motion.div>
            {/* Contenedor de información principal */}
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="w-full h-full absolute flex flex-col items-center justify-center p-4 text-white text-center bg-black/20 z-20"
              onMouseEnter={() => setIsShown(movie.id)}
              onMouseLeave={() => setIsShown(false)}
            >
              {/* Hover Holder */}
              <AnimatePresence>
                {isShown !== movie.id && (
                  <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="items-center gap-2 flex justify-start w-full whitespace-nowrap"
                  >
                    <div className="p-2 rounded-full bg-black/30 border border-white">
                      <BsPlay className="text-xl" />
                    </div>
                    <span className="text-xs uppercase tracking-[2px]">
                      {movie.title.length > 15
                        ? movie.title.slice(0, 10).concat("...")
                        : movie.title}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contenedor de información secundaria */}
            <AnimatePresence>
              {isShown === movie.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full absolute bg-black/35 flex flex-col justify-end text-white p-3 gap-3 bg-black/30"
                >
                  <div className="flex items-center justify-left gap-2 ml-[2px] uppercase">
                    <div className="w-8 h-8 border border-white rounded-full hover:bg-white hover:text-emerald-500 transition-all z-30 flex items-center justify-center">
                      <BsPlay className="text-lg ml-[2px]" />
                    </div>
                    <div className="text-xs">
                      {movie.title
                        .slice(0, 15)
                        .concat(movie.title.length > 15 ? "..." : "")}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <AiFillStar className="text-emerald-400" />
                      {movie.vote_average}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      }): (
        <div>NO TENGO NADA</div>
      )}
    </div>
  );
};

export default MyMovies;
