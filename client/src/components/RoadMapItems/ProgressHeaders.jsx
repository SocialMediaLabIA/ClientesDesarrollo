import React, { useEffect, useState } from "react";
import pages from "../../utils/progressPages";
// import { GrDocumentText } from "react-icons/gr";
import { AiOutlineFileText } from "react-icons/ai";

import { motion } from "framer-motion";

export default function ProgressHeaders({ progress }) {
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
      ? pages[progress] && pages[progress].meetImageLarge
      : pages[progress] && pages[progress].meetImage;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center w-full  text-white z-0 "
    >
      {/* VIDEOS */}
      {pages[progress] && pages[progress].video === true && (
        <motion.iframe
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          title="YouTube Video"
          width="580"
          height="330"
          src={pages[progress] && pages[progress].videoSource} // Cambia esta URL por la URL correcta del video embebido
          frameBorder="0" // Cambiado a frameBorder
          allowFullScreen // Cambiado a allowFullScreen
          className=" w-[270px] md:w-[600px] md:h-[300px] xl:w-[800px] xl:h-[400px]"
        />
      )}
      {/* MEETS */}
      {pages[progress] &&
        pages[progress].meet === true &&
        pages[progress].section === false && (
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center h-full w-fit"
          >
            <img
              src={selectedImage}
              // src={pages[progress] && pages[progress].meetImage}
              alt="imagen meet"
              className=" w-[250px] md:w-[300px]  xl:w-[400px]  rounded-lg"
            />
          </motion.div>
        )}
      {/* DOCUMENTS */}
      {pages[progress] &&
        pages[progress].document === true &&
        pages[progress].resume === true &&
        pages[progress].number !== 38 &&
        pages[progress].section === false && (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className=" border-2  flex flex-col justify-start items-center h-fit w-full max-w-[300px] md:max-w-[600px] "
          >
            <p className=" w-5/6 text-justify items-center text-sm md:text-base mb-5">
              {pages[progress] && pages[progress].resumeText}
            </p>
            <div className=" w-fit  max-w-[250px] flex flex-col justify-start items-start">
              {pages[progress].documentArray.map((item, index) => {
                return (
                  <a
                    href={item.link}
                    key={index}
                    // target="_blank" // Abre el enlace en una nueva pestaña/tab
                    rel="noopener noreferrer" // Recomendado al abrir enlaces externos
                    className="flex px-3 justify-start items-center h-12 w-full mt-5 border-2 rounded-sm cursor-pointer"
                  >
                    <AiOutlineFileText className="h-6 w-6 mr-2 md:mr-5" />
                    <p className="text-[10px] md:text-[14px]">{item.name}</p>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      {/* ULTIMA SECCION */}
      {pages[progress] && pages[progress].number === 43 && (
        <img
          src={pages[progress] && pages[progress].meetImage}
          alt="imagen meet"
          className="w-[380px] "
        />
      )}
    </motion.div>
  );
}
