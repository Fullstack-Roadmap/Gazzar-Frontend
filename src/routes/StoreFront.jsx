import heroImg from "../assets/temp/priscilla-du-preez-dlxLGIy-2VU-unsplash.jpg";
import Button from "../components/Button";

const StoreFront = () => {
  return (
    <>
      <nav className="flex justify-between items-center mx-40 my-7 font-semibold text-black/50">
        <section className="flex justify-center aspect-square w-12 rounded-full bg-gray"></section>
        <ul className="flex justify-center gap-7">
          <li className="text-blue font-bold">Home</li>
          <li>Products</li>
          <li>Categories</li>
        </ul>
        <section className="flex justify-center items-center gap-3">
          <div className="bg-gray/60 flex h-fit justify-start items-center py-3 px-5 rounded-lg gap-3 border-[1px] border-black/10 w-[300px]">
            <span className="flex w-5 bg-blue rounded-full aspect-square"></span>
            <input
              type="text"
              placeholder="Search or type"
              className="bg-transparent w-[150px] focus:outline-none placeholder:text-sm"
            />
          </div>
          <div className="rounded-full h-[3.25rem] aspect-square flex justify-center items-center border-[1px] border-gray"></div>
        </section>
      </nav>
      <section className="flex flex-row justify-start items-center bg-blue text-white h-[520px] overflow-hidden relative">
        <p className=" mx-40 z-10 text-4xl font-bold w-1/4">
          I sell shoes, clothes, bags and other clothing accessories.
        </p>
<Button text="Shop Now" buttonColor="" hasBorder={true} className="z-10"/>
        <img src={heroImg} alt="" className="opacity-40 absolute" />
      </section>
    </>
  );
};

export default StoreFront;
