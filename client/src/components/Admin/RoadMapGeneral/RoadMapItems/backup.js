import React from "react";

export default function backup() {
  return (
    <div>
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
  );
}
