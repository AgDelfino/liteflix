import { FaRegBell } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = ({ setAddMovies, setBlockScroll }) => {
  const [hamb, setHamb] = useState(false);
  const hambHandler = () => {
    setHamb(!hamb);
  };

  const modalHandler = () => {
    setAddMovies(true);
  };

  const variants = {
    openT: {
      rotateZ: 45,
      translateY: 5.8,
    },
    closeT: {
      rotateZ: 0,
      TranslateY: 0,
    },
    openM: {
      opacity: 0,
    },
    closeM: {
      opacity: 1,
    },
    openB: {
      rotateZ: -45,
      translateY: -5.8,
    },
  };

  const addMoviesHandler = ({}) => {
    setAddMovies(true);
    setBlockScroll(true)
  };

  return (
    <>
      <nav className="w-full flex justify-around md:justify-between items-center py-3 overflow-hidden">
        <motion.button
          onClick={addMoviesHandler}
          initial={{ rotateZ: -180, scale: 0, opacity: 0 }}
          animate={{ rotateZ: 180, scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:hidden w-8 h-8 flex items-center justify-center border border-white rounded-full text-white"
        >
          <AiOutlinePlus />
        </motion.button>
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="flex space-x-6 items-center"
        >
          <h2 className="text-2xl text-emerald-400 font-thin 2xl:text-4xl">
            LITE
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="font-semibold"
            >
              FLIX
            </motion.span>
          </h2>
          <motion.button
            onClick={addMoviesHandler}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="text-white text-sm mt-1 hidden md:flex 2xl:text-lg items-center"
          >
            <GoPlus />
            <span>AGREGAR PELÍCULA</span>
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="flex md:space-x-10 text-white justify-center items-center"
        >
          <button
            id="home_made_hamb"
            className="md:flex flex-col space-y-1 hidden"
            onClick={hambHandler}
          >
            <motion.div
              variants={variants}
              initial="closeT"
              animate={!hamb ? "closeT" : "openT"}
              className="w-[24px] h-[2px] bg-white"
            />
            <motion.div
              variants={variants}
              initial="closeM"
              animate={!hamb ? "closeM" : "openM"}
              className="w-[24px] h-[2px] bg-white"
            />
            <motion.div
              variants={variants}
              initial="closeB"
              animate={!hamb ? "closeB" : "openB"}
              className="w-[24px] h-[2px] bg-white"
            />
          </button>
          <motion.div
            className="hidden md:flex"
            initial={{ rotateZ: 0 }}
            whileHover={{
              rotateZ: [
                0, 2, 4, 6, 4, 2, 0, -2, -4, -6, -4, -2, 0, 2, 4, 6, 4, 2, 0,
                -2, -4, -6, -4, -2, 0,
              ],
            }}
            transition={{ duration: 0.6 }}
          >
            <FaRegBell className="text-2xl 2xl:text-3xl" />
          </motion.div>

          <motion.a
            initial={{ rotateZ: -180, opacity: 0, scale: 0 }}
            animate={{ rotateZ: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2 }}
            href="https://www.agdelfino.com/"
            target={"_blank"}
          >
            <img
              src="https://agdelfino.vercel.app/profile.jpg"
              alt=""
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover object-center cursor-pointer grayscale hover:grayscale-0 transition-all"
            />
          </motion.a>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
