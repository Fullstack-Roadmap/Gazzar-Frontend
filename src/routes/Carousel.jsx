import React from "react";
import { useState } from "react";
import Address from "./Address";

const Carousel = () => {
  const [inView, setInView] = useState(1);

  const toggleViewForward = () => {
    if (inView == 3) {
      setInView(1);
    } else if (inView == 2) {
      setInView(3);
    } else {
      setInView(2);
    }
  };
  const toggleViewBackward = () => {
    if (inView == 3) {
      setInView(2);
    } else if (inView == 2) {
      setInView(1);
    } else {
      setInView(3);
    }
  };
  return (
    <>
      <span
        onClick={toggleViewBackward}
        className="top-1/2 absolute z-40 bg-white rounded-full w-5 h-5 left-5 cursor-pointer"
      ></span>
      <span
        onClick={toggleViewForward}
        className="absolute z-40 bg-white rounded-full w-5 h-5 top-1/2 right-5 cursor-pointer"
      ></span>
      <div className="relative bg-blue lg:flex justify-center z-20 h-screen overflow-hidden md:hidden sm:hidden">
        <div
          className={`${
            inView == 1
              ? "opacity-100 duration-300 mr-0"
              : "opacity-0 duration-50"
          } transition-all ease-in-out mr-12 z-30 absolute slide1`}
        >
          <Address id="1" />
        </div>
        <div
          className={`${
            inView == 2
              ? "opacity-100 duration-300 mr-0"
              : "opacity-0 duration-50"
          } transition-all ease-in-out mr-12 z-30 absolute slide2`}
        >
          <Address id="2" />
        </div>
        <div
          className={` ${
            inView == 3
              ? "opacity-100 duration-300 mr-0"
              : "opacity-0 duration-50"
          } transition-all ease-in-out mr-12 z-30 absolute slide3`}
        >
          <Address id="3" />
        </div>
        <div className="absolute z-40 bottom-10">
          <div className="flex gap-1 w-full justify-center">
            <span
              className={`${
                inView == 1 ? "w-5 bg-white" : "bg-slate-200/40"
              } h-2 w-2 transition-all duration-200 rounded-full `}
            ></span>
            <span
              className={`${
                inView == 2 ? "w-5 bg-white" : "bg-slate-200/40"
              } h-2 w-2 transition-all duration-200 rounded-full `}
            ></span>
            <span
              className={`${
                inView == 3 ? "w-5 bg-white" : "bg-slate-200/40"
              } h-2 w-2 transition-all duration-200 rounded-full `}
            ></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
