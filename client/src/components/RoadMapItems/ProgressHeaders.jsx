import React from "react";

export default function ProgressHeaders({ progress }) {
    let pages = [
        {},
        {
          number: 1,
          video: true,
          videoSource: "https://www.youtube.com/embed/CEb99v79yRM",
        },
        { number: 2, video: false },
        { number: 3, video: false },
        {
          number: 4,
          video: true,
          videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
        },
        { number: 5, video: false },
        { number: 6, video: false },
        {
          number: 7,
          video: true,
          videoSource: "https://www.youtube.com/embed/4OvhrzXu4Yo",
        },
        { number: 8, video: false },
        { number: 9, video: false },
        {
          number: 10,
          video: true,
          videoSource: "https://www.youtube.com/embed/yywL2rc-QZM",
        },
        { number: 11, video: false },
        { number: 12, video: false },
        { number: 13, video: false },
      ];
  return (
    <div className="flex justify-center items-center w-11/12 h-5/5 mt-12 text-white">
      {pages[progress].video === true && (
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
    </div>
  );
}
