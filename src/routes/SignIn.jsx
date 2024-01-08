import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import "../css/styles.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const schema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup
      .string()
      .min(4, "use at least 4 characters")
      .required("required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });
  const signInUser = (form, e) => { 
    console.log(form + "Successfully validated Data");
    e.preventDefault();
  };
  return (
    <div className="h-screen flex justify-center items-center w-full">
      <div className="px-[1rem] md:px-[3.3rem] sm:border-none border-2 rounded-lg border-slate-200 sm:text-xs text-lg my-10 sm:mx-6 w-[35rem] md:w-[40rem] md:h-[36rem] flex justify-center items-center">
        <section className="flex flex-col justify-center items-center gap-3 md:gap-5 my-5 w-full">
          <h2 className="md:text-5xl text-3xl font-bold text-center mb-6 w-full flex md:mt-4">
            <p>Welcome</p>
          </h2>
          <form
            onSubmit={handleSubmit(signInUser)}
            className="flex flex-col items-center gap-3 md:gap-5 w-full font-extrabold"
          >
            <div className="input-container">
              <div className="flex justify-between">
                <p>Email</p>
                <p className="text-red-600">{errors.email?.message}</p>
              </div>
              <input
                type="text"
                className="input-form placeholder:font-normal placeholder:opacity-40"
                placeholder="Enter Email"
                {...register("email")}
              />
            </div>
            <div className="input-container">
              <div className="flex justify-between">
                <p>Password</p>
                <p className="text-red-600">{errors.password?.message}</p>
              </div>{" "}
              <input
                type="password"
                className="input-form placeholder:font-normal placeholder:opacity-40"
                placeholder="Enter Password"
                {...register("password")}
              />
            </div>
            <div className="w-full flex justify-between">
              <div className="flex gap-1 items-center">
                <input
                  type="check-box"
                  className=" bg-slate-200 w-3 h-3 cursor-pointer flex items-center"
                />
                <span className="text-gray-400 font-normal">Remember me </span>
              </div>
              <span className="text-blue font-extrabold">
                <Link to="/signin">Forgot your password?</Link>
              </span>
            </div>
            <div className="bg-blue text-white rounded-lg mt-6 p-3 w-full font-bold flex justify-center">
              <button>Sign up</button>
            </div>
          </form>
          <footer className="font-bold">
            <span>Don't have an account? </span>
            <span className="text-blue font-extrabold">
              <Link to="/register">Sign up</Link>
            </span>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default SignIn;
