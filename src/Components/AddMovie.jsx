import { AiOutlinePaperClip } from "react-icons/ai";
import { HiOutlineX } from "react-icons/hi";

const AddMovie = () => {
  return (
    <div className="text-white w-screen h-screen absolute z-20 bg-black/25 backdrop-blur-sm flex items-center justify-center">
      <div className="h-[60%] w-[50%] bg-[#242424] flex flex-col items-center justify-evenly relative">
        <button className="absolute top-6 text-2xl right-8">
          <HiOutlineX />
        </button>

        <h4 className="text-emerald-400 text-sm font-bold p-3 tracking-[3px]">
          AGREGAR PELICULA
        </h4>
        <button className="text-sm flex items-center border border-dashed p-10 tracking-[6px] space-x-1 ">
          <AiOutlinePaperClip className="text-lg" />
          <h2 className="font-thin">
            <span className="font-semibold">AGREGA UN ARCHIVO</span> Ó
            ARRASTRALO AQUÍ
          </h2>
        </button>
        <input
          type="text"
          placeholder="título"
          className="focus:border-none text-sm uppercase bg-transparent border-b-2 border-zinc-500 text-center tracking-[3px] w-[35%]"
        />
        <button className="px-8 py-2 bg-[#E5E5E5] text-[#242424] text-sm tracking-[3px] w-[35%]">
          SUBIR PELÍCULA
        </button>
      </div>
    </div>
  );
};

export default AddMovie;
