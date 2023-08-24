import React from "react";
import pages from "../../utils/progressPages";

export default function ProgressHeaders({ progressNumber }) {
  console.log(pages[progressNumber] && pages[progressNumber].video);
  return (
    <div className="flex justify-center items-center w-full h-5/5 mt-12 text-white">
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
      {pages[progressNumber] && pages[progressNumber].resume === true && pages[progressNumber] && pages[progressNumber].number !== 27 && (
        <p className="mt-10 w-5/6 text-justify items-center">{pages[progressNumber] && pages[progressNumber].resumeText}</p>
      )}
      {pages[progressNumber] && pages[progressNumber].meet === true && (
        <div className="flex justify-center items-center h-full w-full ">
          <img
            src={pages[progressNumber] && pages[progressNumber].meetImage}
            alt="imagen meet"
            className="w-60"
          />
        </div>
      )}
      {pages[progressNumber] && pages[progressNumber].number === 27 && (
   
        <img
            src={pages[progressNumber] && pages[progressNumber].meetImage}
            alt="imagen meet"
            className="w-[380px] mt-16"
          />
      )}
    </div>
  );
}
