
// import SignIn from "./pages/SignIn";
// import Register from "./pages/Register";
// import LandingPage from "./pages/LandingPage";



const App = () => {
  return (
    <>
    </>
  );
};

const Root = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen gap-[20vw] text-blue font-bold text-2xl">
        <Link to="/register"> Register Business </Link>
        <Link to="/signin"> Sign In </Link>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
