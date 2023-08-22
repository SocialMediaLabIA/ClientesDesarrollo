import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import logo from "../assets/smllogo.webp";
import ProgressBar from "../components/RoadMapItems/ProgressBar";
export default function RoadMap() {
  return (
    <div className="flex flex-col justify-start items-center h-screen w-screen bg-black">
      <div className="flex justify-between items-center w-4/5 mt-8">
        <img src={logo} alt="Logo" className="w-12 h-12" />
        <h1 className="text-base text-white">Social Media Lab</h1>
        <HiOutlineUserCircle className="w-12 h-12 text-white" />
      </div>
      <ProgressBar/>
      <iframe
        title="YouTube Video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/GUf81ofAZV0"  // Cambia esta URL por la URL correcta del video embebido
        frameborder="0"
        allowfullscreen
        className="mt-10 w-5/6"
      />
    </div>
  );
}
