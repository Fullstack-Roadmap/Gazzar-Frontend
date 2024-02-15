import React from "react";
import UserNavbar from "../components/UserNavbar";
import productPic from "../assets/shoe.png";
const ProductView = () => {
  const sizes = [...Array(4).keys()];
  const goToProductView = () => {
    navigate("/product-view");
  };
  return (
    <div>
      <UserNavbar />
      <section className="rounded-xl flex flex-col border-[1px] border-gray lg:mx-[9.75rem] md:mx-28 sm:mx-20 md:mt-14 md:mb-32 sm:my-10 py-6">
        <div className="md:pb-8 md:pt-6 md:px-6 flex md:gap-12">
          <img
            src={productPic}
            alt="product"
            className="md:w-2/5 sm:w-full rounded-2xl object-cover"
          />
          <div className="flex flex-col mb-4 gap-10">
            <section>
              <h1 className="font-extrabold text-5xl mb-4">Airforce 1's</h1>
              <p className="text-black/50 font-semibold">
                Brand:{" "}
                <span className="font-extrabold text-black text-lg">Nike</span>
              </p>
            </section>
            <section>
              <h2 className="text-5xl font-semibold mb-3">N30,000</h2>
              <p className="font-bold">19 in stock</p>
            </section>
            <section>
              <h3 className="font-extrabold sm:text-xs md:text-lg mb-5">
                Variations
              </h3>
              <ul className="flex gap-2 flex-wrap">
                {sizes.map(() => (
                  <li className="sm:px-4 sm:py-3 md:px-6 md:py-5 border-black/30 border-[1px] font-semibold rounded-xl sm:text-[0.65rem] md:text-sm cursor-pointer text-black/80">
                    Size 42
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
        <div className="flex px-6 w-full justify-between gap-6 sm:text-xs md:text-lg items-center">
          <div className="w-2/5 bg-yellow-400 items-center flex justify-center rounded-lg text-white h-24">
            Carousel
          </div>
          <div className="flex w-3/5">
            <button
              className="ml-8 py-7 bg-[#083167] w-full text-white rounded-lg font-semibold"
              onClick={goToProductView}
            >
              Add to cart
            </button>
          </div>
        </div>
        <section className="sm:mx-4 md:mx-6 sm:mt-6 md:mt-10">
          <header className="text-3xl font-bold md:mt-6">
            Product Description
          </header>
          <p className="sm:m-4 md:px-8 md:my-6  md:py-6 font-medium w-4/5 bg-gray/30 rounded-xl text-[1rem]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            odit esse tempore, perspiciatis harum quis perferendis ex officiis
            provident corporis enim repudiandae vel magni ratione sint eius
            nesciunt natus laboriosam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quam sequi sunt dolorum dicta pariatur fuga
            laborum ipsam sed itaque? Doloribus, quidem! Vel eveniet dolores
            dolore, culpa mollitia voluptates explicabo eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, possimus. Aspernatur, ex molestiae!
          </p>
        </section>
      </section>
    </div>
  );
};

export default ProductView;
