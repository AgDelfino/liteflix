import { motion } from "framer-motion";

const MoviesModal = ({ setMyMovies, setModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute bg-[#242424] top-6 z-30 flex flex-col p-4 justify-evenly text-white"
    >
      <motion.div>
        <div
        className="cursor-pointer hover:bg-zinc-600 transition-all p-1 rounded-sm"
          onClick={() => {
            setModal(false);
            setMyMovies(false);
          }}
        >
          POPULARES
        </div>
        <div
        className="cursor-pointer hover:bg-zinc-600 transition-all p-1 rounded-sm"
          onClick={() => {
            setMyMovies(true);
            setModal(false);
          }}
        >
          MI LISTA
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MoviesModal;
