import { motion } from "framer-motion";

const MoviesModal = () => {
  return (
    <motion.div
      initial={{  opacity: 0}}
      animate={{ opacity: 1}}
      exit={{  opacity: 0 }}
      transition={{duration: .2}}
      className="absolute bg-[#242424] top-6 z-30 flex flex-col p-4 justify-evenly text-white"
    >
      <motion.div
        
      >
        <div>POPULARES</div>
        <div>MI LISTA</div>
      </motion.div>
    </motion.div>
  );
};

export default MoviesModal;
