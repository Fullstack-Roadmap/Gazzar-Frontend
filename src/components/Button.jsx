import PropTypes from "prop-types";
import { IoIosArrowForward } from "react-icons/io";

const Button = ({ text, textColor, buttonColor, hasArrow }) => {
   const blue = "#083167";
  return (
    <button
      className={`
        px-8 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-all duration-700
      `}
      style={{
        backgroundColor: buttonColor,
        color: textColor,
        fontWeight: 500,
      }}
    >
      {text}
      {hasArrow && (
        <div>
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