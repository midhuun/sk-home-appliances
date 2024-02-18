"use client";
import React, { useContext } from "react";
import { productContext } from "@/context/productContext";
import { HiOutlineXMark } from "react-icons/hi2";
import Link from "next/link";
const PopupCart = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addToCart,
    removeFromCart,
    total,
  } = useContext(productContext);
  console.log(cartItems);

  return (
    <>
      {cartItems.length > 0 ? (
        <div
          className={`fixed ${
            isCartOpen ? "right-0 top-0" : "right-[-100%]"
          } z-[900] min-h-screen w-full lg:w-[450px] bg-white shadow-md border`}
        >
          <div className="pop ">
            <div className="flex justify-between items-center p-3">
              <h3 className="font-semibold text-lg opacity-80 text-black">
                Shopping Cart
              </h3>
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="m-3"
              >
                <HiOutlineXMark size={25} />
              </button>
            </div>
            <div className="w-full h-[1px]   bg-[#ccc]"></div>
            <div className="cart-items h-[70vh] pb-[100px] overflow-y-scroll">
              {cartItems?.map((item: any) => (
                <div className="cart-item">
                  <div className="flex p-3">
                    <div className="border flex justify-center items-center p-2">
                      <img
                        className="h-[70px] w-[90px] object-contain"
                        src={item?.image}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="p-2 w-[180px] lg:w-[300px] text-[12px] lg:text-sm font-semibold">
                        {item?.title}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap items-center p-2">
                          <button
                            onClick={() => removeFromCart(item)}
                            className="w-[35px] bg-red-500 border-r-0 text-white my-2 flex justify-center items-center h-[35px] border"
                          >
                            -
                          </button>
                          <p className="w-[35px] my-2 flex justify-center items-center text-[12px] bg-white h-[35px] border-t border-b">
                            {item.quantity}
                          </p>
                          <button
                            onClick={() => addToCart(item)}
                            className="w-[35px] bg-blue-500 border-l-0 text-white my-2 flex justify-center  items-center h-[35px] border "
                          >
                            +
                          </button>
                        </div>
                        <p className="p-2 text-[14px]">
                          ₹{Math.floor(item?.price * item?.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" absolute bg-white z-[1000] right-0 p-4 bottom-0 justify-between w-full">
            <div className="flex font-semibold  py-4 my-2 border-t border-b justify-between w-full">
              <p>Subtotal</p>
              <p className="font-normal">₹ {total}</p>
            </div>
            <Link href="/cart">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="w-full text-sm lg:text-md p-2 lg:p-3 my-2 text-white bg-[#27323F] font-semibold"
              >
                View Cart
              </button>
            </Link>
            <Link href="/checkout">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className=" w-full text-sm lg:text-md p-2 lg:p-3 my-2 bg-[#27323F] text-white font-semibold "
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div
          className={`fixed ${
            isCartOpen ? "right-0 top-0" : "right-[-100%]"
          } z-[900] min-h-screen w-full lg:w-[450px] bg-white shadow-md border`}
        >
          <div className="pop ">
            <div className="flex justify-between items-center p-3">
              <h3 className="font-semibold text-lg opacity-80 text-black">
                Shopping Cart
              </h3>
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="m-3"
              >
                <HiOutlineXMark size={25} />
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center items-center h-[80vh]">
            No Products in the cart
          </div>
          <div className=" absolute bg-white z-[1000] right-0 p-4 bottom-0 justify-between w-full">
            <Link href="/">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="w-full text-sm lg:text-md p-2 lg:p-3 my-2 text-white bg-[#27323F] font-semibold"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupCart;
