import productPic from "../assets/temp/maksim-larin-NOpsC3nWTzY-unsplash.jpg";
import { useNavigate } from "react-router";

const Product = () => {
  const navigate = useNavigate();
  const goToProductDescription = () => {
    navigate("/product-description")
  }
  return (
    <div className="border-[1px] rounded-lg p-4 border-gray flex flex-col justify-center items-start w-60 gap-2">
      <img src={productPic} className="rounded-lg" />
      <p className="px-1 text-xs font-bold mt-2">Nike sneakers</p>
      <p className="px-1 text-[0.65rem]">
        Top quality sneakers, colour red, nike, hot and sleek, 8th edition sales
      </p>
      <p className="px-1 text-blue text-2xl font-semibold">N20,600</p>
      <button className="py-4 bg-[#083167] w-full text-white rounded-lg font-medium text-sm" onClick={goToProductDescription}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
