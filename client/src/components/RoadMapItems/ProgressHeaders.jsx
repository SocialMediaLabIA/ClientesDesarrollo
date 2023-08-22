import React from "react";
import imageMeet from "../../assets/fotomeet.png" 

export default function ProgressHeaders({ progress }) {
    let pages = [
        {number: 0, video: true, videoSource: "https://www.youtube.com/embed/VensWNwjow",},
        {
          number: 1,
          video: true,
          videoSource: "https://www.youtube.com/embed/CEb99v79yRM",
          meet: false,
        },
        { number: 2, video: false, resume: true, resumeText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!", meet: false, },
        { number: 3, video: false, meet: true, meetImage: imageMeet },
        {
          number: 4,
          video: true,
          videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
          meet: false,
        },
        { number: 5, video: false, resume: true, resumeText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!", meet: false, },
        { number: 6, video: false, meet: true, meetImage: imageMeet},
        {
          number: 7,
          video: true,
          videoSource: "https://www.youtube.com/embed/4OvhrzXu4Yo",
          meet: false,
        },
        { number: 8, video: false, resume: true, resumeText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!", meet: false,},
        { number: 9, video: false, meet: true, meetImage: imageMeet},
        {
          number: 10,
          video: true,
          videoSource: "https://www.youtube.com/embed/yywL2rc-QZM",
          meet: false,
        },
        { number: 11, video: false, resume: true, resumeText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!", meet: false, meet: false, },
        { number: 12, video: false, meet: true, meetImage: imageMeet},
        { number: 13, video: false, resumeText: "Tutorial Finalizado!", meet: false, },
      ];
  return (
    <div className="border-2 flex justify-center items-center w-11/12 h-5/5 mt-12 text-white">
    {/* <div > */}
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
            <div>

            <img src={imageMeet} alt="imagen meet" className="w-full border-2 h-40 " />
            </div>
          )}
      {pages[progress].number === 13 && (
          <p
          className="mt-10 w-5/6 text-center"
          >{pages[progress].resumeText}</p>
          )}
    </div>
  );
}
