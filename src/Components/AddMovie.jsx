import { AiOutlinePaperClip } from "react-icons/ai";
import { HiOutlineX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { uploadNewMovie } from "../Services/uploadImage";
import LoaderMovies from "./LoaderMovies";
import { FileUploader } from "react-drag-drop-files";

const AddMovie = ({ setAddMovies, postedMovies, setPostedMovies }) => {
  const exitHandler = () => {
    setAddMovies(false);
  };

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  

  const handleChange = (file) => {
//    let file = e.target.files[0];
    if (file.type.startsWith("image/") && file.size > 500) {
      setImage(file);
      setFile(file);
    } else {
      setFile(file);
      setTimeout(() => {
        setFile(null);
      }, 5000);
    }
  };

  useEffect(()=> {
    console.log(file)
  },[file])

  const onTitleChange = (e) => {
    let title = e.target.value;
    setTitle(title);
  };

  const onSubmit = async (e) => {
    const uploaded = await uploadNewMovie(image);
    const id = uploaded.file;
    const url = `https://ucarecdn.com/${id}/`;

    const movie = { title, id, backdrop_path: url };

    setPostedMovies([...postedMovies, movie]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-white w-screen h-screen absolute z-30 bg-black/25 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="w-full h-full md:h-[60%] md:w-[70%] lg:w-[70%] xl:w-[50%] bg-[#242424] flex flex-col items-center justify-center space-y-6 md:space-y-0 md:justify-evenly relative">
        <h2 className="absolute top-6 text-2xl text-emerald-400 font-semibold md:hidden">
          LITE <span className="font-thin">FLIX</span>
        </h2>
        <img
          src="https://www.agdelfino.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.18711f97.jpg&w=1080&q=75"
          alt="user"
          className="w-12 h-12 object-cover rounded-full absolute -top-1 right-8 md:hidden"
        />
        <button
          onClick={exitHandler}
          className="hidden absolute md:flex top-6 text-2xl right-8"
        >
          <HiOutlineX />
        </button>

        <h4 className="text-emerald-400 text-sm font-bold p-3 tracking-[3px]">
          AGREGAR PELICULA
        </h4>
        <div className="relative w-full flex flex-col h-24 items-center">
          <AnimatePresence>
            {file && <LoaderMovies file={file} />}
          </AnimatePresence>
          <AnimatePresence>
            {!file && (
              <motion.label
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0, transition: { delay: 0.1 } }}
                transition={{ delay: 0.1 }}
                htmlFor="image"
                className="flex items-center border border-dashed h-24 w-[70%] justify-center absolute"
              >
                <AiOutlinePaperClip />
                AGREGA UN ARCHIVO Ó ARRÁSTRALO AQUÍ
                <div className="absolute w-full left-3 bg-white opacity-0">
                  <FileUploader
                    handleChange={handleChange}
                    name="file"
                  
                  />
                </div>
              </motion.label>
            )}
          </AnimatePresence>
        </div>

        <input
          onChange={onTitleChange}
          type="text"
          placeholder="título"
          className="outline-none focus:bg-[#E5E5E5]/25 text-sm uppercase bg-transparent border-b-2 focus:border-emerald-400 border-zinc-500 text-center tracking-[3px] w-[60%] md:w-[35%] transition-all"
        />
        <button
          onClick={onSubmit}
          disabled={title === "" || !image}
          className={`px-8 py-2 bg-[#E5E5E5] text-[#242424] text-sm lg:tracking-[3px] w-[60%] md:w-[35%] transition-all duration-300 ease-in-out disabled:bg-black/30`}
        >
          SUBIR PELÍCULA
        </button>
        <button
          onClick={exitHandler}
          className="px-8 py-2 text-white border border-white text-sm lg:tracking-[3px] w-[60%] md:w-[35%] md:hidden"
        >
          SALIR
        </button>
      </div>
    </motion.div>
  );
};

export default AddMovie;
