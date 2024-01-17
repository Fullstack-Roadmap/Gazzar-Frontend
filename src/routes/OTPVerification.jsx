import React, { useState } from "react";
import Carousel from "../components/Carousel";
import OTPField from "../components/OTPField";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");

  const handleSubmit = () => {
    if (otp.length < 4) {
      setOtpError("Invalid input");
      return;
    }
    // Submit
  };
  return (
    <div className="lg:flex">
      <div className="relative w-1/2">
        <Carousel id="4" />
      </div>

      <div className="z-40 h-screen flex justify-center items-center lg:w-1/2 lg:px-12">
        <div className="flex justify-center px-[1rem] md:px-[2rem] sm:border-none border-2 rounded-lg border-slate-200 sm:text-[0.55rem] text-[0.65rem] my-10 sm:mx-6 w-[35rem] lg:w-[40rem] lg:h-auto lg:mx-6 py-6">
          <section className="flex flex-col justify-center items-center my-5 w-full">
            <h2 className="md:text-xl text-xl font-bold place-content-center mb-2 w-full flex md:mt-4">
              <p>OTP Verification</p>
            </h2>
            <span className="font-bold text-xs text-center">
              Please enter the OTP sent to email@website.com
            </span>
            <OTPField
              otpValue={(v) => {
                setOtp(v);
              }}
            />
            <footer className="p-4 font-bold text-xs text-slate-900/70 flex gap-1">
              Didn’t receive OTP ?
              <p className="text-blue font-extrabold cursor-pointer">Resend</p>
            </footer>
            <p className="text-red-700 font-bold">{otpError}</p>
            <div className="bg-blue text-white rounded-lg mt-10 w-[90%] font-bold flex justify-center p-1">
              <button
                className="w-full h-full p-3 text-sm"
                onClick={handleSubmit}
              >
                Proceed
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
