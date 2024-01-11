import React from "react";
import Carousel from "./Carousel";

const OTPVerification = () => {
  return (
    <div className="lg:flex">
      <div className="relative w-1/2">
        <Carousel id="4" />
      </div>
      <div className="z-40 h-screen flex justify-center items-center lg:w-1/2 lg:px-12">
        <div className="flex justify-center px-[1rem] md:px-[2rem] sm:border-none border-2 rounded-lg border-slate-200 sm:text-[0.55rem] text-[0.65rem] my-10 sm:mx-6 w-[35rem] lg:w-[40rem] lg:h-auto">
          <section className="flex flex-col justify-center items-center my-5">
            <h2 className="md:text-3xl text-3xl font-bold place-content-center mb-2 w-full flex md:mt-4">
              <p>OTP Verification</p>
            </h2>
            <span className="text-lg font-bold text-center">
              Please enter the OTP sent to email@website.com
            </span>
            <form className="flex flex-col items-center gap-3 md:gap-5 w-full font-extrabold">
              <div className="mt-8 flex gap-3">
                <input
                  type="text"
                  className="h-16 w-16 rounded-lg border-2 border-slate-900/10 text-center text-4xl font-semibold"
                />
                <input
                  type="text"
                  className="h-16 w-16 rounded-lg border-2 border-slate-900/10 text-center text-4xl font-semibold"
                />
                <input
                  type="text"
                  className="h-16 w-16 rounded-lg border-2 border-slate-900/10 text-center text-4xl font-semibold"
                />
                <input
                  type="text"
                  className="h-16 w-16 rounded-lg border-2 border-slate-900/10 text-center text-4xl font-semibold"
                />
              </div>
              <div className="bg-blue text-white rounded-lg mt-10 w-full font-bold flex justify-center p-1">
                <button className="w-full h-full p-3 text-sm">Proceed</button>
              </div>
            </form>
            <footer className="p-4 font-bold text-sm text-slate-900/70 flex gap-1">
              Didn’t receive OTP ?<p className="text-blue font-extrabold cursor-pointer">Resend</p>
            </footer>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
