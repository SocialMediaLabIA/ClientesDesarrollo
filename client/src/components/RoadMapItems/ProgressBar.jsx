import React, { useState } from "react";

export default function ProgressBar({ progress }) {
  console.log(progress);
  // const [progress, setProgress] = useState([0,0])

  return (
    <div className="w-full flex justify-center items-center text-white mt-10">
      <p
        className={
          progress >= 1
            ? "border-4 border-green-500 rounded-full w-10 h-10 flex justify-center items-center"
            : "border-4 rounded-full w-10 h-10 flex justify-center items-center"
        }
      >
        1
      </p>
      <div
        className={
          progress >= 1 ? "border-2 border-green-500 w-2" : "border-2 w-2"
        }
      ></div>
      <div
        className={
          progress >= 2
            ? "border-2 border-green-500 w-2 m-1"
            : "border-2 w-2  m-1"
        }
      ></div>
      <div
        className={
          progress >= 3 ? "border-2 border-green-500 w-2" : "border-2 w-2"
        }
      ></div>
      <p
        className={
          progress >= 4
            ? "border-4 border-green-500 rounded-full w-10 h-10 flex justify-center items-center"
            : "border-4 rounded-full w-10 h-10 flex justify-center items-center"
        }
      >
        2
      </p>
      <div
        className={
          progress >= 4 ? "border-2 border-green-500 w-2" : "border-2 w-2"
        }
      ></div>
      <div
        className={
          progress >= 5
            ? "border-2 border-green-500 w-2 m-1"
            : "border-2 w-2  m-1"
        }
      ></div>
      <div
        className={
          progress >= 6 ? "border-2 border-green-500 w-2" : "border-2 w-2"
        }
      ></div>
      <p
        className={
          progress >= 7
            ? "border-4 border-green-500 rounded-full w-10 h-10 flex justify-center items-center"
            : "border-4 rounded-full w-10 h-10 flex justify-center items-center"
        }
      >
        3
      </p>
      <div
        className={
          progress >= 7 ? "border-2 border-green-500 w-2" : "border-2 w-2"
        }
      ></div>
      <div
        className={
          progress >= 8
            ? "border-2 border-green-500 w-2 m-1"
            : "border-2 w-2  m-1"
        }
      ></div>
      <div
        className={
          progress >= 9 ? "border-2 border-green-500 w-2" : "border-2 w-2"
        }
      ></div>
      <p
        className={
          progress >= 10
            ? "border-4 border-green-500 rounded-full w-10 h-10 flex justify-center items-center"
            : "border-4 rounded-full w-10 h-10 flex justify-center items-center"
        }
      >
        4
      </p>
      <div
        className={
          progress >= 10 ? "border-2 border-green-500 w-2" : "border-2 w-2"
        }
      ></div>
      <div
        className={
          progress >= 11
            ? "border-2 border-green-500 w-2 m-1"
            : "border-2 w-2  m-1"
        }
      ></div>
      <div
        className={
          progress >= 12 ? "border-2 border-green-500 w-2" : "border-2 w-2"
        }
      ></div>
      <p
        className={
          progress >= 13
            ? "border-4 border-green-500 rounded-full w-10 h-10 flex justify-center items-center"
            : "border-4 rounded-full w-10 h-10 flex justify-center items-center"
        }
      >
        5
      </p>

     
    </div>
  );
}
