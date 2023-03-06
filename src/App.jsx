import { useState, useEffect } from "react";
import getPopular from "./Services/getPopular";
import Loader from "./Components/Loader";
import getFeatured from "./Services/getFeatured";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Components/Navbar";
import Featured from "./Components/Featured";
import Popular from "./Components/Popular";
import AddMovie from "./Components/AddMovie";

function App() {
  const [popular, setPopular] = useState([]);
  const [featured, setFeatured] = useState({});
  const [modal, setModal] = useState(false);
  const [addMovies, setAddMovies] = useState(false);
  const [postedMovies, setPostedMovies] = useState(JSON.parse(localStorage.getItem("postedMovies")) || [])

  useEffect(() => {
    localStorage.setItem("postedMovies", JSON.stringify(postedMovies))
  }, [postedMovies])

  

  useEffect(() => {
    setTimeout(() => {
      getFeatured().then((res) => setFeatured(res));
      getPopular().then((res) => setPopular(res));
    }, 2500);
  }, []);

  return (
    <div className="overflow-hidden h-screen w-screen">
      <AnimatePresence>{!popular.length && <Loader />}</AnimatePresence>
      {popular.length && (
        <div
          id="background"
          className="h-screen w-screen relative overflow-x-hidden lg:overflow-y-hidden"
        >
          <AnimatePresence>
            {addMovies && (
              <AddMovie addMovies={addMovies} setAddMovies={setAddMovies} postedMovies={postedMovies} setPostedMovies={setPostedMovies} />
            )}
          </AnimatePresence>
          <div className="absolute lg:fixed overflow-hidden h-screen w-screen">
            <motion.img
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2 }}
              src={`https://image.tmdb.org/t/p/w1280/${featured.backdrop_path}`}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <main className="absolute h-full w-full md:px-16 bg-gradient-to-t from-black to-black/40">
            <div className="h-screen w-screen md:w-[85%] md:mx-auto max-w-[1280px]">
              <Navbar setAddMovies={setAddMovies} />
              <div className="flex flex-col lg:flex-row">
                <section id="featured" className="w-full h-screen">
                  <Featured featured={featured} />
                </section>
                <section
                  id="popular"
                  className="h-screen lg:h-[80vh] flex md:items-center lg:items-center xl:items-center 2xl:mt-2"
                >
                  <Popular
                    popular={popular}
                    setModal={setModal}
                    modal={modal}
                  />
                </section>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
