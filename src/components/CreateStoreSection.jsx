import React from "react";
import Button from "./Button";

const CreateStoreSection = () => {
  return (
    <div className="h-screen w-5/6 shadow-custom my-20 lrg:my-40 flex justify-between items-center px-8 py-10 pt-4 pr-0 mid:pl-8 pl-0 rounded-2xl">
      <div className="w-[110vw] h-full bg-blue rounded-2xl hidden mid:block"></div>
      <div className="p-12 sml:p-20 xs:pt-10 mid:p-10 lrg:p-20 lrg:pt-20 flex justify-center items-start flex-col gap-8 mid:gap-12">
        <header className="text-4xl xs:text-[2.5rem] sml:text-5xl lrg:text-6xl font-bold mid:leading-normal">
          Create<p className="mt-1 xs:mt-4 sml:mt-2 mid:mt-0 lrg:mt-2">Your Own</p><p className="mt-1 xs:mt-4 sml:mt-2 mid:mt-0 lrg:mt-2">Online Store</p>
        </header>
        <p className="text-xl sml:text-2xl font-normal leading-normal">
          Create an online store for your business, so users can easily see what
          you sell and buy products from you.
        </p>
        <Button
          text="Get Started"
          hasArrow={true}
          buttonColor=""
          hasBorder={true}
          textBlue={true}
          textLarge={true}
        />
      </div>
    </div>
  );
};

export default CreateStoreSection;
