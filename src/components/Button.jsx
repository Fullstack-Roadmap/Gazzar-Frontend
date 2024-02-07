import PropTypes from "prop-types";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const Button = ({
  text,
  textBlue,
  textLarge,
  buttonColor,
  hasArrow,
  hasBorder,
  borderWhite,
  customClasses,
}) => {
  const blue = "#083167";
  const [isHover, setIsHover] = useState(false);

  const toggleHover = () => {
    setIsHover((current) => !current);
  };
  return (
    <div className="text-white">
    <button
      onMouseOver={toggleHover}
      onMouseLeave={toggleHover}
      className={`
${hasBorder && "border-2 border-blue"}
${textBlue && "text-blue"} 
${textLarge && "text-2xl py-5"} 
${borderWhite && "border-2 border-white"}
${customClasses && `${customClasses}`}
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
    </button></div>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  textBlue: PropTypes.string,
  textLarge: PropTypes.string,
  buttonColor: PropTypes.string,
  hasArrow: PropTypes.bool,
  hasBorder: PropTypes.bool,
  borderWhite: PropTypes.bool,
  customClasses: PropTypes.string,
};

Button.defaultProps = {
  textColor: "white",
  buttonColor: "transparent",
  hasArrow: false,
  hasBorder: true,
  borderWhite: false,
  customClasses: false,
};

export default Button;
