import { motion } from "framer-motion";

const MoviesModal = () => {
  return (
    <motion.div
      initial={{  opacity: 0}}
      animate={{ opacity: 1}}
      exit={{  opacity: 0 }}
      transition={{duration: .2}}
      className="absolute w-[205px] h-[75px] 2xl:w-[300px] bg-[#242424] lg:right-0 lg:top-0 md:right-44 z-20 flex flex-col p-4 justify-evenly text-white"
    >
      <motion.div
        
      >
        <div className="">POPULARES</div>
        <div>MI LISTA</div>
      </motion.div>
    </motion.div>
  );
};

export default MoviesModal;
