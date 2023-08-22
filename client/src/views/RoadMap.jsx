import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import logo from "../assets/smllogo.webp";
import ProgressBar from "../components/RoadMapItems/ProgressBar";
export default function RoadMap() {
  const [progress, setProgress] = useState([0, 0]);

  const directionProgress = (direction) => {
if(direction === "next") setProgress(++progress)
if(direction === "prev") setProgress(--progress)
  }
console.log(progress)

  return (
    <div className="flex flex-col justify-between items-center h-screen w-screen bg-black">
      <div className="flex flex-col justify-between items-center h-4/5 w-screen bg-black m-16">
        <div className="flex justify-between items-center w-4/5">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <h1 className="text-base text-white">Social Media Lab</h1>
          <HiOutlineUserCircle className="w-12 h-12 text-white" />
        </div>
        <ProgressBar />
        <iframe
          title="YouTube Video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GUf81ofAZV0" // Cambia esta URL por la URL correcta del video embebido
          frameborder="0"
          allowfullscreen
          className="mt-10 w-5/6"
        />
        <div className="flex justify-between items-center w-4/5 mt-8">
          <button onClick={() => directionProgress("next")} class="bg-transparent  text-blue-700 font-semibold  py-2 px-4 border border-blue-500  rounded">
            Prev
          </button>
          <button onClick={() => directionProgress("prev")} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
