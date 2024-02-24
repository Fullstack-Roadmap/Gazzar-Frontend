import book from "../assets/svgs/book.svg";
import ellipses from "../assets/svgs/ellipses.svg";
import link from "../assets/svgs/link.svg";
import bell from "../assets/svgs/bell.svg";
import shop from "../assets/svgs/shop.svg";
import overview from "../assets/svgs/overview.svg";
const Dashboard = () => {
  return (
    <div className="flex h-full">
      <section className="h-full border-r-[1px] border-b-[1px] rounded-md border-gray">
        <header className="text-[1.375rem] font-extrabold flex items-center gap-2 m-16 -translate-x-5">
          <span className="mr-1 rounded-md aspect-square h-8 bg-[#FFB722] "></span>
          <p>Gazzar.</p>
        </header>
        <ul className="flex flex-col gap-1 items-start h-full px-4">
          <li className="flex items-center gap-2 pl-7 py-5 w-full text-black/70 text-sm font-semibold bg-gray rounded-lg">
            <img src={overview} alt="" />
            Overview
          </li>
          <li className="px-10 py-5 mx-5 rounded-lg  text-black/70 text-md font-semibold">
            Statistics
          </li>
          <li className="px-10 py-5 mx-5 rounded-lg  text-black/70 text-md font-semibold">
            Products
          </li>
          <li className="px-10 py-5 mx-5 rounded-lg  text-black/70 text-md font-semibold">
            Customers
          </li>
          <li className="px-10 py-5 mx-5 rounded-lg  text-black/70 text-md font-semibold">
            Feedback
          </li>
          <li className="px-10 py-5 mx-5 rounded-lg  text-black/70 text-md font-semibold">
            Orders
          </li>
          <li className="px-10 py-5 mx-5 rounded-lg  text-black/70 text-md font-semibold">
            Store
          </li>
          <li className="px-10 py-5 mx-5 rounded-lg  text-black/70 text-md font-semibold">
            Profile
          </li>
        </ul>
      </section>
      <section className="w-full">
        <nav className="flex justify-between items-center border-b-[1px] border-gray px-10 py-6">
          <span className="font-extrabold text-3xl">Overview</span>
          <nav className="flex gap-4">
            <div className="rounded-full h-[3.5rem] aspect-square flex justify-center items-center border-2 border-gray cursor-pointer">
              <img src={book} alt="dots" />
            </div>
            <div className="rounded-full h-[3.5rem] aspect-square flex justify-center items-center border-2 border-gray cursor-pointer">
              <img src={link} alt="dots" />
            </div>
            <div className="rounded-full h-[3.5rem] aspect-square flex justify-center items-center border-2 border-gray cursor-pointer">
              <img src={bell} alt="dots" />
            </div>
            <div className="rounded-full h-[3.5rem] aspect-square flex justify-center items-center border-2 border-gray cursor-pointer">
              <img src={shop} alt="dots" />
            </div>
            <div className="rounded-full h-[3.5rem] aspect-square flex justify-center items-center border-2 border-gray cursor-pointer">
              <img src={ellipses} alt="dots" />
            </div>
          </nav>
        </nav>
        <section className="h-full"></section>
      </section>
    </div>
  );
};

export default Dashboard;
