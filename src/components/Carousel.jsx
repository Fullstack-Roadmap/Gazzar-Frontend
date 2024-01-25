import React from "react";
import { useState } from "react";
import Address from "./Address";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Carousel = ({ id }) => {
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
  const style = { color: "white", fontSize: "1.5rem"};
  return (
    <>
      <span
        onClick={toggleViewBackward}
        className="top-1/2 absolute z-40 bg-transparent rounded-full w-10 h-10 left-5 cursor-pointer flex justify-center items-center hover:scale-125 hover:-translate-x-1 transition-all duration-300 ease-in-out"
      >
        <IoIosArrowBack style={style} className="arrows" />
      </span>
      <span
        onClick={toggleViewForward}
        className="absolute z-40 bg-transparent rounded-full w-10 h-10 top-1/2 right-5 cursor-pointer flex justify-center items-center hover:scale-125 hover:translate-x-1 transition-all duration-300 ease-in-out"
      >
        <IoIosArrowForward style={style} className="arrows" />
      </span>
      {id === "5" && (
        <div className="z-50 md:hidden sm:hidden ipad:hidden lg:flex absolute slide1">
          <Address id={id} />
        </div>
      )}
      {id === "4" ? (
        <div className="z-50 md:hidden sm:hidden lg:flex absolute slide1">
          <Address id={id} />
        </div>
      ) : (
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
            className={`${
              inView == 3
                ? "opacity-100 duration-300 mr-0"
                : "opacity-0 duration-50"
            } transition-all ease-in-out mr-12 z-30 absolute slide3`}
          >
            <Address id="3" />
          </div>
          <div className="absolute z-40 bottom-16">
            <div className="flex gap-1 w-full justify-center">
              <span
                onClick={() => setInView(1)}
                className={`${
                  inView == 1 ? "w-7 bg-white" : "bg-slate-200/40"
                } h-2 w-2 transition-all duration-200 rounded-full cursor-pointer`}
              ></span>
              <span
                onClick={() => setInView(2)}
                className={`${
                  inView == 2 ? "w-7 bg-white" : "bg-slate-200/40"
                } h-2 w-2 transition-all duration-200 rounded-full cursor-pointer`}
              ></span>
              <span
                onClick={() => setInView(3)}
                className={`${
                  inView == 3 ? "w-7 bg-white" : "bg-slate-200/40"
                } h-2 w-2 transition-all duration-200 rounded-full cursor-pointer`}
              ></span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
