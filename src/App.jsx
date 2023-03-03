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
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3 }}
            src={`https://image.tmdb.org/t/p/w1280/${featured.backdrop_path}`}
            alt=""
            className="fixed h-full w-full object-cover"
          />
          <main className="absolute h-screen w-screen md:px-16 bg-gradient-to-t from-black to-black/10">
            <div className="h-screen w-screen md:w-[85%] md:mx-auto">
              <Navbar />
              <div className="flex flex-col lg:flex-row">
                <section
                  id="featured"
                  className="w-full h-screen flex flex-col md:flex-row justify-center items-center"
                >
                  <Featured featured={featured} />
                </section>
                <section id="popular">
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
