import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import "../css/App.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const Register = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    businessName: yup.string().required(),
    phone: yup.number().positive().min(10).max(10).required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });
  const { register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema),
  });

  const CreateVendor = (data) => {
    console.log(data);
    // e.preventDefault();
    // axios
    //   .post("https://gazzar-api.onrender.com/vendor/signup", {
    //     name,
    //     businessName,
    //     email,
    //     phone,
    //     password,
    //   })
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="h-screen flex justify-center items-center w-full">
      <div className="px-[2rem] sm:border-none border-2 rounded-lg border-slate-200 sm:text-[0.55rem] text-[0.65rem] my-10 mx-24 w-[30rem]">
        <section className="rounded flex flex-col justify-center items-center gap-3 my-5">
          <h2 className="text-2xl font-bold text-center mb-3 w-full flex">
            <p>Create a Gazzar account</p>
          </h2>
          <form
            onSubmit={handleSubmit(CreateVendor)}
            className="flex flex-col items-center gap-3 w-full"
          >
            <div className="input-container">
              <div className="flex justify-between">
                <p className="font-bold">Full name</p>
                <p className="text-red-600">
                  {errors.name
                    ? <p>{errors.name.message}</p>
                    : ""}</p>
              </div>
              <input
                type="text"
                className="input-form"
                placeholder="Enter Name"
                {...register("name")}
              />
            </div>

            <div className="input-container">
              <p className="font-bold">Business name</p>
              <input
                type="text"
                className="input-form"
                placeholder="Enter Business Name"
                {...register("businessName")}
              />
            </div>
            <div className="input-container">
              <p className="font-bold">Email</p>
              <input
                type="text"
                className="input-form"
                placeholder="Enter Email"
                {...register("email")}
              />
            </div>
            <div className="input-container">
              <p className="font-bold">Phone</p>
              <div className="w-full flex items-stretch ">
                <span className="text-white px-3 translate-y-[2px] flex justify-center items-center bg-blue-900 border-slate-200 rounded-l-lg">
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
              <p className="font-bold">Password</p>
              <input
                type="password"
                className="input-form"
                placeholder="Enter Password"
                {...register("password")}
              />
            </div>
            <div className="input-container">
              <p className="font-bold">Re-enter Password</p>
              <input
                type="password"
                className="input-form"
                placeholder="Enter Password"
                {...register("confirmPassword")}
              />
            </div>
            <button className="bg-blue-900 text-white rounded-lg mt-6 p-3 w-full font-bold">
              Sign up
            </button>
          </form>
          <footer className="font-semibold">
            <span>Already have an account? </span>
            <span className="text-blue-900 font-bold">Sign in</span>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default Register;
