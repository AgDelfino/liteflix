import { AiOutlinePlus } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";
import { motion } from "framer-motion";

const Featured = ({ featured }) => {
  return (
    <>
      <div className="flex flex-col justify-center h-full items-center md:items-start">
        <motion.h3 
        initial={{x: -100}}
        whileInView={{x:0}}
        viewport={{once: true}}
        className="text-sm text-center md:text-left md:text-md tracking-[6px] text-slate-400">
          SERIE ORIGINAL DE{" "}
          <span className="text-white font-semibold">LITEFLIX</span>
        </motion.h3>
        <motion.h1 
        initial={{x: 100, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: .4, delay: .5}}
        viewport={{once: true}}
        className="text-3xl text-center md:text-left md:text-6xl text-emerald-400 font-semibold uppercase tracking-[2px]">
          {featured.title}
        </motion.h1>
        <div className="mt-4 md:mt-6 md:space-x-3 flex flex-col md:flex-row w-[80%] space-y-4 md:space-y-0">
          <button className="bg-zinc-600 border border-zinc-600 text-white text-sm px-8 py-2 flex items-center justify-center tracking-[2px]">
            {" "}
            <BsPlay className="text-xl" />
            REPRODUCIR
          </button>
          <button className="bg-zinc-600/20 border border-white text-white text-sm px-8 py-2 flex items-center tracking-[2px] backdrop-blur-lg justify-center">
            <AiOutlinePlus className="text-xl" />
            MI LISTA
          </button>
        </div>
      </div>
    </>
  );
};

export default Featured;
