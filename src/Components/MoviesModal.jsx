import { motion } from "framer-motion";

const MoviesModal = ({modal}) => {

    const variants = {
        close: {
            opacity: 0,
            height: 0,
            width: 0
        },
        open: {
            oapcity: 1,
            width: 185,
            height: 105
        }
    }

  return (
    <motion.div className="absolute w-[185px] h-[105px] bg-slate-600 right-36 top-24 z-20 flex flex-col p-4 justify-evenly text-white">
      <div className="">POPULARES</div>
      <div>MI LISTA</div>
    </motion.div>
  );
};

export default MoviesModal;
