import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { PiFlagPennantFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import pages from "../../../../utils/progressPages";

export default function ProgressBar({
  progress,
  setProgress,
  loaderFuncion,
  openBar,
  setOpenBar,
}) {
  const setOpenBarHandler = () => {
    setOpenBar(!openBar);
  };

  const pressProgressHandler = (number) => {
    loaderFuncion(true);
    setTimeout(() => {
      loaderFuncion(false);
    }, 3000);
    setProgress(number);
  };

  return (
    <div
      className={
        openBar ? "h-screen w-screen  flex justify-start items-center" : ""
      }
    >
      <div
        className={
          openBar
            ? "z-50 flex flex-col justify-start items-center w-[350px] text-white text-sm   bg-[#6b277c] h-screen  max-h-[100%] md:h-screen  md:max-h-[100%] transform translate-x-0 duration-300 ease-in-out delay-75"
            : " z-50 flex flex-col justify-start items-center w-[45px] text-white text-sm   bg-[#6b277c] h-screen   max-h-[100%] md:h-screen  md:max-h-[100%] "
        }
      >
        {/* <div className="w-full flex flex-col justify-start items-start h-screen max-h-[500px] md:max-h-[100%] transition-transform transform translate-x-0 duration-500 ease-in-out delay-150"> */}
        <div
          className={
            openBar
              ? "bg-[#441769bd]  cursor-pointer  flex items-center justify-start h-[80px] md:h-[70px] w-full text-white hover:bg-[#4a2353bd]"
              : "bg-[#441769bd]  cursor-pointer  flex items-center justify-start h-[80px] md:h-[70px] w-full text-white hover:bg-[#4a2353bd] "
          }
          onClick={setOpenBarHandler}
        >
          {openBar ? (
            <>
              <HiChevronLeft className="w-5 h-5  ml-3 rounded-full " />
              <motion.h1
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 10, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="ml-16 font-bold whitespace-nowrap"
              >
                SOCIAL MEDIA LAB
              </motion.h1>
            </>
          ) : (
            <HiChevronRight className="w-5 h-5 ml-3  rounded-full" />
          )}
        </div>

        <div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 10, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className=" my-1 w-full  flex flex-col justify-start items-start overflow-scroll no-scrollbar h-screen  md:max-h-[100%]transition-transform transform translate-x-0 duration-500 ease-in-out delay-150"
        >
          {/* Seccion 1 */}

          {pages.map((item, index) => {
            if (item.section === true) {
              return (
                <div
                  key={index}
                  className="my-2 p-1 flex justify-center items-center"
                >
                  {item.number < progress && (
                    <PiFlagPennantFill
                      // onClick={() => {
                      //   pressProgressHandler(item.number);
                      // }}
                      className="ml-2 text-[#00DFFD]"
                    />
                  )}
                  {item.number > progress && (
                    <PiFlagPennantFill
                      // onClick={() => {
                      //   pressProgressHandler(item.number);
                      // }}
                      className="ml-2 text-[#fafafa]"
                    />
                  )}
                  {item.number === progress && (
                    <PiFlagPennantFill
                      // onClick={() => {
                      //   pressProgressHandler(item.number);
                      // }}
                      className="ml-2 text-[#00DFFD]"
                    />
                  )}
                  {/* TITULOS BANDERAS */}
                  <div
                    className={
                      openBar
                        ? " ml-5 flex justify-start items-center  w-[280px] h-5  "
                        : "h-5 ml-5 flex justify-start items-center w-fit border-b-2 hover:border-[#beb8ba4f] "
                    }
                    // onClick={() => {
                    //   pressProgressHandler(item.number);
                    // }}
                  >
                    {openBar ? (
                      <motion.h1
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 10, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="h-5 p-1 mb-2 "
                      >
                        {item.title.toUpperCase()}
                      </motion.h1>
                    ) : (
                      <h1 className="h-5"></h1>
                    )}
                  </div>
                </div>
              );
            } else {
              return (
                <React.Fragment key={`fragment-${index}`}>
                  {
                    <div
                      className={
                        item.number === progress && openBar
                          ? "py-1 ml-2 pl-1 flex justify-start items-center w-fit  bg-[#ffffff28] hover:bg-[#b8b3b33f]  rounded-md  cursor-pointer"
                          : "py-1 ml-2 flex justify-start items-center w-fit cursor-pointer "
                      }
                    >
                      {item.number === progress && (
                        <p
                          onClick={() => {
                            pressProgressHandler(item.number);
                          }}
                          className=" my-1 border-4 border-[#4de75a] bg-[#1bff1352] rounded-full w-6 h-6 p-2  flex justify-center items-center hover:scale-110 cursor-pointer"
                        ></p>
                      )}
                      {item.number < progress && (
                        <p
                          onClick={() => {
                            pressProgressHandler(item.number);
                          }}
                          className="my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center hover:scale-110"
                        ></p>
                      )}
                      {item.number > progress && (
                        <p
                          onClick={() => {
                            pressProgressHandler(item.number);
                          }}
                          className="my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2 hover:scale-110"
                        ></p>
                      )}

                      {/* TITULOS */}
                      {item.number !== progress && (
                        <div
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 10, opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          className={
                            openBar
                              ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b80c] w-[280px] h-8  cursor-pointer"
                              : "h-5 ml-5 flex justify-start items-center   cursor-pointer "
                          }
                          onClick={() => {
                            pressProgressHandler(item.number);
                          }}
                        >
                          {" "}
                          {openBar ? (
                            <motion.h1
                              initial={{ x: -50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                              className="h-5 w-[300px] hover:text-gray-300"
                            >
                              {item.title}
                            </motion.h1>
                          ) : (
                            <h1 className="h-5"></h1>
                          )}
                        </div>
                      )}
                      {item.number === progress && (
                        <div
                          className={
                            openBar
                              ? "ml-5 flex justify-start items-center  w-[280px] h-5 hover:mb-1 cursor-pointer"
                              : "h-5 ml-5 flex justify-start items-center   cursor-pointer "
                          }
                          onClick={() => {
                            pressProgressHandler(item.number);
                          }}
                        >
                          {" "}
                          {openBar ? (
                            <motion.h1
                              initial={{ x: -50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                              className="h-5 w-[300px]"
                            >
                              {item.title}
                            </motion.h1>
                          ) : (
                            <h1 className="h-5"></h1>
                          )}
                        </div>
                      )}
                    </div>
                  }
                </React.Fragment>
              );
            }
          })}
        </div>
        {/* </div> */}
        {/* BARRA APERTURA */}
      </div>
      <div
        className={openBar ? " bg-black opacity-80 w-screen h-screen z-10" : ""}
      ></div>
    </div>
  );
}
