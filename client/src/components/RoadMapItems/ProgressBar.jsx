import React, { useState } from "react";

export default function ProgressBar({ progressNumber }) {
  // const [progressNumber, setProgress] = useState([0,0])

  return (
    <div className="  flex flex-col justify-start items-center text-white text-sm md:mt-1 p-2 bg-[#c905faad] rounded-lg overflow-scroll no-scrollbar  max-h-[400px]">
      {/* Seccion 1 */}
      <p
        className={
          progressNumber >= 1
            ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 p-2 flex justify-center items-center"
            : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
        }
      >
        1
      </p>
      <div
        className={
          progressNumber >= 1 ? "border-2 border-[#00DFFD] w-1" : "border-2 w-1"
        }
      ></div>
      <div
        className={
          progressNumber >= 2
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 3
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 4
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 5
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 6
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 7
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 8
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 9
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 10
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>

      {/* Seccion 2 */}
      <p
        className={
          progressNumber >= 11
            ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2 p-2 "
            : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
        }
      >
        2
      </p>
      <div
        className={
          progressNumber >= 11
            ? "border-2 border-[#00DFFD] w-1"
            : "border-2 w-1"
        }
      ></div>
      <div
        className={
          progressNumber >= 12
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 13
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 14
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 15
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 16
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 17
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 18
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 19
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 20
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>

      {/* Seccion 3 */}
      <p
        className={
          progressNumber >= 21
            ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2  "
            : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
        }
      >
        3
      </p>
      <div
        className={
          progressNumber >= 21
            ? "border-2 border-[#00DFFD] w-1"
            : "border-2 w-1"
        }
      ></div>
      <div
        className={
          progressNumber >= 22
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 23
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 24
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 25
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 26
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 27
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>

      {/* Seccion 4 */}
      <p
        className={
          progressNumber >= 28
            ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2"
            : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
        }
      >
        4
      </p>
      <div
        className={
          progressNumber >= 28
            ? "border-2 border-[#00DFFD] w-1"
            : "border-2 w-1"
        }
      ></div>

      {/* Seccion 5 */}
      <p
        className={
          progressNumber >= 29
            ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2"
            : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
        }
      >
        5
      </p>
      <div
        className={
          progressNumber >= 29
            ? "border-2 border-[#00DFFD] w-1"
            : "border-2 w-1"
        }
      ></div>
      <div
        className={
          progressNumber >= 30
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 31
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 32
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 33
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      {/* //Seccion 6 */}
      <p
        className={
          progressNumber >= 34
            ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2"
            : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
        }
      >
        6
      </p>
      <div
        className={
          progressNumber >= 34
            ? "border-2 border-[#00DFFD] w-1"
            : "border-2 w-1"
        }
      ></div>

      {/* //Seccion 7 */}

      <p
        className={
          progressNumber >= 35
            ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2"
            : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
        }
      >
        7
      </p>
      <div
        className={
          progressNumber >= 35
            ? "border-2 border-[#00DFFD] w-1"
            : "border-2 w-1"
        }
      ></div>
      <div
        className={
          progressNumber >= 36
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>
      <div
        className={
          progressNumber >= 37
            ? "border-2 border-[#00DFFD] w-1 "
            : "border-2 w-1 "
        }
      ></div>

      {/* //Seccion 8 */}
      <p
        className={
          progressNumber >= 38
            ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2"
            : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
        }
      >
        8
      </p>
      <p
        className={
          progressNumber >= 38
            ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2"
            : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
        }
      >
        8
      </p>
      <p
        className={
          progressNumber >= 38
            ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2"
            : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
        }
      >
        8
      </p>
      <p
        className={
          progressNumber >= 38
            ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2"
            : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
        }
      >
        8
      </p>
      <p
        className={
          progressNumber >= 38
            ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2"
            : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
        }
      >
        8
      </p>
      <p
        className={
          progressNumber >= 38
            ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2"
            : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
        }
      >
        8
      </p>
      <p
        className={
          progressNumber >= 38
            ? "border-4 border-[#00DFFD] bg-[#00dffd5d] rounded-full w-8 h-8 flex justify-center items-center p-2"
            : "border-4 rounded-full w-8 h-8 flex justify-center items-center p-2"
        }
      >
        8
      </p>
    </div>
  );
}
