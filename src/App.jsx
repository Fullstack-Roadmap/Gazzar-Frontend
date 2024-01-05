import React from "react";
import { useState } from "react";
import axios from "axios";
import "./css/App.css";

const App = () => {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const CreateVendor = (e) => {
    e.preventDefault();
    axios
      .post("https://gazzar-api.onrender.com/vendor/signup", {
        name,
        businessName,
        email,
        phone,
        password,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="px-[5vw] border-2 rounded-lg border-slate-200 text-[0.65rem] my-10 mx-24">
      <section className="rounded flex flex-col justify-center items-center gap-3 my-5">
        <h2 className="text-2xl font-bold text-center mb-3 w-full flex">
          <p>Create a Gazzar account</p>
        </h2>
        <form
          onSubmit={CreateVendor}
          className="flex flex-col items-center gap-3 w-full"
        >
          <div className="input-container">
            <p className="font-bold">Full name</p>
            <input
              type="text"
              className="input-form"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-container">
            <p className="font-bold">Business name</p>
            <input
              type="text"
              className="input-form"
              placeholder="Enter Business Name"
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </div>
          <div className="input-container">
            <p className="font-bold">Email</p>
            <input
              type="text"
              className="input-form"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <p className="font-bold">Phone</p>
            <input
              type="text"
              className="input-form"
              placeholder="Enter Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="input-container">
            <p className="font-bold">Password</p>
            <input
              type="password"
              className="input-form"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-container">
            <p className="font-bold">Re-enter Password</p>
            <input
              type="password"
              className="input-form"
              placeholder="Enter Password"
              onChange={(e) =>
                e.target.value === password
                  ? setPassword(e.target.value)
                  : console.log("Retry password entry")
              }
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
  );
};

export default App;
