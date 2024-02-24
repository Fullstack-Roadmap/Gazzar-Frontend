import CartProductCard from "../components/CartProductCard";
import UserNavbar from "../components/UserNavbar";
import { Link } from "react-router-dom";
import { SPImagesData } from "../components/SPImagesData";
import Button from "../components/Button";

const Cart = () => {
  return (
    <>
    <UserNavbar></UserNavbar>
      <div className="h-fit mt-14 px-8 pb-16 rounded-xl border border-outlinegray mx-40">
        <h3 className="text-4xl font-extrabold mt-4 ml-12">Cart</h3>
        <div className="flex gap-8">
          <div className="flex flex-col w-2/3 gap-6 mt-12">
            <CartProductCard />
            <CartProductCard />
          </div>
          <div className="w-1/3 h-[14.625rem] mt-10 rounded-xl bg-[#F7F7F7] border border-outlinegray px-6 pt-4">
            <div className="flex flex-col gap-4 w-full border-b border-outlinegray pb-3">
              <h4 className="text-xl font-bold tracking-tight">Summary</h4>
              <span className=" text-base font-bold">3 items</span>
            </div>
            <div className="flex mt-3 justify-between">
              <span>Subtotal</span>
              <span className="text-base font-bold tracking-tight">N60,000</span>
            </div>
            <Button text="Checkout" buttonColor="#083167"customClasses={"w-full mt-6 flex justify-center items-center"}/>
          </div>
        </div>
      </div>
      <div className="h-fit my-12 p-7 rounded-xl border border-outlinegray mx-40">
        <h3 className="text-xl font-bold">Similar Products</h3>
        <div className="flex gap-8">
          {SPImagesData.map((item, index) => {
            return (
              <Link key={index} className="mt-6 w-[11rem] h-[10rem]" to={item.path}>
                  <img className="w-full h-full" src={item.image} alt={item.name} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Cart
