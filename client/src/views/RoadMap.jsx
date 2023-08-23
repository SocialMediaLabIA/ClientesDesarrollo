import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import logo from "../assets/smllogo.webp";
import ProgressBar from "../components/RoadMapItems/ProgressBar";
import ProgressHeaders from "../components/RoadMapItems/ProgressHeaders";
import pages from "../utils/progressPages"

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
        <div className="flex justify-between items-center w-4/5">
          <img src={logo} alt="Logo" className="w-14 h-14" />
          <h1 className="text-base text-white">{pages[progress].title}</h1>
          <HiOutlineUserCircle className="w-12 h-12 p-1 font-thin  text-white" />
        </div>
        {progress !== 0 && <ProgressBar progress={progress} />}
        <ProgressHeaders progress={progress} />
        <div className="flex justify-center items-center w-4/5 bottom-32 absolute gap-32">
          {progress !== 0 &&
            <>
              <button
                onClick={() => directionProgress("prev")}
                className="bg-transparent  text-blue-700 font-semibold  py-2 px-4 border border-blue-500  rounded"
              >
                Prev
              </button>
              <button
                onClick={() => directionProgress("next")}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            </>
          }
          {progress === 0 &&
            <>
              <button
                onClick={() => directionProgress("next")}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Continuar
              </button>
            </>
          }
        </div>
      </div>
    </div>
  );
}
