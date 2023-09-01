import React, { useState } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
} from "react-icons/hi2";
import { PiFlagPennantFill } from "react-icons/pi";
import pages from "../../utils/progressPages";
import { useDispatch, useSelector } from "react-redux";

export default function ProgressBar({ progress, setProgress, loaderFuncion }) {
  const [openBar, setOpenBar] = useState(false);

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
        openBar
          ? " left-0 flex justify-start items-center w-[370px] text-white text-sm  pr-4 bg-[#6b277c] rounded-r-lg h-screen max-h-[500px] md:max-h-[100%] transition-transform transform translate-x-0 duration-500 ease-in-out delay-150"
          : " left-0 flex justify-start items-center w-[60px] text-white text-sm   bg-[#6b277c] rounded-r-lg h-screen max-h-[500px] md:max-h-[100%] transition-transform transform translate-x-0 duration-500 ease-in-out delay-150"
      }
    >
      <div className="w-full flex flex-col justify-start items-start h-screen max-h-[500px] md:max-h-[100%] transition-transform transform translate-x-0 duration-500 ease-in-out delay-150">
        <div className=" ml-1 w-fit  flex flex-col justify-start items-start overflow-scroll no-scrollbar h-screen max-h-[500px] md:max-h-[100%] transition-transform transform translate-x-0 duration-500 ease-in-out delay-150">
          {/* Seccion 1 */}

          {pages.map((item, index) => {
            if (item.section === true) {
              return (
                <div
                  key={index}
                  className="my-2 ml-3 flex justify-center items-center"
                >
                  {item.number < progress && (
                    <PiFlagPennantFill
                      onClick={() => {
                        pressProgressHandler(item.number);
                      }}
                      className="text-[#00DFFD]"
                    />
                  )}
                  {item.number > progress && (
                    <PiFlagPennantFill
                      onClick={() => {
                        pressProgressHandler(item.number);
                      }}
                      className="text-[#fafafa]"
                    />
                  )}
                  {item.number === progress && (
                    <PiFlagPennantFill
                      onClick={() => {
                        pressProgressHandler(item.number);
                      }}
                      className="text-[#00DFFD]"
                    />
                  )}
                  {/* TITULOS BANDERAS */}
                  <div
                    className={
                      openBar
                        ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] hover:border-[#beb8b84f] w-[280px] h-5 cursor-pointer "
                        : "h-5 ml-5 flex justify-start items-center w-fit border-b-2 hover:border-[#beb8ba4f] cursor-pointer"
                    }
                    onClick={() => {
                      pressProgressHandler(item.number);
                    }}
                  >
                    {openBar ? (
                      <h1 className="h-5 p-1 hover:mb-1">
                        {item.title.toUpperCase()}
                      </h1>
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
                          ? "ml-2 flex justify-center items-center w-fit  bg-[#ffffff42] hover:bg-[#b8b3b342] p-1 rounded-md  cursor-pointer"
                          : "ml-2 flex justify-center items-center w-fit cursor-pointer "
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
                      <div
                        className={
                          openBar
                            ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[280px] h-5 hover:mb-1 cursor-pointer"
                            : "h-5 ml-5 flex justify-start items-center   cursor-pointer "
                        }
                        onClick={() => {
                          pressProgressHandler(item.number);
                        }}
                      >
                        {" "}
                        {openBar ? (
                          <h1 className="h-5 w-[300px]">{item.title}</h1>
                        ) : (
                          <h1 className="h-5"></h1>
                        )}
                      </div>
                    </div>
                  }
                </React.Fragment>
              );
            }
          })}
        </div>
      </div>
      {/* BARRA APERTURA */}
      <div
        className={
          openBar
            ? "absolute right-0 cursor-pointer  flex items-center justify-end h-[500px] md:h-screen  text-white hover:bg-[#a048b6bd] rounded-r-xl"
            : "absolute right-0 cursor-pointer  flex items-center justify-end h-[500px]  md:h-screen text-white hover:bg-[#a048b6b4] rounded-r-xl"
        }
        onClick={setOpenBarHandler}
      >
        {openBar ? (
          <HiChevronLeft className="w-5 h-5   rounded-full " />
        ) : (
          <HiChevronRight className="w-5 h-5   rounded-full" />
        )}
      </div>
    </div>
  );
}
