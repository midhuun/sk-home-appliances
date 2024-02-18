"use client";
import Image from "next/image";
import clsx from "clsx";
import React, { useContext, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi2";
import { productContext } from "@/context/productContext";
import Link from "next/link";

const Hamburger = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { quantity, isCartOpen, setIsCartOpen } = useContext(productContext);
  function showMenu() {
    setIsClicked(!isClicked);
    console.log("Hello");
  }
  return (
    <>
      <div className="flex  top-0">
        <button
          className={clsx({ hidden: isClicked, block: !isClicked })}
          onClick={showMenu}
        >
          <RxHamburgerMenu color="white" size={24} />
        </button>
        <button
          className={clsx({ hidden: !isClicked, block: isClicked })}
          onClick={showMenu}
        >
          <IoClose color="white" size={24} />
        </button>
        <Link href="/">
          <Image
            className="object-contain mx-4"
            width={30}
            height={30}
            alt="logo"
            src="/logo.png"
          />
        </Link>
      </div>
      <button onClick={() => setIsCartOpen(!isCartOpen)} className="relative ">
        <div className="absolute right-2 h-2 w-2 bg-red-500 text-blue-700 rounded-full">
          1
        </div>
        <HiShoppingBag color="white" size={23} />
      </button>
    </>
  );
};

export default Hamburger;
