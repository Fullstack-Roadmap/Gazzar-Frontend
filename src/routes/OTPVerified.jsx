import Carousel from "./Carousel";
// Thank you for registering with Gazzar.
// Your will be notified once your account has been successfully verified
const OTPVerified = () => {
  return (
    <div className="lg:flex">
      <div className="relative w-1/2">
        <Carousel id="4" />
      </div>
      <div className="z-40 h-screen flex justify-center items-center lg:w-1/2 lg:px-12">
        <div className="flex justify-center px-[1rem] md:px-[2rem] sm:border-none border-2 rounded-lg border-slate-200 sm:text-[0.55rem] text-[0.65rem] my-10 sm:mx-6 w-[35rem] lg:w-[40rem] lg:h-auto">
          <section className="flex flex-col justify-center items-center my-5">
            <span className="text-sm font-bold text-center">
              Thank you for registering with Gazzar.
              <p>
                You will be notified once your account has been successfully
                verified
              </p>
            </span>
            <form className="flex flex-col items-center gap-3 md:gap-5 w-full font-extrabold">
              <div className="bg-blue text-white rounded-lg mt-10 w-full font-bold flex justify-center p-1">
                <button className="w-full h-full p-3 text-sm">Proceed</button>
              </div>
            </form>
            <footer className="p-4 font-bold text-sm text-slate-900/70 flex gap-1">
              Didn’t receive OTP ?
              <p className="text-blue font-extrabold cursor-pointer">Resend</p>
            </footer>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OTPVerified;
