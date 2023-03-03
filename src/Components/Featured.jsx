import { AiOutlinePlus } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";

const Featured = ({featured}) => {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center">
        <h3 className="text-sm text-center md:text-left md:text-md tracking-[6px] text-slate-400">
          SERIE ORIGINAL DE{" "}
          <span className="text-white font-semibold">LITEFLIX</span>
        </h3>
        <h1 className="text-4xl text-center md:text-left md:text-6xl -ml-[6px] text-emerald-400 font-semibold uppercase tracking-[2px]">
          {featured.title}
        </h1>
        <div className="mt-6 space-x-3 flex flex-col md:flex-row">
          <button className="bg-zinc-600 border border-zinc-600 text-white text-sm px-8 py-2 flex items-center tracking-[2px]">
            {" "}
            <BsPlay className="text-sm md:text-xl" />
            REPRODUCIR
          </button>
          <button className="bg-zinc-600/20 border border-white text-white text-sm px-8 py-2 flex items-center tracking-[2px] backdrop-blur-lg">
            <AiOutlinePlus className="text-xl" />
            MI LISTA
          </button>
        </div>
      </div>
    </>
  );
};

export default Featured;