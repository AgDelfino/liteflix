import { motion } from "framer-motion";


const Loader = ({ popular }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0}}
      className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="relative flex justify-center items-center space-x-4 overflow-hidden">
        <div className="ml-0 flex flex-col md:flex-row  items-center justify-center md:first:space-x-6 text-center">
          <h2 className="text-2xl md:text-4xl text-white">WELCOME TO</h2>
          <h1 className="text-6xl md:text-8xl font-thin text-emerald-400 flex items-center justify-center">
            LITE<span className=" text-center font-semibold"> FLIX</span>
          </h1>
        </div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 700 }}
          transition={{ duration: 2 }}
          className="absolute w-full h-full bg-black"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
