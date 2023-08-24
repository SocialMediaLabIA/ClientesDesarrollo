import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineUserCircle } from "react-icons/hi";
import logo from "../assets/smllogo.webp";
import ProgressBar from "../components/RoadMapItems/ProgressBar";
import ProgressHeaders from "../components/RoadMapItems/ProgressHeaders";
import pages from "../utils/progressPages"
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { HiChevronLeft, HiChevronRight, HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";
import { setProgressUser } from "../redux/User/ActionUser/setProgressUser";
import { getProgressUser } from "../redux/User/ActionUser/getProgressUser";

export default function RoadMap() {
  const dispatch = useDispatch();
  const {search} = useLocation();
  const idParams = search.slice(4)
  const { progressNumber } = useSelector((state) => state);
  let [progress, setProgress] = useState(progressNumber);

  useEffect(()=>{
    dispatch(getProgressUser(idParams))
  }, [dispatch])

  const directionProgress = async (direction) => {
    if (direction === "next" && progressNumber < 20){
      setProgress(++progress);
      dispatch(setProgressUser(idParams, "next"))
      dispatch(getProgressUser(idParams))
    } 
    if (direction === "prev" && progressNumber > 0){
      setProgress(--progress);
      dispatch(setProgressUser(idParams, "prev"))
      dispatch(getProgressUser(idParams))
    } 
  };

  
  return (
    <div className="font-poppins flex flex-col justify-start items-center h-screen w-screen bg-black relative">
      <div className="flex flex-col justify-center items-center  w-screen bg-black mt-10">
        <div className="flex justify-between items-center w-4/5">
          <img src={logo} alt="Logo" className="w-14 h-14" />
          <h1 className="text-base text-white">{pages[progressNumber] ? pages[progressNumber].title : ''}</h1>
          <HiOutlineUserCircle className="w-12 h-12 p-1 font-thin  text-white" />
        </div>
        {progressNumber !== 0 && <ProgressBar progressNumber={progressNumber} />}
        {progressNumber === 0 && <div className="w-full flex justify-center items-center text-white mt-20"></div>}
        <ProgressHeaders progressNumber={progressNumber} />
        <div className="flex justify-center items-center w-4/5 bottom-14 absolute gap-64">
          {progressNumber !== 0 &&
            <>
            <HiChevronLeft onClick={() => directionProgress("prev")}
                className=" text-white font-bold text-xl w-8 h-8"/>
              {/* <button
                onClick={() => directionProgress("prev")}
                className="bg-transparent  text-blue-700 font-semibold  py-2 px-4 border border-blue-500  rounded"
              >
                Prev
              </button> */}
              <HiChevronRight onClick={() => directionProgress("next")}
                className=" text-white font-bold text-xl w-8 h-8"/>
              {/* <button
                onClick={() => directionProgress("next")}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button> */}
            </>
          } 
          {progressNumber === 0 &&
            <>
              <button
                onClick={() => directionProgress("next")}
                className="bg-[#c905faad] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
                >
                Empecemos!
              </button>
            </>
          }
          {progressNumber !== 0 && pages[progressNumber] && pages[progressNumber].meet &&
            <>
    
              <button
                onClick={() => directionProgress("")}
                className="bg-[#c905faad] text-white font-semibold  py-2 px-4   rounded-xl absolute cursor-pointer"
              >
                {`Agendar con ${pages[progressNumber] ? pages[progressNumber].meetName : ''}`}
              </button>

            </>
          }
        </div>
      </div>
    </div>
  );
}
