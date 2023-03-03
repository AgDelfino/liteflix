import { AiOutlinePaperClip } from "react-icons/ai";
import { HiOutlineX } from "react-icons/hi";
import { motion } from "framer-motion";


const AddMovie = ({setAddMovies}) => {

    const exitHandler = () => {
        setAddMovies(false)
    }
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    className="text-white w-screen h-screen absolute z-20 bg-black/25 backdrop-blur-sm flex items-center justify-center">
      <div className="w-full h-full md:h-[60%] md:w-[70%] lg:w-[70%] xl:w-[50%] bg-[#242424] flex flex-col items-center justify-center space-y-6 md:space-y-0 md:justify-evenly relative">
        <h2 className="absolute top-6 text-2xl text-emerald-400 font-semibold md:hidden">LITE <span className="font-thin">FLIX</span></h2>
        <img src="https://www.agdelfino.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.18711f97.jpg&w=1080&q=75" alt="user" className="w-12 h-12 object-cover rounded-full absolute -top-1 right-8 md:hidden" />
        <button 
        onClick={exitHandler}
        className="hidden absolute md:flex top-6 text-2xl right-8">
          <HiOutlineX />
        </button>

        <h4 className="text-emerald-400 text-sm font-bold p-3 tracking-[3px]">
          AGREGAR PELICULA
        </h4>
        <button className="text-sm flex items-center border border-dashed p-10 lg:tracking-[6px] space-x-1 ">
          <AiOutlinePaperClip className="text-lg md:text-md" />     
          <h2 className="md:hidden tracking-[1px]">AGREGÁ UN ARCHIVO</h2>
          <h2 className="font-thin hidden md:flex">
            <span className="font-semibold">AGREGA UN ARCHIVO</span> Ó
            ARRASTRALO AQUÍ
          </h2>
        </button>
        <input
          type="text"
          placeholder="título"
          className="focus:border-none text-sm uppercase bg-transparent border-b-2 border-zinc-500 text-center tracking-[3px] w-[60%] md:w-[35%]"
        />
        <button className="px-8 py-2 bg-[#E5E5E5] text-[#242424] text-sm lg:tracking-[3px] w-[60%] md:w-[35%]">
          SUBIR PELÍCULA
        </button>
        <button 
        onClick={exitHandler}
        className="px-8 py-2 text-white border border-white text-sm lg:tracking-[3px] w-[60%] md:w-[35%]">
          SALIR
        </button>
      </div>
    </motion.div>
  );
};

export default AddMovie;
