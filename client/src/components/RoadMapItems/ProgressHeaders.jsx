import React from "react";
import imageMeet from "../../assets/fotomeet.png" 
import pages from "../../utils/progressPages";

export default function ProgressHeaders({ progress }) {

console.log(pages[progress].video)
  return (
    <div className="flex justify-center items-center w-full h-5/5 mt-12 text-white">
      {pages[progress].video === true && (
        <iframe
          title="YouTube Video"
          width="580"
          height="330"
          src={pages[progress].videoSource} // Cambia esta URL por la URL correcta del video embebido
          frameBorder="0" // Cambiado a frameBorder
          allowFullScreen // Cambiado a allowFullScreen
          className="mt-5 w-5/6"
        />
      )}
      {pages[progress].meet === true && (
        <iframe
          title="YouTube Video"
          width="560"
          height="315"
          src={pages[progress].videoSource} // Cambia esta URL por la URL correcta del video embebido
          frameBorder="0" // Cambiado a frameBorder
          allowFullScreen // Cambiado a allowFullScreen
          className="mt-10 w-5/6"
        />
      )}
      {pages[progress].resume === true && (
        <p
          className="mt-10 w-5/6 text-justify"
        >{pages[progress].resumeText}</p>
      )}
          {pages[progress].meet === true && (
            <img src={imageMeet} alt="imagen meet" className="w-full border-2 h-40 " />
          )}
      {pages[progress].number === 13 && (
          <p
          className="mt-10 w-5/6 text-center"
          >{pages[progress].resumeText}</p>
          )}
    </div>
  );
}
