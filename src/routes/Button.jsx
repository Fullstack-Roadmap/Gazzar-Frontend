import PropTypes from "prop-types";
import { IoIosArrowForward } from "react-icons/io";

const Button = ({ text, textColor, buttonColor, hasArrow }) => {
   const blue = "#083167";
  return (
    <button
      className={`
        px-6 py-3 rounded-lg flex
      `}
      style={{
        backgroundColor: buttonColor,
         color: textColor,
        fontWeight: 600,
      }}
    >
      {text}
      {hasArrow && (
        <IoIosArrowForward/>
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
