import PropTypes from "prop-types";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const Button = ({
  text,
  textLarge,
  buttonColor,
  hasArrow,
  hasBorder,
  textBlue,
}) => {
  const blue = "#083167";
  const [isHover, setIsHover] = useState(false);

  const toggleHover = () => {
    setIsHover((current) => !current);
  };
  return (
    <button
      onMouseOver={toggleHover}
      onMouseLeave={toggleHover}
      className={` ${hasBorder && " border-[1px] border-blue"}
${textBlue ? "text-blue" : "text-white"} 
${textLarge && "text-2xl py-5"} 
      px-8 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-all duration-700
      `}
      style={{
        backgroundColor: buttonColor,
        fontWeight: 600,
      }}
    >
      {text}
      {hasArrow && (
        <div
          className={`transition-all duration-500 ${
            isHover && "translate-x-2"
          }`}
        >
          <IoIosArrowForward />
        </div>
      )}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  buttonColor: PropTypes.string,
  hasArrow: PropTypes.bool,
};

Button.defaultProps = {
  textColor: "white",
  buttonColor: "green",
  hasArrow: false,
};

export default Button;
