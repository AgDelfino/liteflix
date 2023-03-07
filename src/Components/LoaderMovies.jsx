import { delay, motion } from "framer-motion";

function LoaderMovies({ file }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      exit={{ opacity: 0 }}
      className="flex flex-col w-full items-center absolute bg-[E5E5E5]"
    >
      <motion.div className="flex items-center h-24 w-[70%] justify-start overflow-hidden relative">
        <div className="w-full h-2 bg-white" />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="w-full h-4 bg-emerald-400 absolute origin-left"
        />
        {!file.type.startsWith("image/") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.4 }}
            exit={{}}
            className="w-full h-4 bg-red-500 absolute origin-left"
          />
        )}
      </motion.div>
      {file.type.startsWith("image/") && (
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="text-emerald-400 -mt-6"
        >
          LISTO!
        </motion.h2>
      )}

      {!file.type.startsWith("image/") && (
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="text-red-500 -mt-6"
        >
          FORMATO NO PERMITIDO
        </motion.h2>
      )}
    </motion.div>
  );
}

export default LoaderMovies;
