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
          className="h-screen w-full relative overflow-y-hidden"
        >
          <motion.img
          initial={{scale: 1.2}}
          animate={{scale: 1}}
          transition={{duration: 3}}
            src={`https://image.tmdb.org/t/p/w1280/${featured.backdrop_path}`}
            alt=""
            className="fixed h-screen w-full object-cover"
          />
          <main className="absolute h-screen w-full md:px-16 bg-gradient-to-t from-black/90 to-black/20">
            <div className="h-screen w-full md:w-[85%] md:mx-auto">
              <Navbar />
              <section className="w-full h-full flex flex-col md:flex-row">
                <Featured featured={featured} />
                <Popular popular={popular} />
              </section>
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
