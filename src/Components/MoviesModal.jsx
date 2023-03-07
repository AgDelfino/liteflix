import { motion } from "framer-motion";
import { BsCheckLg } from "react-icons/bs";

const MoviesModal = ({ setMyMovies, setModal, myMovies }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute bg-[#242424] top-6 z-30 flex flex-col p-4 justify-evenly text-white w-[150px]"
    >
      <motion.div>
        <div
        className="cursor-pointer hover:bg-zinc-600 transition-all p-1 rounded-sm flex text-xs items-center justify-between"
          onClick={() => {
            setModal(false);
            setMyMovies(false);
          }}
        >
          POPULARES <BsCheckLg className={`${!myMovies ? "flex" : "hidden"}`}/>
        </div>
        <div
        className="cursor-pointer hover:bg-zinc-600 transition-all p-1 rounded-sm flex gap-1 text-xs items-center justify-between"
          onClick={() => {
            setMyMovies(true);
            setModal(false);
          }}
        >
          MIS PELÍCULAS <BsCheckLg className={`${myMovies ? "flex" : "hidden"}`}/>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MoviesModal;
