import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex lg:pt-[170px] flex-col justify-center h-screen w-full items-center">
      <Image
        className=" py-7 mt-6"
        alt="Cart"
        src="/bag.png"
        width={200}
        height={200}
      />
      <h3 className=" py-7   rounded-md w-[80%] lg:w-[40%]">
        Congratulations! Your purchase is confirmed. Watch for updates on
        delivery. Thank you for shopping with us
      </h3>
      <button className="p-5 my-5 w-[60%] lg:w-[30%] text-nowrap text-sm md:text-lg text-white bg-blue-500 rounded-md">
        Continue Shopping
      </button>
    </div>
  );
};

export default page;
