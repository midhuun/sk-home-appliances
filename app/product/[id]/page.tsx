"use client";
import React, { useContext } from "react";
import { productContext } from "@/context/productContext";
import { useParams } from "next/navigation";
import { TiTick } from "react-icons/ti";
const product = () => {
  const params = useParams();
  const { products, addToCart, cartItems } = useContext(productContext);
  const filtered = products.find((e: any) => e.id == params.id);
  const isCart = cartItems.find((item: any) => item.id === filtered?.id);
  console.log(!isCart);

  return (
    <div className="flex lg:pt-[170px] p-4 w-full bg-[#f9feff]  justify-center">
      <div className="lg:w-[80%]  lg:pt-[50px] flex flex-wrap justify-center items-center gap-10">
        <div className="image p-3 border flex justify-center items-center object-contain max-w-[350px] max-h-[450px]">
          <img className="max-h-[420px]" src={filtered?.image} alt="" />
        </div>
        <div className="dec max-w-[350px] p-2 lg:p-4 lg:max-w-[600px] lg:pl-20">
          <h3 className="lg:text-[27px]  font-semibold">{filtered?.title}</h3>
          <p className="text-[#48515B] text-xl pt-3">₹{filtered?.price}</p>
          <p className=" lg:text-lg  pt-3">{filtered?.description}</p>
          <div className="flex flex-wrap items-center pt-8">
            <button
              onClick={() => addToCart(filtered)}
              className={`px-4 my-2 lg:m-0 lg:ml-4 ${
                isCart ? "hidden" : "cursor-pointer"
              } bg-[#27323F] hover:bg-blue-600 transition-all delay-75 text-white font-semibold h-[40px] flex justify-center items-center border`}
            >
              {isCart ? "Added to cart" : "Add to Cart"}
            </button>
            <p
              className={`h-[40px] text-blue-500 transition-all delay-100  ease-in flex items-center ${
                isCart ? "block" : "hidden"
              }`}
            >
              Added to Cart <TiTick size={25} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default product;
