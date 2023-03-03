import { useState, useEffect } from "react";
import getPopular from "./Services/getPopular";
import Loader from "./Components/Loader";
import getFeatured from "./Services/getFeatured";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Components/Navbar";
import Featured from "./Components/Featured";
import Popular from "./Components/Popular";

function App() {
  const [popular, setPopular] = useState([]);
  const [featured, setFeatured] = useState({});

  useEffect(() => {
    setTimeout(() => {
      getFeatured().then((res) => setFeatured(res));
      getPopular().then((res) => setPopular(res));
    }, 2500);
  }, []);

  return (
    <>
      {!popular.length ? (
        <Loader />
      ) : (
        <div
          id="background"
          className="h-screen w-screen relative lg:overflow-y-hidden"
        >
          <div className="absolute lg:fixed overflow-hidden h-screen w-screen">
            <motion.img
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2 }}
              src={`https://image.tmdb.org/t/p/w1280/${featured.backdrop_path}`}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <main className="absolute h-full w-full md:px-16 bg-gradient-to-t from-black to-black/40">
            <div className="h-screen w-screen md:w-[85%] md:mx-auto">
              <Navbar />
              <div className="flex flex-col lg:flex-row">
                <section
                  id="featured"
                  className="w-full h-screen"
                >
                  <Featured featured={featured} />
                </section>
                <section id="popular" className="h-screen lg:h-[80vh] flex md:items-center lg:items-center xl:items-start 2xl:mt-2">
                  <Popular popular={popular} />
                </section>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
