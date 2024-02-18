"use client";
import React, { useContext } from "react";
import { productContext } from "@/context/productContext";
import Link from "next/link";
import Image from "next/image";
const page = () => {
  const { cartItems, total, addToCart, removeFromCart } =
    useContext(productContext);
  console.log(cartItems.length);

  return (
    <>
      {cartItems?.length > 0 ? (
        <div className="w-full font-semibold text-[14px] md:text-md flex justify-center lg:pt-[170px]  items-center">
          <div className="lg:w-[80%] p-2  pt-6 ">
            <h3 className="text-2xl font-semibold">Cart</h3>
            <div className="lg:flex  w-full gap-5  flex-wrap justify-center">
              <div className="w-full  items-center  ">
                <div className="hidden lg:flex-row lg:p-3 w-full  lg:border md:flex-[1] lg:flex-[3] lg:bg-[#ebf5f9] items-center py-4 mt-6">
                  <p className="flex-[1] flex flex-col justify-center h-[150px] py-6 lg:py-0 lg:flex-[3]">
                    Product:
                  </p>
                  <p className="flex-[1] py-6 lg:py-0">Price:</p>
                  <p className="flex-[1] py-6 lg:py-0">Quantity:</p>
                  <p className="flex-[1] py-6 lg:py-0">Total:</p>
                </div>
                {cartItems.map((item: any) => (
                  <div className="flex  border p-3 lg:hidden">
                    <div
                      key={item.id}
                      className=" lg:hidden  w-full flex-[2] md:flex-[1]  lg:bg-[#ebf5f9] items-center"
                    >
                      <p className="flex-[1] h-[120px] flex items-center lg:py-0 lg:flex-[3]">
                        Product:
                      </p>
                      <p className="flex-[1] h-[70px] flex items-center ">
                        Price:
                      </p>
                      <p className="flex-[1] h-[70px] flex items-center ">
                        Quantity:
                      </p>
                      <p className="flex-[1]  h-[70px] flex items-center ">
                        Total:
                      </p>
                    </div>
                    <div className="lg:hidden flex-[5] flex flex-col  text-[13px] md:text-md text-center lg:text-start items-center w-full">
                      <div className="flex-[1] min-h-[120px] p-1  lg:py-2 items-center flex ">
                        <img
                          className="h-[55px] w-[40px]  object-cover"
                          src={item.image}
                          alt=""
                        />
                        <p>{item.title}</p>
                      </div>
                      <p className="flex-[1] h-[70px] flex items-center">
                        ₹ {item.price}
                      </p>
                      <div className="flex h-[70px] items-center">
                        <button
                          onClick={() => removeFromCart(item)}
                          className="w-[35px] bg-red-500 border-r-0 text-white  flex justify-center items-center h-[35px] border "
                        >
                          -
                        </button>
                        <p className="flex-[1] w-[35px]  flex justify-center items-center h-[35px] border-t border-b">
                          {item.quantity}
                        </p>
                        <button
                          onClick={() => addToCart(item)}
                          className="w-[35px] bg-blue-500 border-l-0 text-white flex justify-center items-center h-[35px] border "
                        >
                          +
                        </button>
                      </div>

                      <p className="flex-[1] h-[70px]  flex items-center">
                        ₹ {item.quantity * item.price}
                      </p>
                    </div>
                  </div>
                ))}
                {cartItems.map((item: any) => (
                  <div
                    key={item.id}
                    className="lg:flex hidden text-[13px] md:text-md text-center lg:text-start items-center w-full"
                  >
                    <div className="flex-[1] p-1  lg:py-2 items-center flex    lg:flex-[3]">
                      <img
                        className="h-[55px] w-[70px] md:h-[110px] ml-2 lg:mx-3 md:w-[80px] object-cover"
                        src={item.image}
                        alt=""
                      />
                      <p>{item.title}</p>
                    </div>
                    <p className="flex-[1] py-6 lg:py-0">₹{item.price}</p>
                    <p className="flex-[1] py-6 lg:py-0">{item.quantity}</p>
                    <p className="flex-[1] py-6 lg:py-0 ">₹{total}</p>
                  </div>
                ))}
              </div>
              <div className="flex-[1]  ">
                <h3 className="lg:text-xl p-4 mt-6 bg-[#ebf5f9] border ">
                  Cart Total
                </h3>
                <div className="flex items-center justify-between w-full">
                  <h3 className="w-[80%] p-5 ">SubTotal:</h3>
                  <h3 className="w-[20%]">₹{total}</h3>
                </div>
                <div className="w-full flex justify-center text-center items-center">
                  <Link
                    className="w-full text-sm lg:text-md p-3 lg:p-3 my-2 text-white bg-[#27323F] font-semibold"
                    href="/checkout"
                  >
                    Proceed To Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex lg:pt-[170px] flex-col justify-center h-screen w-full items-center">
          <Image
            className=" py-7"
            alt="Cart"
            src="/bag.png"
            width={200}
            height={200}
          />
          <h3 className=" py-7   rounded-md w-[80%] lg:w-[40%]">
            Your cart is empty. Start shopping now for great deals!
          </h3>
          <button className="p-5 my-5 w-[60%] lg:w-[30%] text-nowrap text-sm md:text-lg text-white bg-blue-500 rounded-md">
            Continue Shopping
          </button>
        </div>
      )}
    </>
  );
};

export default page;
