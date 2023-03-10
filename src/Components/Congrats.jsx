import { motion } from "framer-motion";

const Congrats = ({ title, setAddMovies, setBlockScroll }) => {
  const goHomeHandler = () => {
    setAddMovies(false);
    setBlockScroll(false)
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white w-screen h-screen absolute z-30 bg-black/25 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="w-full h-full md:h-[60%] md:w-[70%] lg:w-[70%] xl:w-[50%] bg-[#242424] flex flex-col items-center justify-center space-y-6 md:space-y-0 md:justify-evenly relative">
        <h2 className="text-emerald-400 font-thin text-4xl">
          <span className="font-semibold text-emerald-400">LITE</span>FLIX
        </h2>
        <h3 className="font-semibold text-2xl text-center">¬°FELICITACIONES!</h3>
        <p className="uppercase tracking-[2px] text-center">
          {title} fue subida correctamente.
        </p>
        <button
          onClick={goHomeHandler}
          className="py-2 w-[90%] md:w-[25%] bg-white text-[#242424]"
        >
          IR A HOME
        </button>
      </div>
    </motion.div>
  );
};

export default Congrats;
