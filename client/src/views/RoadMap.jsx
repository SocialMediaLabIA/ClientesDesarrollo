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
  console.log(progressNumber);
  let [progress, setProgress] = useState(progressNumber || 1);
  let [percentage, setPercentage] = useState("0%");
  let [openBar, setOpenBar] = useState(false);
  console.log(progress);

  const [loader, setLoader] = useState(true);
  const loaderFuncion = (status) => {
    setLoader(status);
  };

  // loaderFuncion(true)

  useEffect(() => {
    loaderFuncion(true);
    dispatch(getProgressUser(idParams)).then(() => {
      console.log(progress);
      setProgress(progressNumber);
      loaderFuncion(false);
    });
    setPercentage(
      `${(
        (100 * (pages[progressNumber].number + 1)) /
        pages.length
      ).toFixed()}%`
    );
  }, [dispatch, progressNumber]);

  const directionProgress = async (direction) => {
    if (direction === "next" && progress < 43 && progressNumber < 43) {
      if (pages[progress + 1].section === true) {
        console.log("wwwwwwwwwwwwwwwwwwwww");
        setProgress(progress + 2);
        loaderFuncion(true);
        dispatch(setProgressUser(idParams, 2)).then(() => {
          dispatch(getProgressUser(idParams));
          loaderFuncion(true);
        });
        setTimeout(() => {
          loaderFuncion(false);
        }, 3000);
        loaderFuncion(true);
      } else {
        setProgress(++progress);
        loaderFuncion(true);
        dispatch(setProgressUser(idParams, 1)).then(() => {
          dispatch(getProgressUser(idParams));
          loaderFuncion(true);
        });
        setTimeout(() => {
          loaderFuncion(false);
        }, 3000);
        loaderFuncion(true);
      }
    }
    if (direction === "prev" && progress > 0 && progressNumber > 0) {
      if (progress === 1) {
        return;
      }
      loaderFuncion(true);
      if (pages[progress - 1].section === true) {
        setProgress(progress - 2);
        dispatch(setProgressUser(idParams, -2)).then(() => {
          dispatch(getProgressUser(idParams));
          loaderFuncion(true);
        });
        setTimeout(() => {
          loaderFuncion(false);
        }, 3000);
        loaderFuncion(true);
      } else {
        setProgress(--progress);
        dispatch(setProgressUser(idParams, -1)).then(() => {
          dispatch(getProgressUser(idParams));
          loaderFuncion(true);
        });
        setTimeout(() => {
          loaderFuncion(false);
        }, 3000);
        loaderFuncion(true);
      }
    }
  };
  // "text-[#00DFFD] " : "text-[#fafafa]"
  return (
    <div className=" font-poppins flex flex-col justify-start items-center h-screen w-full bg-[#141416] relative">
      {loader ? (
        <div className="absolute  h-screen w-screen bg-black opacity-80 pb-10 flex justify-center items-center  z-10">
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
        className="flex justify-start items-center w-fit left-0 h-screen absolute "
      >
        <ProgressBar
          progress={progress}
          setProgress={setProgress}
          loaderFuncion={loaderFuncion}
          openBar={openBar}
          setOpenBar={setOpenBar}
          progressNumber={progressNumber}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="flex justify-around items-center rounded-xl w-fit h-20 px-3 bg-[#3b393b67] mt-14 md:mt-14 md:w-[50%] ml-8 md:ml-0 md:relative"
      >
        <motion.img
          src={logo}
          alt="logo"
          className="w-14  md:w-20 md:absolute left-2"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        />
        <div className="w-full flex justify-start md:justify-center items-center">
          <motion.h1
            className="text-base text-center   text-white font-bold text-[18px] md:text-[24px] ml-5 pr-4"
            initial={{}}
            animate={{}}
            transition={{ duration: 1 }}
          >
            {pages[progress] ? pages[progress].title : ""}
          </motion.h1>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className=" mt-8 md:mt-5 lg:mt-16 bg-gray-200 rounded-full dark:bg-gray-700 w-[50%] md:w-[40%]  ml-8 md:ml-0 relative h-5"
      >
        <div
          className=" bg-[#c905faad] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h-5"
          style={{ width: percentage }}
        >
          <p className="absolute top-1 left-[50%]">{percentage}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className={progress === 0 ? "" : " md:w-[50%] flex justify-center items-center ml-8 md:ml-0 absolute bottom-1/3 md:top-1/4 lg:top-52 2xl:top-96"}
      >
        <ProgressHeaders progress={progress} />
      </motion.div>

      {/* </div> */}

      <motion.div
        initial={{ opacity: 0, y:0 }}
        animate={{ opacity: 1, y:0}}
        transition={{ duration: 2 }}
        className="absolute bottom-20 md:bottom-1/2 md:mt-10 flex justify-center md:w-full  items-center gap-52 md:gap-[70%]  ml-8 md:ml-0 z-0  "
      >
        {progress !== 1 && progress !== 43 && (
          <>
            <motion.div
              initial={{ x: -20 }}
              animate={{ x: 10 }}
              transition={{ duration: 2 }}
            >
              <HiChevronLeft
                onClick={() => directionProgress("prev")}
                // className=" text-black font-bold text-xl w-8 h-8 bg-white rounded-full p-5"
                className="text-white bg-[#c905faad] hover:bg-[#e505fac7] font-bold text-xl w-12 h-12 p-2 rounded-full cursor-pointer"
              />
            </motion.div>
            <motion.div
              initial={{ x: 20 }}
              animate={{ x: -10 }}
              transition={{ duration: 2 }}
            >
              <HiChevronRight
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ duration: 2 }}
                onClick={() => directionProgress("next")}
                className=" text-white bg-[#c905faad] hover:bg-[#e505fac7] font-bold text-xl w-12 h-12 p-2 rounded-full  cursor-pointer"
              />
            </motion.div>
          </>
        )}
        {/* </div> */}
      </motion.div>
      <motion.div
              initial={{ y: 0 }}
              animate={{ y: 3 }}
              transition={{ duration: 2 }}
             className=" bottom-24 absolute w-fit ml-8">
          {progress === 1 && (
            <>
              <button
                onClick={() => directionProgress("next")}
                className="w-fit bg-[#c905faad] hover:bg-[#e505fac7] text-white font-bold py-4  px-4 md:px-16 rounded-xl"
              >
                Empecemos!
              </button>
            </>
          )}
          {progress === 43 && (
            <>
              <button
                onClick={() => directionProgress("prev")}
                className="w-fit bg-[#c905faad] hover:bg-[#e505fac7] text-white font-bold py-2 px-4 md:px-10 rounded-xl"
              >
                Repetir proceso
              </button>
            </>
          )}
          {progress !== 0 && pages[progress] && pages[progress].meet && (
            <>
              {pages[progress].meetName === "Belén" && (
                <a
                  href="https://calendly.com/belengiorda/meetings"
                  target="_blank" // Abre el enlace en una nueva pestaña/tab
                  rel="noopener noreferrer" // Recomendado al abrir enlaces externos
                  onClick={() => directionProgress("")}
                  className="w-fit bg-[#c905faad] hover:bg-[#e505fac7] text-white font-bold py-4 px-2 md:px-10 rounded-md cursor-pointer"
                >
                  {`Agendar con ${
                    pages[progress] ? pages[progress].meetName : ""
                  }`}
                </a>
              )}
              {pages[progress].meetName === "Nicole" && (
                <a
                  href="https://calendly.com/nicole-laszuk/60min"
                  target="_blank" // Abre el enlace en una nueva pestaña/tab
                  rel="noopener noreferrer" // Recomendado al abrir enlaces externos
                  onClick={() => directionProgress("")}
                  className="w-fit bg-[#c905faad] hover:bg-[#e505fac7] text-white font-bold py-2 px-4 md:px-10 rounded-md cursor-pointer"
                >
                  {`Agendar con ${
                    pages[progress] ? pages[progress].meetName : ""
                  }`}
                </a>
              )}
              {pages[progress].meetName === "Nicolás" && (
                <a
                  href="http://calendly.com/nicolas-sml"
                  target="_blank" // Abre el enlace en una nueva pestaña/tab
                  rel="noopener noreferrer" // Recomendado al abrir enlaces externos
                  onClick={() => directionProgress("")}
                  className="w-fit bg-[#c905faad] hover:bg-[#e505fac7] text-white font-bold py-4 px-4 md:px-10 rounded-md cursor-pointer"
                >
                  {`Agendar con ${
                    pages[progress] ? pages[progress].meetName : ""
                  }`}
                </a>
              )}
            </>
          )}
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
