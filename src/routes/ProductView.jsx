import React from "react";
import UserNavbar from "../components/UserNavbar";
import productPic from "../assets/temp/maksim-larin-NOpsC3nWTzY-unsplash.jpg";
const ProductView = () => {
  const sizes = [...Array(4).keys()];
  const goToProductView = () => {
    navigate("/product-view");
  };
  return (
    <div>
      <UserNavbar />
      <section className="rounded-lg flex flex-col border-[1px] border-gray lg:mx-40 md:mx-28 sm:mx-20 lg:my-20 md:my-14 sm:my-10 py-8">
        <div className="pb-4 px-4 flex gap-8">
          <img
            src={productPic}
            alt="product"
            className="md:w-2/5 sm:w-full rounded-lg object-cover"
          />
          <div className="flex flex-col mb-4 gap-8">
            <section>
              <h1 className="font-extrabold text-3xl mb-2">Airforce 1's</h1>
              <p className="text-black/50 font-semibold text-xs">
                Brand: <span className="font-bold text-black">Nike</span>
              </p>
            </section>
            <section>
              <h2 className="text-3xl font-bold mb-1">N30,000</h2>
              <p className="text-xs font-bold">19 in stock</p>
            </section>
            <section>
              <h3 className="font-bold text-xs mb-3">Variations</h3>
              <ul className="flex gap-2 flex-wrap">
                {sizes.map(() => (
                  <li className="px-4 py-3 border-black/30 border-[1px] font-semibold rounded-lg text-[0.65rem] cursor-pointer">
                    Size 42
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
        <div className="flex px-4 w-full justify-between">
          <div className="mt-1 w-2/5 bg-yellow-400 items-center flex justify-center rounded-lg text-white">
            Carousel
          </div>
          <div className="mt-5 flex w-3/5">
            <button
              className="ml-8 py-6 bg-[#083167] w-full text-white rounded-lg font-semibold text-xs"
              onClick={goToProductView}
            >
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductView;
