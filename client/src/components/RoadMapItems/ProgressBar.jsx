import React, { useState } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
} from "react-icons/hi2";
import { PiFlagPennantFill } from "react-icons/pi";
import pages from "../../utils/progressPages";

export default function ProgressBar({ progressNumber }) {
  const [openBar, setOpenBar] = useState(false);

  const setOpenBarHandler = () => {
    setOpenBar(!openBar);
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
          <div className=" my-2 ml-3 flex justify-center items-center w-fit">
            <PiFlagPennantFill
              className={
                progressNumber >= 1 ? " text-[#00DFFD] " : "text-[#fafafa]"
              }
            />
             <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5 p-1">{pages[1].title.toUpperCase()}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div className=" ml-2 flex justify-center items-center w-fit">
            <p
              className={
                progressNumber >= 1
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[1].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 2
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[2].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 3
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[3].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 4
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[4].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 5
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[5].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 6
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[6].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 7
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[7].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 8
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[8].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 9
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[9].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 10
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[10].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          {/* Seccion 2 */}
          <div className=" my-2 ml-3 flex justify-center items-center w-fit">
            <PiFlagPennantFill
              className={
                progressNumber >= 11 ? "text-[#00DFFD] " : "text-[#fafafa]"
              }
            />
                         <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[11].title.toUpperCase()}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 11
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[11].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 12
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[12].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 13
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[13].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 14
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[14].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 15
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[15].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 16
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[16].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 17
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[17].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 18
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[18].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 19
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[19].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 20
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[20].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          {/* Seccion 3 */}
          <div className=" my-2 ml-3 flex justify-center items-center w-fit">
            <PiFlagPennantFill
              className={
                progressNumber >= 21 ? " text-[#00DFFD] " : "text-[#fafafa]"
              }
            />
                         <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[21].title.toUpperCase()}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 21
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[21].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 22
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[22].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 23
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[23].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 24
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[24].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 25
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[25].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 26
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>

            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[26].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 27
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>
            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[27].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          {/* Seccion 4 */}
          <div className=" my-2 ml-3 flex justify-center items-center w-fit">
            <PiFlagPennantFill
              className={
                progressNumber >= 28 ? " text-[#00DFFD] " : "text-[#fafafa]"
              }
            />
                         <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[28].title.toUpperCase()}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 28
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>
            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[28].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          {/* Seccion 5 */}
          <div className=" my-2 ml-3 flex justify-center items-center w-fit">
            <PiFlagPennantFill
              className={
                progressNumber >= 29 ? " text-[#00DFFD] " : "text-[#fafafa]"
              }
            />
                         <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[29].title.toUpperCase()}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 29
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>
            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[29].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 30
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>
            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[30].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 31
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>
            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[31].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 32
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>
            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[32].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 33
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>
            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[33].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>
          {/* //Seccion 6 */}
          <div className=" my-2 ml-3 flex justify-center items-center w-fit">
            <PiFlagPennantFill
              className={
                progressNumber >= 34 ? " text-[#00DFFD] " : "text-[#fafafa]"
              }
            />
                         <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[34].title.toUpperCase()}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 34
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>
            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[34].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>
          {/* //Seccion 7 */}
          <div className=" my-2 ml-3 flex justify-center items-center w-fit">
            <PiFlagPennantFill
              className={
                progressNumber >= 35 ? " text-[#00DFFD] " : "text-[#fafafa]"
              }
            />
                         <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[35].title.toUpperCase()}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 35
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>
            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[35].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>
          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 36
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>
            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[36].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>
          <div
            className=" ml-2 flex justify-center items-center w-fit"
            // className={
            //   progressNumber >= 1
            //     ? "border-2 border-[#00DFFD] w-fit rounded-full"
            //     : "border-2  w-fit rounded-full"
            // }
          >
            <p
              className={
                progressNumber >= 37
                  ? "my-1 border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-6 h-6 p-2  flex justify-center items-center"
                  : "my-1 border-4 rounded-full w-6 h-6 flex justify-center items-center p-2"
              }
            ></p>
            <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[37].title}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>

          {/* //Seccion 8 */}
          <div className=" my-2 ml-3 flex justify-center items-center w-fit">
            <PiFlagPennantFill
              className={
                progressNumber >= 38 ? " text-[#00DFFD] " : "text-[#fafafa]"
              }
            />
                         <div
              className={
                openBar
                  ? "ml-5 flex justify-start items-center border-b-2 border-[#beb8b827] w-[300px] h-5"
                  : "h-5 ml-5 flex justify-start items-center w-[300px]"
              }
            >
              {" "}
              {openBar ? (
                <h1 className="h-5">{pages[38].title.toUpperCase()}</h1>
              ) : (
                <h1 className="h-5"></h1>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          openBar
            ? "absolute flex items-center justify-end h-fit  text-white w-[370px] transition-transform transform translate-x-0 duration-500 ease-in-out delay-150"
            : "absolute flex items-center justify-end h-fit  text-white w-[60px] transition-transform transform translate-x-0 duration-500 ease-in-out delay-150"
        }
        onClick={setOpenBarHandler}
      >
        {openBar ? (
          <HiChevronLeft className="w-5 h-5  bg-[#6b277c] rounded-full" />
        ) : (
          <HiChevronRight className="w-5 h-5  bg-[#6b277c] rounded-full" />
        )}
      </div>
    </div>
  );
}

// return (
//   <div
//     className={
//       openBar
//         ? " left-0 flex justify-start items-center w-96 text-white text-sm md:  pr-4 bg-[#6b277c] rounded-r-lg    max-h-[400px] transition-transform transform translate-x-0 duration-500 ease-in-out delay-150"
//         : " left-0 flex justify-start items-center w-[60px] text-white text-sm md:   bg-[#6b277c] rounded-r-lg   max-h-[400px] transition-transform transform translate-x-0 duration-500 ease-in-out delay-150"
//     }
//   >
//     <div className="w-full flex flex-col justify-start items-start  max-h-[400px] transition-transform transform translate-x-0 duration-500 ease-in-out delay-150">
//       <div className=" w-12 my-2 flex flex-col justify-start items-center overflow-scroll no-scrollbar max-h-[400px] transition-transform transform translate-x-0 duration-500 ease-in-out delay-150">
//         {/* Seccion 1 */}
//         <p
//           className={
//             progressNumber >= 1
//               ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 p-2 flex justify-center items-center"
//               : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
//           }
//         >
//           1
//         </p>
//         <div
//           className={
//             progressNumber >= 1
//               ? "border-2 border-[#00DFFD] w-1"
//               : "border-2 w-1"
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 2
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 3
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 4
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 5
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 6
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 7
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 8
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 9
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 10
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>

//         {/* Seccion 2 */}
//         <p
//           className={
//             progressNumber >= 11
//               ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2 p-2 "
//               : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
//           }
//         >
//           2
//         </p>
//         <div
//           className={
//             progressNumber >= 11
//               ? "border-2 border-[#00DFFD] w-1"
//               : "border-2 w-1"
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 12
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 13
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 14
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 15
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 16
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 17
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 18
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 19
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 20
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>

//         {/* Seccion 3 */}
//         <p
//           className={
//             progressNumber >= 21
//               ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2  "
//               : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
//           }
//         >
//           3
//         </p>
//         <div
//           className={
//             progressNumber >= 21
//               ? "border-2 border-[#00DFFD] w-1"
//               : "border-2 w-1"
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 22
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 23
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 24
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 25
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 26
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 27
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>

//         {/* Seccion 4 */}
//         <p
//           className={
//             progressNumber >= 28
//               ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2"
//               : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
//           }
//         >
//           4
//         </p>
//         <div
//           className={
//             progressNumber >= 28
//               ? "border-2 border-[#00DFFD] w-1"
//               : "border-2 w-1"
//           }
//         ></div>

//         {/* Seccion 5 */}
//         <p
//           className={
//             progressNumber >= 29
//               ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2"
//               : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
//           }
//         >
//           5
//         </p>
//         <div
//           className={
//             progressNumber >= 29
//               ? "border-2 border-[#00DFFD] w-1"
//               : "border-2 w-1"
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 30
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 31
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 32
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 33
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         {/* //Seccion 6 */}
//         <p
//           className={
//             progressNumber >= 34
//               ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2"
//               : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
//           }
//         >
//           6
//         </p>
//         <div
//           className={
//             progressNumber >= 34
//               ? "border-2 border-[#00DFFD] w-1"
//               : "border-2 w-1"
//           }
//         ></div>

//         {/* //Seccion 7 */}

//         <p
//           className={
//             progressNumber >= 35
//               ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2"
//               : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
//           }
//         >
//           7
//         </p>
//         <div
//           className={
//             progressNumber >= 35
//               ? "border-2 border-[#00DFFD] w-1"
//               : "border-2 w-1"
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 36
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>
//         <div
//           className={
//             progressNumber >= 37
//               ? "border-2 border-[#00DFFD] w-1 "
//               : "border-2 w-1 "
//           }
//         ></div>

//         {/* //Seccion 8 */}
//         <p
//           className={
//             progressNumber >= 38
//               ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2"
//               : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
//           }
//         >
//           8
//         </p>
//         <p
//           className={
//             progressNumber >= 38
//               ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2"
//               : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
//           }
//         >
//           8
//         </p>
//         <p
//           className={
//             progressNumber >= 38
//               ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2"
//               : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
//           }
//         >
//           8
//         </p>
//         <p
//           className={
//             progressNumber >= 38
//               ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2"
//               : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
//           }
//         >
//           8
//         </p>
//         <p
//           className={
//             progressNumber >= 38
//               ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2"
//               : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
//           }
//         >
//           8
//         </p>
//         <p
//           className={
//             progressNumber >= 38
//               ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2"
//               : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
//           }
//         >
//           8
//         </p>
//         <p
//           className={
//             progressNumber >= 38
//               ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2"
//               : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
//           }
//         >
//           8
//         </p>
//       </div>
//     </div>
//     <div
//       className={openBar ? "absolute flex items-center justify-end h-fit  text-white w-[370px] transition-transform transform translate-x-0 duration-500 ease-in-out delay-150" :"absolute flex items-center justify-end h-fit  text-white w-[60px] transition-transform transform translate-x-0 duration-500 ease-in-out delay-150"}
//       onClick={setOpenBarHandler}
//     >
//       {openBar ? (
//         <HiChevronLeft className="w-5 h-5  bg-[#6b277c] rounded-full" />
//       ) : (
//         <HiChevronRight className="w-5 h-5  bg-[#6b277c] rounded-full" />
//       )}
//     </div>
//   </div>
// );
