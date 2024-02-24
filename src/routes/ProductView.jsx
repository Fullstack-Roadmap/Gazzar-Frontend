import React, { useState } from "react";
import UserNavbar from "../components/UserNavbar";
import productPic from "../assets/shoe.png";
import productPic2 from "../assets/shoe2.png";
import productPic3 from "../assets/shoe3.png";
import productPic4 from "../assets/shoe4.png";
import ProductPageCarousel from "../components/ProductPageCarousel";
import { useNavigate } from "react-router";

const ProductView = () => {
  const sizes = [...Array(4).keys()];
  const navigate = useNavigate()
  const goToCart = () => {
    navigate("/cart");
  };
  const [coloured, setColoured] = useState(false)
  const changeColour = () => {
    setColoured(!coloured)
  }
  const images = [productPic, productPic2, productPic3, productPic4];
  return (
    <div>
      <UserNavbar />
      <section className="rounded-xl flex flex-col border-[1px] border-gray lg:mx-[9.75rem] md:mx-28 sm:mx-10 md:mt-14 md:mb-32 sm:my-10 lg:py-6">
        <img
          src={productPic}
          alt="product"
          className="md:w-1/2 lg:w-2/5 p-10 rounded-2xl object-contain md:hidden"
        />
        <div className="md:pb-8 md:pt-6 md:px-6 flex md:gap-8 lg:gap-12">
          <img
            src={productPic}
            alt="product"
            className="md:w-1/2 lg:w-2/5 sm:w-2/5 sm:scale-50 rounded-2xl object-contain sm:hidden"
          />
          <div className="flex flex-col mb-4 lg:gap-10 md:gap-8 sm:gap-6 sm:px-10">
            <section>
              <h1 className="font-extrabold lg:text-5xl mb-4 md:text-3xl sm:text-2xl md:mt-5 lg:mt-0">
                Airforce 1's
              </h1>
              <p className="text-black/50 font-semibold md:text-sm  lg:text-base sm:text-sm">
                Brand:{" "}
                <span className="font-extrabold text-black lg:text-lg md:text-sm">
                  Nike
                </span>
              </p>
            </section>
            <section>
              <h2 className="lg:text-5xl font-semibold mb-3 md:text-3xl sm:text-2xl">
                N30,000
              </h2>
              <p className="font-bold lg:text-base md:text-sm sm:text-sm">
                19 in stock
              </p>
            </section>
            <section>
              <h3 className="font-extrabold md:text-base mb-5 lg:text-lg sm:text-sm">
                Variations
              </h3>
              <ul className="flex gap-2 flex-wrap">
                {sizes.map(() => (
                  <li className={`sm:px-4 sm:py-3 md:px-5 lg:px-6 md:py-4 lg:py-5 border-black/30 border-[1px] font-semibold rounded-xl sm:text-xs md:text-sm cursor-pointer text-black/80 ${coloured && "bg-blue"}`} onClick={changeColour}>
                    Size 42
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
        <div className="flex sm:flex-col px-6 w-full justify-between gap-6 sm:text-xs md:text-lg items-center">
          <ProductPageCarousel images={images} />
          <div className="flex w-3/5">
            <button
              className="md:ml-8 md:py-7 sm:py-4 bg-[#083167] w-full text-white rounded-lg font-semibold lg:text-lg md:text-base px-4"
              onClick={goToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
        <section className="sm:mx-8 md:mx-6 sm:mt-14 md:mt-10">
          <header className="text-3xl sm:text-xl font-bold md:mt-6">
            Product Description
          </header>
          <p className="sm:my-4 md:px-8 md:my-6 md:py-6 sm:p-4 font-medium md:w-4/5 bg-gray/30 rounded-xl text-[1rem] sm:text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            odit esse tempore, perspiciatis harum quis perferendis ex officiis
            provident corporis enim repudiandae vel magni ratione sint eius
            nesciunt natus laboriosam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quam sequi sunt dolorum dicta pariatur fuga
            laborum ipsam sed itaque? Doloribus, quidem! Vel eveniet dolores
            dolore, culpa mollitia voluptates explicabo eos. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Tempore, possimus.
            Aspernatur, ex molestiae!
          </p>
        </section>
      </section>
    </div>
  );
};

export default ProductView;
