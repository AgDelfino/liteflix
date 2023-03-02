import { useState, useEffect } from "react";
import getData from "./Services/data";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getData().then((res) => setMovies(res));
  }, []);

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <img
        src="https://images.alphacoders.com/107/1072652.jpg"
        alt=""
        className="object-cover fixed"
      />
      <main className="absolute h-screen w-[100%] px-16 bg-black/40">
        <nav className="w-full flex justify-between items-center py-4 pr-12">
          <div className="flex space-x-6 items-center">
            <h2 className="text-2xl font-medium text-emerald-400">LITE FLIX</h2>
            <h2 className="text-white text-sm">+ AGREGAR PELÍCULA</h2>
          </div>
          <div className="flex space-x-3 text-white justify-center items-center">
            <div>hambr</div>
            <div>Notif</div>
            <div>User</div>
          </div>
        </nav>
        <section className="w-full h-full  flex">
          <div className="w-[80%] h-full  flex flex-col justify-center">
            <h3 className="text-md tracking-[6px] text-slate-400">
              SERIE ORIGINAL DE <span className="text-white font-semibold">LITEFLIX</span>
            </h3>
            <h1 className="text-7xl -ml-[6px] text-emerald-400">LA CASA DE PAPEL</h1>
            <div className="mt-6 space-x-3">
              <button className="bg-slate-400 px-8 py-2">REPRODUCIR</button>
              <button className="bg-slate-400 px-8 py-2">+ MI LISTA</button>
            </div>
          </div>
          <div className="w-[20%] h-[90%]  flex flex-col items-center space-y-2 justify-center ">
            <div className="flex space-x-2 mb-4">
              <span className="text-white">VER: </span>
              <select name="" id="">
                <option value="">POPULAR</option>
                <option value="">MI LISTA</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <img src="https://images.alphacoders.com/107/1072652.jpg" className="w-40" alt="" />
              <img src="https://images.alphacoders.com/107/1072652.jpg" className="w-40" alt="" />
              <img src="https://images.alphacoders.com/107/1072652.jpg" className="w-40" alt="" />
              <img src="https://images.alphacoders.com/107/1072652.jpg" className="w-40" alt="" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
