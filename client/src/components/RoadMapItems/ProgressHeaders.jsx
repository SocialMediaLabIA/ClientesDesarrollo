import React, { useEffect, useState } from "react";
import pages from "../../utils/progressPages";
// import { GrDocumentText } from "react-icons/gr";
import { AiOutlineFileText } from "react-icons/ai";

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
      className="flex justify-center items-center w-full h-5/5 mt-12 md:mt-1 xl:mt-5 text-white"
    >
      {/* VIDEOS */}
      {pages[progressNumber] && pages[progressNumber].video === true && (
        <iframe
          title="YouTube Video"
          width="580"
          height="330"
          src={pages[progressNumber] && pages[progressNumber].videoSource} // Cambia esta URL por la URL correcta del video embebido
          frameBorder="0" // Cambiado a frameBorder
          allowFullScreen // Cambiado a allowFullScreen
          className="mt-5 w-5/6 md:w-4/12 xl:w-5/12"
        />
      )}
      {/* MEETS */}
      {pages[progressNumber] && pages[progressNumber].meet === true && (
        <div className="flex justify-center items-center h-full w-full ">
          <img
            src={selectedImage}
            // src={pages[progressNumber] && pages[progressNumber].meetImage}
            alt="imagen meet"
            className="w-60 md:w-5/12  xl:w-4/12 "
          />
        </div>
      )}
      {/* DOCUMENTS */}
      {pages[progressNumber] &&
        pages[progressNumber].document === true &&
        pages[progressNumber].resume === true &&
        pages[progressNumber].number !== 38 && (
          <div className="flex flex-col justify-center items-center h-full w-full max-w-[800px] mt-10">
            <p className=" w-5/6 text-justify items-center text-sm mb-5">
              {pages[progressNumber] && pages[progressNumber].resumeText}
            </p>
            {console.log(pages[progressNumber].documentArray)}
            <div className=" w-fit  max-w-[250px] flex flex-col justify-start items-start">
              {pages[progressNumber].documentArray.map((item, index) => {
                {
                  console.log(item);
                }
                return (
                  <a
                    href={item.link}
                    key={index}
                    // target="_blank" // Abre el enlace en una nueva pestaña/tab
                    rel="noopener noreferrer" // Recomendado al abrir enlaces externos
                    className="flex px-3 justify-start items-center h-12 w-full mt-5 border-2 rounded-sm cursor-pointer"
                  >
                    <AiOutlineFileText className="h-6 w-6 mr-2" />
                    <p className="text-[10px]">{item.name}</p>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      {/* ULTIMA SECCION */}
      {pages[progressNumber] && pages[progressNumber].number === 38 && (
        <img
          src={pages[progressNumber] && pages[progressNumber].meetImage}
          alt="imagen meet"
          className="w-[380px] mt-16"
        />
      )}
    </motion.div>
  );
}
