import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import logo from "../assets/smllogo.webp";

export default function RoadMap() {
  return (
    <div className="flex justify-center items-start h-screen w-screen">
      <div className="flex justify-between items-center w-4/5 mt-8">
        <img src={logo} alt="Logo" className="w-12 h-12" />
        <h1 className="text-base">Social Media Lab</h1>
        <HiOutlineUserCircle className="w-12 h-12" />
      </div>
      
    </div>
  );
}
