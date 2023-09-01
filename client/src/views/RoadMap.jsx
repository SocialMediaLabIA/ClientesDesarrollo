import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import { setProgressUser } from "../redux/User/ActionUser/setProgressUser";
import { getProgressUser } from "../redux/User/ActionUser/getProgressUser";

export default function RoadMap() {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const idParams = search.slice(4);
  const { progressNumber } = useSelector((state) => state);
  console.log(progressNumber)
  let [progress, setProgress] = useState(progressNumber);

  const [loader, setLoader] = useState(true);
  const loaderFuncion = (status) => {
    setLoader(status);
  };

  // loaderFuncion(true)
  console.log(progressNumber);

  useEffect(() => {
    loaderFuncion(true);
    dispatch(getProgressUser(idParams)).then(() => {
      loaderFuncion(false);
    });
  }, [dispatch]);

  const directionProgress = async (direction) => {
    if (direction === "next" && progressNumber < 38) {
      loaderFuncion(true);
      setProgress(++progress);
      dispatch(setProgressUser(idParams, "next"))
        .then(() => {
          dispatch(getProgressUser(idParams));
        })
        .then(() => {
          loaderFuncion(false);
        });
    }
    if (direction === "prev" && progressNumber > 0) {
      loaderFuncion(true);
      setProgress(--progress);
      dispatch(setProgressUser(idParams, "prev"))
        .then(() => {
          dispatch(getProgressUser(idParams));
        })
        .then(() => {
          loaderFuncion(false);
        });
    }
  };
  // "text-[#00DFFD] " : "text-[#fafafa]"
  return (
    <div className=" font-poppins flex flex-col justify-between items-center h-screen w-full bg-black relative">
      {loader ? (
        <div className="absolute  h-screen w-screen bg-black opacity-95 pb-10 flex justify-center items-center ">
          <div className="flex flex-col gap-5 items-center justify-center w-[30rem] p-5 h-fit rounded-xl ">
            {/* <h2 className="text-white text-[2rem]">Enviando Leads!</h2> */}

            <div className="flex flex-col gap-2 p-2">
              {/* {promisesNames &&
              promisesNames.map((item) => {
                return (
                  <h2 key={item._id} className="text-white m-1">
                    {item}
                  </h2>
                );
              })} */}
            </div>
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      ) : null}

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-start items-center w-fit left-0 h-screen absolute z-0"
      >
        {progressNumber !== 0 && (
          <ProgressBar progressNumber={progressNumber} />
        )}
        {progressNumber === 0 && (
          <div className="w-full flex justify-center items-center text-white mt-20"></div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="flex justify-around items-center rounded-xl w-2/4 bg-[#3b393b67] mt-10 md:mt-5"
      >
        <motion.img
          src={logo}
          alt="logo"
          className="w-14  md:w-20 "
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h1
          className="text-base text-center text-white font-thin text-[18px] md:text-[20px]"
          initial={{  }}
          animate={{  }}
          transition={{ duration: 1 }}
        >
          {pages[progressNumber]
            ? pages[progressNumber].title
            : ""}
        </motion.h1>
        <motion.div
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HiOutlineUserCircle className="w-12 h-12 p-1 font-thin text-white md:w-16 md:h-16" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className={progressNumber === 0 ? "" : "ml-10 md:ml-0"}
      >
        <ProgressHeaders progressNumber={progressNumber} />
      </motion.div>

      {/* </div> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex justify-center md:w-full md:gap-64  items-center gap-56  mb-20 "
      >
        {progressNumber !== 0 && progressNumber !== 38 && (
          <>
            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 2 }}
            >
              <HiChevronLeft
                onClick={() => directionProgress("prev")}
                // className=" text-black font-bold text-xl w-8 h-8 bg-white rounded-full p-5"
                className="text-white bg-[#c905faad] hover:bg-[#e505fac7] font-bold text-xl w-10 h-10 p-2 rounded-full z-50 cursor-pointer"
              />
            </motion.div>
            <motion.div
              initial={{ x: 20 }}
              animate={{ x: 0 }}
              transition={{ duration: 2 }}
            >
              <HiChevronRight
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ duration: 2 }}
                onClick={() => directionProgress("next")}
                className=" text-white bg-[#c905faad] hover:bg-[#e505fac7] font-bold text-xl w-10 h-10 p-2 rounded-full z-50 cursor-pointer"
              />
            </motion.div>
          </>
        )}
        {progressNumber === 0 && (
          <>
            <button
              onClick={() => directionProgress("next")}
              className="bg-[#c905faad] hover:bg-[#e505fac7] text-white font-bold py-2 px-4 rounded-xl"
            >
              Empecemos!
            </button>
          </>
        )}
        {progressNumber === 38 && (
          <>
            <button
              onClick={() => directionProgress("prev")}
              className="bg-[#c905faad] hover:bg-[#e505fac7] text-white font-bold py-2 px-4 rounded-xl"
            >
              Repetir proceso
            </button>
          </>
        )}
        {progressNumber !== 0 &&
          pages[progressNumber] &&
          pages[progressNumber].meet && (
            <>
              {pages[progressNumber].meetName === "Belén" && (
                <a
                  href="https://calendly.com/belengiorda/meetings"
                  target="_blank" // Abre el enlace en una nueva pestaña/tab
                  rel="noopener noreferrer" // Recomendado al abrir enlaces externos
                  onClick={() => directionProgress("")}
                  className="bg-[#c905faad] hover:bg-[#e505fac7] text-white font-semibold  py-2 px-4   rounded-xl absolute cursor-pointer"
                >
                  {`Agendar con ${
                    pages[progressNumber] ? pages[progressNumber].meetName : ""
                  }`}
                </a>
              )}
              {pages[progressNumber].meetName === "Nicole" && (
                <a
                  href="https://calendly.com/nicole-laszuk/60min"
                  target="_blank" // Abre el enlace en una nueva pestaña/tab
                  rel="noopener noreferrer" // Recomendado al abrir enlaces externos
                  onClick={() => directionProgress("")}
                  className="bg-[#c905faad] text-white font-semibold  py-2 px-4   rounded-xl absolute cursor-pointer"
                >
                  {`Agendar con ${
                    pages[progressNumber] ? pages[progressNumber].meetName : ""
                  }`}
                </a>
              )}
              {pages[progressNumber].meetName === "Nicolás" && (
                <a
                  href="http://calendly.com/nicolas-sml"
                  target="_blank" // Abre el enlace en una nueva pestaña/tab
                  rel="noopener noreferrer" // Recomendado al abrir enlaces externos
                  onClick={() => directionProgress("")}
                  className="bg-[#c905faad] text-white font-semibold  py-2 px-4 rounded-xl absolute cursor-pointer"
                >
                  {`Agendar con ${
                    pages[progressNumber] ? pages[progressNumber].meetName : ""
                  }`}
                </a>
              )}
            </>
          )}
        {/* </div> */}
      </motion.div>
    </div>
  );
}

//         <div className="flex justify-center items-center w-4/6 md:w-full md:px-20">

//         </div>
//         <div>
//           <motion.div
//             initial={{ x: 50 }}
//             animate={{ x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <HiOutlineUserCircle className="w-12 h-12 p-1 font-thin text-black md:w-16 md:h-16" />
//           </motion.div>
//         </div>

//         </div>
//       </div>
//     </div>
//   </div>
// );
