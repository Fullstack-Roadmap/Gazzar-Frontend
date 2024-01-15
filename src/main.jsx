import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/styles.css";
import Register from "./routes/Register";
import SignIn from "./routes/SignIn.jsx";
import OTPVerification from "./routes/OTPVerification.jsx";
import OTPVerified from "./routes/OTPVerified.jsx";
import LandingPage from "./routes/LandingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/otp-verification",
    element: <OTPVerification />,
  },
  {
    path: "/otp-verified",
    element: <OTPVerified />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
