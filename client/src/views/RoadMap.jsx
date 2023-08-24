import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import logo from "../assets/smllogo.webp";
import ProgressBar from "../components/RoadMapItems/ProgressBar";
import ProgressHeaders from "../components/RoadMapItems/ProgressHeaders";
import pages from "../utils/progressPages";
import { motion } from "framer-motion";
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
} from "react-icons/hi2";
export default function RoadMap() {
  let [progress, setProgress] = useState(0);

  const directionProgress = (direction) => {
    if (direction === "next" && progress < 20) setProgress(++progress);
    if (direction === "prev" && progress > 0) setProgress(--progress);
  };
  console.log(progress);

  return (
    <div className="font-poppins flex flex-col justify-start items-center h-screen w-screen bg-black relative">
      <div className="flex flex-col justify-center items-center  w-screen bg-black mt-10">
        <div className="flex justify-between items-center w-4/5 md:w-full md:px-20">
          <motion.img
            src={logo}
            alt="logo"
            className="w-14  md:w-20 "
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1
            className="text-base text-white md:text-[24px]"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {pages[progress].title}
          </motion.h1>
          <motion.div
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HiOutlineUserCircle className="w-12 h-12 p-1 font-thin text-white md:w-16 md:h-16" />
          </motion.div>
        </div>
        {progress !== 0 && <ProgressBar progress={progress} />}
        {progress === 0 && (
          <div className="w-full flex justify-center items-center text-white mt-20"></div>
        )}
        {/* {progress !== 0 && pages[progress].meet &&
        <>
              <button
            onClick={() => directionProgress("prev")}
            className="bg-transparent  text-blue-700 font-semibold      rounded absolute bottom-0"
          >
            .
          </button>
        </>
      } */}
        <ProgressHeaders progress={progress} />
        <div className="flex justify-center items-center w-4/5 bottom-14 absolute gap-x-64 md:w-full md:px-20">
          {progress !== 0 && (
            <>
              <HiChevronLeft
                onClick={() => directionProgress("prev")}
                className=" text-white font-bold text-xl w-8 h-8"
              />
              {/* <button
                onClick={() => directionProgress("prev")}
                className="bg-transparent  text-blue-700 font-semibold  py-2 px-4 border border-blue-500  rounded"
              >
                Prev
              </button> */}
              <HiChevronRight
                onClick={() => directionProgress("next")}
                className=" text-white font-bold text-xl w-8 h-8"
              />
              {/* <button
                onClick={() => directionProgress("next")}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button> */}
            </>
          )}
          {progress === 0 && (
            <>
              <button
                onClick={() => directionProgress("next")}
                className="bg-[#c905faad] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
              >
                Empecemos!
              </button>
            </>
          )}
          {progress !== 0 && pages[progress].meet && (
            <>
              <button
                onClick={() => directionProgress("next")}
                className="bg-[#c905faad] text-white font-semibold  py-2 px-4   rounded-xl absolute cursor-pointer"
              >
                {`Agendar con ${pages[progress].meetName}`}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
