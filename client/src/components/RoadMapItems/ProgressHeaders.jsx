import React, { useEffect, useState } from "react";
import pages from "../../utils/progressPages";
import { GrDocumentText } from "react-icons/gr";
import { motion } from "framer-motion";

export default function ProgressHeaders({ progressNumber }) {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const selectedImage =
    windowWidth >= 768
      ? pages[progressNumber] && pages[progressNumber].meetImageLarge
      : pages[progressNumber] && pages[progressNumber].meetImage;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center w-full h-5/5 mt-12 text-white"
    >
{pages[progressNumber] && pages[progressNumber].video === true && (
        <iframe
          title="YouTube Video"
          width="580"
          height="330"
          src={pages[progressNumber] && pages[progressNumber].videoSource} // Cambia esta URL por la URL correcta del video embebido
          frameBorder="0" // Cambiado a frameBorder
          allowFullScreen // Cambiado a allowFullScreen
          className="mt-5 w-5/6"
        />
      )}
      {pages[progressNumber] && pages[progressNumber].resume === true && pages[progressNumber] && pages[progressNumber].number !== 34 && (
        <p className="mt-10 w-5/6 text-justify items-center">{pages[progressNumber] && pages[progressNumber].resumeText}</p>
      )}
      {pages[progressNumber] && pages[progressNumber].meet === true && (
        <div className="flex justify-center items-center h-full w-full ">
          <img
            src={selectedImage}
            // src={pages[progressNumber] && pages[progressNumber].meetImage}
            alt="imagen meet"
            className="w-60 md:w-4/6  xl:w-3/6 "
          />
        </div>
      )}
      {pages[progressNumber] && pages[progressNumber].document === true && (
        <div className="flex justify-center items-center h-full w-full ">
          <GrDocumentText/>
          <p>{pages[progressNumber].documentName}</p>
        </div>
      )}
      {pages[progressNumber] && pages[progressNumber].number === 34 && (
   
        <img
            src={pages[progressNumber] && pages[progressNumber].meetImage}
            alt="imagen meet"
            className="w-[380px] mt-16"
          />
      )}
    </motion.div>
  );
}
