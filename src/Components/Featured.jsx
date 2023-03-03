import { AiOutlinePlus } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";

const Featured = ({ featured }) => {
  return (
    <>
      <div className="flex flex-col justify-center h-full items-center md:items-start">
        <h3 className="text-sm text-center md:text-left md:text-md tracking-[6px] text-slate-400">
          SERIE ORIGINAL DE{" "}
          <span className="text-white font-semibold">LITEFLIX</span>
        </h3>
        <h1 className="text-3xl text-center md:text-left md:text-6xl text-emerald-400 font-semibold uppercase tracking-[2px]">
          {featured.title}
        </h1>
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
