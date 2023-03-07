import { BsPlay } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { AnimatePresence, m, motion } from "framer-motion";
import MoviesModal from "./MoviesModal";
import { useState } from "react";
import MyMovies from "./MyMovies";

const Popular = ({ popular, myMovies }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center space-y-1 mx-auto justify-center relative">
        <div className="flex flex-col space-y-2 md:space-y-0 md:grid md:grid-cols-2 md:gap-10 lg:flex lg:flex-col lg:gap-2 relative">
          <AnimatePresence>
            {!myMovies &&
              popular.slice(0, 4).map((movie, i) => {
                return (
                  <div
                    className="relative w-48 md:w-64 lg:w-44 flex flex-col items-center justify-center overflow-hidden 2xl:w-56"
                
                  >
                    {/* Contenedor de Imange de fondo */}
                    <motion.div
                      initial={{ y: 200 }}
                      animate={{ y: 0 }}
                      transition={{ duration: .3 }}
                      className="w-full"
                    >
                      <img
                  
                        src={`https://image.tmdb.org/t/p/w500/${popular[i].backdrop_path}`}
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
                            initial={{ x: -200 }}
                            animate={{ x: 0, transition: { duration: 0.3 } }}
                            exit={{ x: -200, transition: { duration: 0.3 } }}
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
                          initial={{ opacity: 0, x: 0 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 200 }}
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
                          <div className="flex justify-around -ml-4 md:-ml-5">
                            <div className="flex items-center">
                              <AiFillStar className="text-emerald-400" />
                              {movie.vote_average}
                            </div>
                            <div>{movie.release_date.slice(0, 4)}</div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Popular;
