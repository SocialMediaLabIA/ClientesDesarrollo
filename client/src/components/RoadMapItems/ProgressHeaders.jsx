import React from "react";
import pages from "../../utils/progressPages";

export default function ProgressHeaders({ progress }) {
  console.log(pages[progress].video);
  return (
    <div className="flex justify-center items-center w-full h-5/5 mt-12 text-white">
      {pages[progress].video === true && (
        <iframe
          title="YouTube Video"
          src={pages[progress].videoSource} // Cambia esta URL por la URL correcta del video embebido
          frameBorder="0" // Cambiado a frameBorder
          allowFullScreen // Cambiado a allowFullScreen
          className="mt-5 w-5/6  md:w-3/6 h-[400px] md:h-[600px] md:mt-0 "
        />
      )}
      {pages[progress].resume === true && pages[progress].number !== 20 && (
        <p className="mt-10 w-5/6 text-justify items-center">
          {pages[progress].resumeText}
        </p>
      )}
      {pages[progress].meet === true && (
        <div className="flex justify-center items-center h-full w-full ">
          <img
            src={pages[progress].meetImage}
            alt="imagen meet"
            className="w-60"
          />
        </div>
      )}
      {pages[progress].number === 20 && (
        <p className="mt-10 w-5/6 text-center">{pages[progress].resumeText}</p>
      )}
    </div>
  );
}
