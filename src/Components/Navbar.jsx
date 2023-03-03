import React from "react";
import { FaRegBell } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <nav className="w-full flex justify-around md:justify-between items-center py-3 overflow-hidden">
        <motion.div 
        initial={{rotateZ: -180, scale: 0, opacity:0}}
        animate={{rotateZ: 180, scale: 1, opacity:1}}
        transition={{duration: 1, delay: .5}}
        className="md:hidden w-8 h-8 flex items-center justify-center border border-white rounded-full text-white">
          <AiOutlinePlus />
        </motion.div>
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="flex space-x-6 items-center"
        >
          <h2 className="text-2xl text-emerald-400 font-thin 2xl:text-4xl">
          LITE<motion.span 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration: 1, delay: 2}}
          className="font-semibold">FLIX</motion.span>
          </h2>
          <motion.h2 
          initial={{x:200, opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{duration:1, delay: 2.5}}
          className="text-white text-sm mt-1 hidden md:block 2xl:text-lg">
            + AGREGAR PELÍCULA
          </motion.h2>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="flex md:space-x-10 text-white justify-center items-center"
        >
          <div
            id="home_made_hamb"
            className="md:flex flex-col space-y-1 hidden"
          >
            <div className="w-[24px] h-[2px] bg-white 2xl:w-[32px] 2xl:h-[3px]" />
            <div className="w-[24px] h-[2px] bg-white 2xl:w-[32px] 2xl:h-[3px]" />
            <div className="w-[24px] h-[2px] bg-white 2xl:w-[32px] 2xl:h-[3px]" />
          </div>
          <motion.div className="hidden md:flex">
            <FaRegBell className="text-2xl 2xl:text-3xl" />
          </motion.div>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            src="https://www.agdelfino.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.18711f97.jpg&w=1080&q=75"
            alt=""
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          />
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
