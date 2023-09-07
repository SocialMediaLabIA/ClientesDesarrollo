import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoLogOutOutline, IoAddOutline } from "react-icons/io5";
import { motion } from "framer-motion";
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
} from "react-icons/hi2";
import pages from "../../../utils/progressPages";
import ProgressBar from "./RoadMapItems/ProgressBar";
import ProgressHeaders from "./RoadMapItems/ProgressHeaders";
import { setProgressUser } from "../../../redux/User/ActionUser/setProgressUser";
import { getProgressUser } from "../../../redux/User/ActionUser/getProgressUser";
import logo from "../../../assets/smllogo.webp";
import CreatePages from "./CreatePage/CreatePages";

export default function RoadMapAdm({ handleSidebar }) {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const idParams = search.slice(4);
  const { progressNumber } = useSelector((state) => state);
  let [progress, setProgress] = useState(progressNumber || 1);
  let [percentage, setPercentage] = useState("0%");
  let [openBar, setOpenBar] = useState(false);
  let [createPage, setCreatePage] = useState(false);

  const [loader, setLoader] = useState(true);
  const loaderFuncion = (status) => {
    setLoader(status);
  };

  // loaderFuncion(true)

  useEffect(() => {
    loaderFuncion(true);
    dispatch(getProgressUser(idParams)).then(() => {
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

  const handleCreatePages = () => {
    setCreatePage(!createPage);
  };
  return (
    <div className=" font-poppins flex flex-col justify-between items-center h-screen w-full bg-black relative">
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

      {createPage && (
        <div className="absolute flex justify-center items-center w-full h-screen z-50 top-0 right-0">
          <div className="flex flex-col w-[30rem] h-fit p-10 bg-[#383838]">
            <CreatePages setCreatePage={setCreatePage} />
          </div>
        </div>
      )}

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-start items-center w-fit left-0 h-screen absolute "
      >
        {progress !== 0 && (
          <ProgressBar
            progress={progress}
            setProgress={setProgress}
            loaderFuncion={loaderFuncion}
            openBar={openBar}
            setOpenBar={setOpenBar}
          />
        )}
        {progress === 0 && (
          // <div className="w-full flex justify-center items-center text-white mt-20"></div>
          <ProgressBar
            progress={progress}
            setProgress={setProgress}
            loaderFuncion={loaderFuncion}
          />
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="flex justify-around items-center rounded-xl w-fit px-3 bg-[#3b393b67] mt-10 md:mt-5 md:w-[800px] xl:w-[1000px] ml-8 md:ml-0"
      >
        <motion.img
          src={logo}
          alt="logo"
          className="w-14  md:w-20 "
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        />
        <div className="w-full flex justify-start items-center">
          <motion.h1
            className="text-base text-center text-white font-bold text-[18px] md:text-[20px] ml-5 pr-4"
            initial={{}}
            animate={{}}
            transition={{ duration: 1 }}
          >
            {pages[progress] ? pages[progress].title : ""}
          </motion.h1>
        </div>

        <div className="flex gap-2 items-center justify-center">
          <IoAddOutline
            onClick={() => handleCreatePages()}
            className="w-12 h-12 cursor-pointer rounded-full p-2 hover:bg-[#484848]"
          />
          <IoLogOutOutline
            onClick={() => handleSidebar("admin")}
            className="w-12 h-12 cursor-pointer rounded-full pt-2 pb-2 pl-3 pr-1  hover:bg-[#484848]"
          />
        </div>
        {/* <motion.h1
          className="text-base text-center text-white font-thin text-[18px] md:text-[20px]"
          initial={{}}
          animate={{}}
          transition={{ duration: 1 }}
        >
          {pages[progress] ? pages[progress].number : ""}
        </motion.h1> */}
        {/* <motion.div
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HiOutlineUserCircle className="w-12 h-12 p-1 font-thin text-white md:w-16 md:h-16" />
        </motion.div> */}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className=" bg-gray-200 rounded-full dark:bg-gray-700 w-[60%] xl:w-[30%] ml-8 md:ml-0 relative h-5"
      >
        <div
          className="bg-[#c905faad] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h-5"
          style={{ width: percentage }}
        >
          <p className="absolute top-1 left-[50%]">{percentage}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className={progress === 0 ? "" : "ml-8 md:ml-0"}
      >
        <ProgressHeaders progress={progress} />
      </motion.div>

      {/* </div> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex justify-center md:w-full md:gap-64  items-center gap-52  mb-20 z-0 ml-8 md:ml-0"
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
                className="text-white bg-[#c905faad] hover:bg-[#e505fac7] font-bold text-xl w-12 h-12 p-2 rounded-full  cursor-pointer"
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
        {progress === 1 && (
          <>
            <button
              onClick={() => directionProgress("next")}
              className="bg-[#c905faad] hover:bg-[#e505fac7] text-white font-bold py-2 px-4 rounded-xl"
            >
              Empecemos!
            </button>
          </>
        )}
        {progress === 43 && (
          <>
            <button
              onClick={() => directionProgress("prev")}
              className="bg-[#c905faad] hover:bg-[#e505fac7] text-white font-bold py-2 px-4 rounded-xl"
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
                className="bg-[#c905faad] hover:bg-[#e505fac7] text-white font-semibold  py-2 px-2 text-sm rounded-md absolute cursor-pointer "
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
                className="bg-[#c905faad] text-white font-semibold  py-2 px-2 text-sm rounded-md absolute cursor-pointer"
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
                className="bg-[#c905faad] text-white font-semibold  py-2 px-2 text-sm rounded-md absolute cursor-pointer"
              >
                {`Agendar con ${
                  pages[progress] ? pages[progress].meetName : ""
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
