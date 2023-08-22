import React from "react";
import logo from "../assets/smllogo.webp";

export default function Login() {
  return (
    <div className="flex justify-center items-center bg-black h-screen w-screen">
      <form className="w-6/12"></form>
      <hr className="border-2 border-[#8F00FF] h-5/6 w-0 mx-4 py-52 rounded-2xl" />
      <div className="flex w-6/12 h-full items-center justify-center">
        <img src={logo} alt="logo" className="w-[500px] h-[500px]" />
      </div>
    </div>
  );
}
