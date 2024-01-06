import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import React from "react";
import Register from "./pages/Register";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Register />}></Route>)
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
