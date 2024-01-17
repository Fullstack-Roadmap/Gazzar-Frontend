import React, { useMemo, useRef, useState } from "react";

const OTPField = ({ numberOfInputs = 4, otpValue }) => {
  const [otpArr, setOtpArr] = useState([]);
  const numOfInputsArr = useMemo(
    () => Array(numberOfInputs).fill(0),
    [numberOfInputs]
  );

  const refs = numOfInputsArr.map(() => useRef(null));

  const handleKeyDown = (i) => (e) => {
    switch (e.key.toLowerCase()) {
      case "delete":
      case "backspace":
        e.preventDefault();
        e.target.value = "";
        setOtpArr((arr) => {
          arr[i] = "";
          return arr;
        });
        refs[i - 1]?.current?.focus();
        break;
      case "arrowleft":
        refs[i - 1]?.current?.focus();
        break;
      case "arrowright":
        refs[i + 1]?.current?.focus();
        break;
      default:
        break;
    }
    

    otpValue(otpArr.join(""));
  };

  const handleChange = (i) => (e) => {
    setOtpArr((arr) => {
      arr[i] = e.target.value;
      return arr;
    });

    if (e.target.value.length === 1) {
      if (refs[i + 1]?.current) {
        refs[i + 1]?.current?.focus();
      }
    }

    // Let the parent element know the OTP value
    otpValue(otpArr.join(""));
  };

  return (
    <form className="flex flex-col items-center gap-3 md:gap-5 w-full font-extrabold">
      <div className="mt-8 flex justify-center items-center gap-4 w-full">
        {numOfInputsArr.map((_, i) => {
          return (
            <input
              key={i}
              ref={refs[i]}
              onChange={handleChange(i)}
              type="text"
              className="h-16 w-16 rounded-lg border-2 border-slate-900/10 text-center text-4xl font-semibold"
              maxLength={1}
              onKeyDown={handleKeyDown(i)}
            />
          );
        })}
      </div>
    </form>
  );
};

export default OTPField;
