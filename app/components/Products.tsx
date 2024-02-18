"use client";
import Image from "next/image";
import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { productContext } from "@/context/productContext";
const Products = () => {
  const { products } = useContext(productContext);
  return (
    <div className="w-full flex justify-center cursor-pointer">
      <div className="flex bg-white mt-6 md:w-[80%] border  md:gap-4 justify-center items-center p-4 flex-wrap">
        {products.map((e: any) => (
          <Link
            href={`/product/${e.id}`}
            className="md:h-[400px] h-[350px] w-[150px] sm:h-[350px] sm:w-[180px]  md:w-[250px] p-3 flex flex-col justify-center items-center border"
            key={e.id}
          >
            <div className="flex  p-3 items-center justify-center h-[200px] ">
              <img
                className="object-contain h-[190px] w-[150px]"
                alt="product"
                src={e.image}
              />
            </div>
            <div className="flex flex-col justify-center items-center md:p-3 md:w-[70%] font-semibold">
              <p className="text-sm">{e.title}</p>
              <p className="self-start pt-3 font-light">₹{e.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
