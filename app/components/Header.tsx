"use client";
import React, { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiShoppingBag } from "react-icons/hi2";
import Image from "next/image";
import Hamburger from "./Hamburger";
import Link from "next/link";
import { productContext } from "@/context/productContext";
const Header = () => {
  const { quantity, isCartOpen, setIsCartOpen } = useContext(productContext);
  return (
    <>
      <div className="flex  top-0 justify-between items-center px-4 w-full lg:hidden bg-blue-600 h-[60px]">
        <Hamburger />
      </div>
      <div className="w-full hidden fixed z-[100] lg:block h-[170px] pt-[30px]  bg-blue-600">
        <div className="w-full py-3  flex items-center justify-between lg:px-[80px]">
          <div className="logo flex items-center justify-center gap-3">
            <Image width={60} height={60} alt="logo" src="/logo.png" />
            <Link href="/" className="text-white font-bold">
              SK Home Appliances
            </Link>
          </div>
          <div className="search relative flex h-full items-center">
            <input
              className="p-2 w-[350px] focus:outline-none rounded-sm"
              type="text"
              placeholder="Search products"
              id=""
            />
            <button className="absolute right-14">
              <IoSearch size={20} color="blue" />
            </button>
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="pl-4 relative"
            >
              <HiShoppingBag color="white" size={26} />
              <div className="absolute flex items-center justify-center text-[12px] -right-1 top-0 h-4 w-4 bg-red-500 text-white rounded-full">
                {quantity}
              </div>
            </button>
          </div>
        </div>
        <div className="h-[1px] mt-3 w-full bg-blue-700"></div>
        <div className="categories px-[80px]  text-white py-2 font-bold  hidden lg:flex justify-between gap-4">
          <a className="flex items-center" href="">
            All Products <RiArrowDropDownLine size={20} />
          </a>
          <a href="">Refrigerator</a>
          <a href="">Small Home Appliances</a>
          <a href="">Washing Machine</a>
          <a href="">Kitchen Appliances</a>
          <a className=" px-3" href="">
            Cooker
          </a>
        </div>
      </div>
    </>
  );
};
export default Header;
