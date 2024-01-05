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
    <div>
      <section></section>
      <section className="flex flex-col justify-center items-center bg-slate-300 p-20 gap-3">
        <h2 className="text-blue-800 text-3xl font-bold text-center">
          Testing Database Querying
          <div className="text-blue-700/50 mt-1 text-xl">
            (For SignUp Functionality)
          </div>
        </h2>
        <form
          onSubmit={CreateVendor}
          className="flex flex-col items-center gap-2"
        >
          <input
            type="text"
            className="p-3 focus:outline-none rounded-md"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="p-3 focus:outline-none rounded-md"
            placeholder="Enter Business Name"
            onChange={(e) => setBusinessName(e.target.value)}
          />

          <input
            type="text"
            className="p-3 focus:outline-none rounded-md"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            className="p-3 focus:outline-none rounded-md"
            placeholder="Enter Phone"
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="password"
            className="p-3 focus:outline-none rounded-md"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-blue-900 text-white rounded-lg w-[70%] mt-2 p-3">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default App;
