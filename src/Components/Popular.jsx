import { FiChevronDown } from "react-icons/fi";
import { BsPlay } from "react-icons/bs";

const Popular = ({popular}) => {
  return (
    <>
      <div className="flex flex-col items-center space-y-1 mx-auto justify-center">
        <div className="flex space-x-2">
          <span className="text-slate-400">VER: </span>
          <span className="text-white flex items-center justify-center space-x-1">
            POPULAR <FiChevronDown />{" "}
          </span>
        </div>
        <div className="flex flex-col space-y-2 md:space-y-0 md:grid md:grid-cols-2 md:gap-10 lg:flex lg:flex-col lg:gap-2">
          {popular.slice(0, 4).map((movie, i) => {
            return (
              <div
                className="relative w-44 md:w-64 lg:w-44 flex flex-col items-center justify-center overflow-hidden 2xl:w-72"
                key={i}
              >
                <div className="w-full">
                  <img
                    key={i}
                    src={`https://image.tmdb.org/t/p/w500/${popular[i].backdrop_path}`}
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="w-full h-full absolute flex flex-col items-center justify-center p-4 text-white text-center bg-black/20">
                  <div className="p-2 rounded-full bg-black/30 border border-white">
                    <BsPlay className="text-xl" />
                  </div>
                  <span className="text-xs uppercase tracking-[2px]">
                    {movie.title.length > 15
                      ? movie.title.slice(0, 15).concat("...")
                      : movie.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Popular;
