"use client";
import React, { useContext } from "react";
import { productContext } from "@/context/productContext";
import Link from "next/link";
const page = () => {
  const { cartItems, total, setCartItems } = useContext(productContext);
  return (
    <>
      <p className="lg:pt-[200px] pt-[30px] px-[10%] font-semibold text-2xl">
        Checkout
      </p>
      <div className=" flex flex-col font-semibold  justify-center items-center w-full">
        <div className="w-[80%]  pt-[60px] gap-6 lg:flex">
          <div className="div lg:mr-6 lg:w-[60%]">
            <label className="lg:text-xl">Customer Information :</label>
            <input
              className="w-full my-4 font-normal placeholder:text-[#585757] p-3 border rounded-sm"
              type="text"
              name=""
              placeholder="Name*"
              id=""
            />
            <input
              className="w-full my-4 font-normal placeholder:text-[#585757] p-3 border rounded-sm"
              type="number"
              inputMode="numeric"
              name=""
              placeholder="Mobile Number*"
              id=""
            />
            <input
              className="w-full my-4 font-normal placeholder:text-[#585757] p-3 border rounded-sm"
              type="text"
              name=""
              placeholder="Address*"
              id=""
            />
            <input
              className="w-full my-4 font-normal placeholder:text-[#585757] p-3 border rounded-sm"
              type="number"
              inputMode="numeric"
              name=""
              placeholder="PinCode*"
              id=""
            />
          </div>
          <div className="lg:w-[40%] w-full">
            <h3>Your order</h3>
            <div className="items mt-5 rounded-md border min-w-full min-h-[200px] w-full">
              <div className="flex font-normal p-3">
                <p className=" text-start w-[70%]">Products</p>
                <p className=" text-end w-[30%]">Subtotal</p>
              </div>
              <hr />
              <div className="flex font-normal text-sm md:text-md p-3">
                <div className=" text-start w-[70%]">
                  {cartItems?.map((item: any) => (
                    <div
                      className="flex min-h-[100px] justify-start items-center gap-3"
                      key={item.id}
                    >
                      <div className="p-2 flex border justify-center items-center">
                        <img
                          className="h-14 w-12 object-cover"
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <p className="px-2">
                        {item.title} X {item.quantity}
                      </p>
                    </div>
                  ))}
                </div>
                <div className=" text-end w-[30%]">
                  {cartItems?.map((item: any) => (
                    <div
                      className="flex min-h-[100px] items-center justify-end gap-3"
                      key={item.id}
                    >
                      <p className="p-2">₹ {item.price * item.quantity}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center">
        <Link
          href="/confirm"
          className="px-3 flex justify-center w-[80%] my-2 py-4 bg-blue-500 text-white "
        >
          <button onClick={() => setCartItems([])} className="text-center">
            Place Order
          </button>
        </Link>
      </div>
    </>
  );
};

export default page;
