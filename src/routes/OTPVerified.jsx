import Carousel from ".components/Carousel";
import OTPSuccessImage from "../components/OTPSuccessImage";
// Thank you for registering with Gazzar.
// Your will be notified once your account has been successfully verified
const OTPVerified = () => {
  return (
    <div className="lg:flex">
      <div className="relative w-1/2">
        <Carousel id="5" />
      </div>
      <div className="z-40 h-screen flex justify-center items-center lg:w-1/2 lg:px-12">
        <div className="flex justify-center px-[1rem] md:px-[2rem] sm:border-none border-2 rounded-lg border-slate-200 sm:text-[0.55rem] text-[0.65rem] my-10 sm:mx-6 w-[35rem] lg:w-[40rem] lg:h-auto py-8 lg:mx-6">
          <section
            className="flex 
          flex-col justify-center items-center my-4"
          >
            <div>
              <OTPSuccessImage />
            </div>
            <span className="text-xs font-semibold text-center w-3/4">
              Thank you for registering with Gazzar.
              <p>
                You will be notified once your account has been successfully
                verified
              </p>
            </span>
            <div className="bg-blue text-white rounded-lg mt-10 w-full font-bold flex justify-center p-1">
              <button className="w-full h-full p-3 text-sm">Done</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OTPVerified;
