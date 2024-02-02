import Button from "../components/Button";
import storeFrontHeroPic from "../assets/storeFrontHeroPic.png";
import profilePic from "../assets/profilePic.png";
import ellipses from "../assets/svgs/ellipses.svg";
import search from "../assets/svgs/search.svg";

const StoreFront = () => {
  return (
    <>
      <nav className="flex justify-between items-center mx-40 my-7 font-semibold text-black/50">
        <img src={profilePic} className="w-12" alt="" />
        <ul className="flex justify-center gap-7 ">
          <li className="text-blue font-bold cursor-pointer">Home</li>
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Categories</li>
        </ul>
        <section className="flex justify-center items-center gap-3">
          <div className="bg-[#DFDFDF]/30 flex h-fit justify-start items-center py-3 px-5 rounded-lg gap-3 border-[1px] border-black/10 w-[300px]">
            <img src={search} alt="" className="w-5" />
            <input
              type="text"
              placeholder="Search or type"
              className="bg-transparent w-[150px] focus:outline-none placeholder:text-sm text-black"
            />
          </div>
          <div className="rounded-full h-[3.25rem] aspect-square flex justify-center items-center border-[1px] border-gray">
            <img src={ellipses} alt="" />
          </div>
        </section>
      </nav>
      <section className="flex flex-col justify-center items-start text-white h-[520px] overflow-hidden relative gap-10">
        <p className="mx-40 z-20 text-6xl font-extrabold w-[53%] leading-[1.4]">
          I sell shoes, clothes, bags and other clothing accessories.
        </p>
        <div className="mx-40 z-20">
          <Button
            text="Shop Now"
            borderWhite={true}
            customClasses="px-16 py-4 text-xl"
          />
        </div>

        <img src={storeFrontHeroPic} alt="" className="z-10 absolute" />
      </section>
    </>
  );
};

export default StoreFront;