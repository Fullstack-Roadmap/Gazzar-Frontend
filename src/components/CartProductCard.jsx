import { useState } from "react";
import Shoe2 from "../assets/shoe2.png";
import deleteIcon from "../assets/svgs/deleteIcon.svg";


const CartProductCard = () => {

    const[count, setCount] = useState(1);

    const add = () => {
        setCount(count + 1);
    };
    const subtract = () => {
        if (count > 1){
            setCount(count - 1);
        }
    };

  return (
    <div className="h-fit pl-5 pr-9 pb-6 rounded-xl border border-outlinegray flex">
        <div className="flex flex-col gap-5 w-1/4 mt-6">
            <img className="w-[6.375rem] h-[6.25rem]" src={Shoe2} alt="Shoe"/>
            <img className="w-[2rem] h-[2rem]" src={deleteIcon} alt="delete" />
        </div>
        <div className="flex flex-col w-2/4 gap-3 mt-6">
            <span className="text-2xl font-black">Airforce 1's</span>
            <div className="flex gap-4">
                <span className="text-base text-[#919191]">Brand: <span className="text-black">Nike</span></span>
                <span className="text-base text-[#919191]">Variations: <span className="text-black">Size 47</span></span>
            </div>
        </div>
        <div className="flex gap-16 flex-col w-1/4 mt-6 items-end">
            <div className="flex flex-col items-end">
                <span className="text-[1.125rem] font-bold">N30,000</span>
                <span className="mt-2 text-[#919191] text-[0.875rem]">Discount: <span className="text-black">20%</span></span>
            </div>
            <div className="flex gap-4">
                <button className="w-[1.5625rem] h-[1.5625rem] text-white rounded bg-[#083167]" onClick={subtract}>
                    <span>-</span>
                </button>
                <span>{count}</span>
                <button className="w-[1.5625rem] h-[1.5625rem] text-white rounded bg-[#083167]" onClick={add}>
                    <span>+</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default CartProductCard