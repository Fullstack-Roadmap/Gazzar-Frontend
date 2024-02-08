import Button from "../components/Button";
import storeFrontHeroPic from "../assets/storeFrontHeroPic.png";
import profilePic from "../assets/profilePic.png";
import ellipses from "../assets/svgs/ellipses.svg";
import search from "../assets/svgs/search.svg";
import Product from "../components/Product";

const StoreFront = () => {
  var products = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <body className="overflow-hidden">
      <nav className="flex justify-between items-center lg:mx-36 md:mx-20 my-7 font-semibold text-black/50 sm:justify-around">
        <img src={profilePic} className="w-14" alt="profilePic" />
        <ul className="sm:flex-col md:flex-col lg:flex-row flex lg:static justify-center items-center lg:gap-7 absolute bg-white top-0 right-0 p-10 w-1/2 lg:h-fit h-screen z-30 lg:text-base text-3xl gap-16">
          <li className="text-blue font-bold cursor-pointer">Home</li>
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Categories</li>
        </ul>
        <section className="flex justify-center items-center gap-3">
          <div className="bg-[#DFDFDF]/30 flex h-fit justify-start items-center py-3 px-5 rounded-lg gap-3 border-[1px] border-black/10 w-[300px] sm:w-[200px]">
            <img src={search} alt="search" className="w-5" />
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
      <section className="flex flex-col justify-center items-start text-white h-[520px] overflow-hidden relative gap-10 sm:gap-5">
        <p className="lg:mx-36 md:mx-20 sm:mx-10 z-20 lg:text-6xl md:text-5xl sm:text-3xl font-extrabold w-[53%] sm:w-3/4 leading-[1.4]">
          I sell shoes, clothes, bags and other clothing accessories.
        </p>
        <div className="lg:mx-36 md:mx-20 sm:mx-10 z-20">
          <Button
            text="Shop Now"
            borderWhite={true}
            customClasses="md:px-8 md:py-2 md:text-lg lg:px-16 lg:py-4 lg:text-xl"
          />
        </div>

        <div className="flex justify-center z-10 absolute bg-green-500 sm:h-80 md:h-[30rem] lg:h-fit">
          <img src={storeFrontHeroPic} alt="heroPic" className="object-cover" />
        </div>
      </section>
      <nav>
        <ul className="justify-start flex-wrap flex lg:mx-36 md:mx-20 sm:mx-10 mt-[4.5rem] gap-3 text-xs font-medium">
          <li className="bg-[#083167] px-6 py-4 text-white rounded-lg">
            All (74)
          </li>
          <li className="bg-[#DFDFDF] px-6 py-4 text-[6D6D6D] rounded-lg">
            Shoes
          </li>
          <li className="bg-[#DFDFDF] px-6 py-4 text-[6D6D6D] rounded-lg">
            Clothes
          </li>
          <li className="bg-[#DFDFDF] px-6 py-4 text-[6D6D6D] rounded-lg">
            Bags
          </li>
        </ul>
      </nav>
      <ul className="flex flex-wrap justify-center items-center gap-10 w-full mt-12">
        {products.map(() => (
          <li className="shadow-custom">
            <Product />
          </li>
        ))}
      </ul>
    </body>
  );
};

export default StoreFront;
