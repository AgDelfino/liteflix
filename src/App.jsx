import { useState, useEffect } from "react";
import getPopular from "./Services/getPopular";
import { FaRegBell } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { BsPlay } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Loader from "./Components/Loader";
import getFeatured from "./Services/getFeatured";

function App() {
  const [popular, setPopular] = useState([]);
  const [featured, setFeatured] = useState({});

  useEffect(() => {
    getPopular().then((res) => setPopular(res));
    getFeatured().then((res) => setFeatured(res));
  }, []);

  return (
    <>
      {!popular.length ? (
        <Loader />
      ) : (
        <div className="h-screen w-full relative overflow-y-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w1280/${featured.backdrop_path}`}
            alt=""
            className="fixed h-screen w-full object-cover"
          />
          <main className="absolute h-screen w-full px-16 bg-gradient-to-t from-black/90 to-black/20">
            <div className="h-screen w-[85%] mx-auto">
              <nav className="w-full flex justify-between items-center py-3">
                <div className="flex space-x-6 items-center">
                  <h2 className="text-2xl font-medium text-emerald-400">
                    LITE FLIX
                  </h2>
                  <h2 className="text-white text-sm mt-1">
                    + AGREGAR PELÍCULA
                  </h2>
                </div>
                <div className="flex space-x-10 text-white justify-center items-center pr-3">
                  <div id="home_made_hamb" className="flex flex-col space-y-1">
                    <div className="w-[24px] h-[2px] bg-white"></div>
                    <div className="w-[24px] h-[2px] bg-white"></div>
                    <div className="w-[24px] h-[2px] bg-white"></div>
                  </div>
                  <div>
                    <FaRegBell className="text-2xl" />
                  </div>
                  <img
                    src="https://www.agdelfino.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.18711f97.jpg&w=1080&q=75"
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
              </nav>
              <section className="w-full h-full  flex">
                <div className="w-[80%] h-full  flex flex-col justify-center">
                  <h3 className="text-md tracking-[6px] text-slate-400">
                    SERIE ORIGINAL DE{" "}
                    <span className="text-white font-semibold">LITEFLIX</span>
                  </h3>
                  <h1 className="text-6xl -ml-[6px] text-emerald-400 font-semibold">
                    {featured.title}
                  </h1>
                  <div className="mt-6 space-x-3 flex">
                    <button className="bg-zinc-600 border border-zinc-600 text-white text-sm px-8 py-2 flex items-center tracking-[2px]">
                      {" "}
                      <BsPlay className="text-xl" />
                      REPRODUCIR
                    </button>
                    <button className="bg-zinc-600/20 border border-white text-white text-sm px-8 py-2 flex items-center tracking-[2px] backdrop-blur-lg">
                      <AiOutlinePlus className="text-xl" />
                      MI LISTA
                    </button>
                  </div>
                </div>
                <div className="w-[20%] h-[90%]  flex flex-col items-center space-y-2 justify-center ">
                  <div className="flex space-x-2 mb-4">
                    <span className="text-slate-400">VER: </span>
                    <span className="text-white flex items-center justify-center space-x-1">
                      POPULAR <FiChevronDown />{" "}
                    </span>
                  </div>
                  <div className="flex-main space-y-2 pb-10">
                    {popular.slice(0, 4).map((movie, index) => {
                      return (
                        <div
                          className="relative w-44 flex flex-col items-center justify-center"
                          key={index}
                        >
                          <div className="w-full">
                            <img
                              key={index}
                              src={`https://image.tmdb.org/t/p/w500/${popular[index].backdrop_path}`}
                              className="w-full object-cover"
                              alt=""
                            />
                          </div>
                          <div className=" w-full h-full absolute flex flex-col items-center justify-center p-4 text-white text-center bg-black/20">
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
              </section>
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
