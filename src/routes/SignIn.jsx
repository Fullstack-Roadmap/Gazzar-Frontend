import { yupResolver } from "@hookform/resolvers/yup";
import "../css/styles.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

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

  const signInUser = async (form, e) => {
    const rest = form;
    try {
      console.log("recieved form by: " + form.email);
      await axios
        .post("https://gazzar-api.onrender.com/v1/auth/signin", rest)
        .then((response) => {
          console.log("posted form");
          navigate("/", { state: { status: "You're Signed In" } });
          console.log(response.data.message);
        });
    } catch (error) {
      if (error) {
        setMessage("Email or password incorrect");
        console.error(error.response.data);
      }
    }
    e.preventDefault();
  };
  return (
    <div className="h-screen flex lg:justify-between justify-center items-center w-screen">
      <div className="md:hidden sm:hidden lg:inline-block relative w-1/2">
        <Carousel />
      </div>
      <div className="z-20 h-screen flex justify-center items-center lg:w-1/2 lg:px-12 md:w-full sm:w-full">
        <div className="flex justify-center px-[1rem] md:px-[2rem] sm:border-none border-2 rounded-lg border-slate-200 sm:text-[0.55rem] text-[0.65rem] my-10 sm:mx-6 w-[35rem] md:w-[40rem] md:h-auto lg:h-auto py-8 lg:mx-8">
          <section className="flex flex-col justify-center items-center gap-3 md:gap-5 my-5 w-full lg:px-4">
            <h2 className="md:text-5xl text-3xl font-bold text-center mb-6 w-full flex md:mt-4">
              <p>Welcome</p>
            </h2>
            <form
              onSubmit={handleSubmit(signInUser)}
              className="flex flex-col items-center gap-3 md:gap-5 w-full font-extrabold text-sm"
            >
              <div className="input-container">
                <div className="flex justify-between">
                  <p>Email</p>
                  <p className="text-red-600 font-normal">
                    {errors.email?.message}
                  </p>
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
                  <p className="text-red-600 font-normal">
                    {errors.password?.message}
                  </p>
                </div>
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
                    className=" bg-slate-200 w-4 h-4 cursor-pointer flex items-center"
                  />
                  <span className="text-gray-400 font-normal">Remember me</span>
                </div>
                <span className="text-blue font-extrabold">
                  <Link to="/signin">Forgot your password?</Link>
                </span>
              </div>
              <div className="text-xs w-full text-red-700 text-center">
                {message}
              </div>
              <div className="bg-blue text-white rounded-lg mt-6 w-full font-bold flex justify-center">
                <button className="w-full cursor-pointer p-5">Sign in</button>
              </div>
            </form>
            <footer className="text-xs text-slate-900/70 font-bold mt-2">
              <span>Don't have an account? </span>
              <span className="text-blue font-extrabold">
                <Link to="/register">Sign up</Link>
              </span>
            </footer>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
