import { FaCheck } from "react-icons/fa6";

const OTPSuccessImage = () => {
  const style = { color: "white", fontSize: "4.5rem" };
  return (
    <div className="relative w-60 h-60 flex justify-center items-center">
      <div className="absolute animated bg-blue/30 h-52 w-52 rounded-full z-10"></div>
      <div className="absolute animated bg-blue/50 h-40 w-40 rounded-full z-20"></div>
      <div className="absolute flex justify-center items-center bg-blue h-28 w-28 rounded-full z-30">
        <FaCheck style={style} />
      </div>
    </div>
  );
};

export default OTPSuccessImage;
