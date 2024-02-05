import productPic from "../assets/temp/maksim-larin-NOpsC3nWTzY-unsplash.jpg";

const Product = () => {
  return (
    <div className="border-2 rounded-lg p-3 border-gray flex flex-col justify-center items-center">
      <img src={productPic} alt="" className="w-40 rounded-lg" />
      <p className="text-sm font-semibold">Nike sneakers</p>
      <p className="w-1/2">
        Top quality sneakers, colour red, nike, hot and sleek, 8th edition sales
      </p>
      <p className="text-blue text-lg font-bold">N20,600</p>
      <button className="bg-[#083167] px-12 py-4 text-white rounded-lg font-semibold">Add to cart</button>
    </div>
  );
};

export default Product;
