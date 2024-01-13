import PropTypes from "prop-types";

const Button = ({ text, textColor, buttonColor, hasArrow }) => {
   const blue = "#083167";
  return (
    <button
      className={`
        px-[1.1rem] py-[0.45rem] rounded-md z text-[0.55rem] md:text-[0.7rem] border border-blue flex
      `}
      style={{
        backgroundColor: buttonColor,
        color: textColor,
        borderRadius: "2rem",
      }}
    >
      {text}
      {hasArrow && (
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          className="pl-[0.5rem]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.2929 12.2929C9.90237 12.6834 9.90237 13.3166 10.2929 13.7071C10.6834 14.0976 11.3166 14.0976 11.7071 13.7071L17.7071 7.70711C18.0976 7.31658 18.0976 6.68342 17.7071 6.29289L11.7071 0.292893C11.3166 -0.097632 10.6834 -0.0976321 10.2929 0.292893C9.90237 0.683417 9.90237 1.31658 10.2929 1.70711L14.5858 6L1 6C0.447716 6 6.60242e-07 6.44771 6.1196e-07 7C5.63677e-07 7.55228 0.447716 8 1 8L14.5858 8L10.2929 12.2929Z"
            fill="white"
          />
        </svg>
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
