import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import "../css/styles.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";

const Register = () => {
  const schema = yup.object().shape({
    name: yup.string().required("required"),
    businessName: yup.string().required("required"),
    phone: yup
      .number()
      .positive()
      .typeError("invalid input")
      .required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup
      .string()
      .min(4, "use at least 4 characters")
      .required("required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "passwords don't match")
      .required("required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const createVendor = (form, e) => {
    const { confirmPassword, ...rest } = form;
    console.log(rest);
    e.preventDefault();
    axios
      .post("https://gazzar-api.onrender.com/signup", rest)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-screen flex justify-center items-center w-full">
      <div className="px-[1rem] md:px-[2rem] sm:border-none border-2 rounded-lg border-slate-200 sm:text-[0.55rem] text-[0.65rem] my-10 sm:mx-6 w-[35rem] md:w-[40rem] md:h-[40rem]">
        <section className="flex flex-col justify-center items-center gap-3 md:gap-4 my-5">
          <h2 className="text-3xl font-bold text-center mb-3 w-full flex md:mt-4">
            <p>Create a Gazzar account</p>
          </h2>
          <form
            onSubmit={handleSubmit(createVendor)}
            className="flex flex-col items-center gap-3 w-full"
          >
            <div className="input-container">
              <div className="flex justify-between">
                <p className="font-bold">Full name</p>
                <p className="text-red-600">{errors.name?.message}</p>
              </div>
              <input
                type="text"
                className="input-form"
                placeholder="Enter Name"
                {...register("name")}
              />
            </div>

            <div className="input-container">
              <div className="flex justify-between">
                <p className="font-bold">Business Name</p>
                <p className="text-red-600">{errors.businessName?.message}</p>
              </div>
              <input
                type="text"
                className="input-form"
                placeholder="Enter Business Name"
                {...register("businessName")}
              />
            </div>
            <div className="input-container">
              <div className="flex justify-between">
                <p className="font-bold">Email</p>
                <p className="text-red-600">{errors.email?.message}</p>
              </div>
              <input
                type="text"
                className="input-form"
                placeholder="Enter Email"
                {...register("email")}
              />
            </div>
            <div className="input-container">
              <div className="flex justify-between">
                <p className="font-bold">Phone</p>
                <p className="text-red-600">{errors.phone?.message}</p>
              </div>
              <div className="w-full flex items-stretch ">
                <span className="text-white px-3 translate-y-[2px] flex justify-center items-center bg-blue border-slate-200 rounded-l-lg">
                  +234
                </span>
                <input
                  type="text"
                  className="py-2 outline outline-slate-200 outline-2 rounded-r-lg px-4 mt-1 w-full"
                  placeholder="Enter Phone"
                  {...register("phone")}
                />
              </div>
            </div>
            <div className="input-container">
              <div className="flex justify-between">
                <p className="font-bold">Password</p>
                <p className="text-red-600">{errors.password?.message}</p>
              </div>{" "}
              <input
                type="password"
                className="input-form"
                placeholder="Enter Password"
                {...register("password")}
              />
            </div>
            <div className="input-container">
              <div className="flex justify-between">
                <p className="font-bold">Confirm Password</p>
                <p className="text-red-600">
                  {errors.confirmPassword?.message}
                </p>
              </div>
              <input
                type="password"
                className="input-form"
                placeholder="Enter Password"
                {...register("confirmPassword")}
              />
            </div>
            <div className="bg-blue text-white rounded-lg mt-6 p-3 w-full font-bold flex justify-center">
              <Link to="/signin">
                <button>Sign up</button>
              </Link>
            </div>
          </form>
          <footer className="font-semibold">
            <span>Already have an account? </span>
            <span className="text-blue font-bold">Sign in</span>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default Register;
