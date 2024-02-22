import { Link } from "react-router-dom";
import {useState} from 'react';
import {FaBarsStaggered} from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import Button from "./Button";
import {SidebarData} from './SidebarData';

const Navbar = () => {
  const blue = "#083167";
  const lightBlue = "#1B73D326";
  
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <nav className="lg:flex items-center py-6 px-8 mid:rounded-3xl rounded-none shadow-none border-b border-[#EAECF0] h-fit mid:shadow-custom justify-between text-lg absolute top-12 mid:top-16 left-10 right-10 bg-white">
      <section className="flex justify-between items-center">
        <header className="sml:text-2xl text-xl font-extrabold flex items-center gap-2 h-fit">
          <span className="mr-1 rounded-md aspect-square sml:h-8 h-7 bg-[#FFB722]"></span>
          <p>Gazzar.</p>
        </header>
        <div className="flex lg:hidden">
          <Link to="#" className="menu-bars sml:text-2xl text-xl bg-none color text-black">
            <FaBarsStaggered onClick={showSidebar}/>
          </Link>
        </div>
      </section>
      <section className="lg:flex lg:flex-row lg:border-0 lg:mx-2 lg:mt-0 lg:pt-0 gap-6 mt-4 pt-4 border-t border-[#EAECF0] items-center justify-center hidden flex-col relative" id="options">
        <p>Features</p>
        <p>Company</p>
        <p>Pricing</p>
        <p>Learn</p>
      </section>
      <nav className={sidebar ? "nav-menu active bg-white w-[250px] h-screen flex justify-center fixed top-0 right-0 duration-[450ms]" : "nav-menu fixed top-0 right-[-100%] duration-[850ms]"}>
        <ul className="nav-menu-items mt-12 w-full" onClick={showSidebar}>
          <li className="navbar-toggle bg-white w-full h-[80px] flex justify-start items-center">
              <Link to="#" className="menu-bars ml-8 sml:text-3xl text-2xl bg-none color text-black">
              <CgClose />
              </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={`${item.cName} flex justify-start items-center py-2 pl-4 h-[60px] list-none`}>
                <Link className="text-[#151414] text-[18px]w-[95%] h-full flex items-center px-4 rounded hover:bg-[#083167] hover:text-white" to={item.path}>
                    <span className="ml-4">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <section className="gap-4 items-center font-semibold flex justify-end">
        <div className="hidden lg:flex">
          <Link to="signin">
            <Button text="Login" buttonColor={lightBlue} textBlue={true} hasBorder=
              { false} />
          </Link>
        </div>
        <div className="hidden lg:flex">
          <Link to="register">
            <Button text="Get Started" buttonColor={blue} />
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;