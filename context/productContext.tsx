"use client";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const productContext = createContext<any>({});
export const ProductContextProvider = ({ children }: { children: any }) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const products = [
    {
      id: 1,
      title: "Butterfly Tower Fan",
      price: 130,
      description:
        "Stay cool and comfortable with our Butterfly Tower Fan. Its sleek design and powerful performance make it perfect for any room.",
      image: "https://i.postimg.cc/T3GRLmtM/Butterfly-tower-fan.jpg",
    },
    {
      id: 2,
      title: "Devi Lakshmi Washing Machine",
      price: 450,
      description:
        "Make laundry day a breeze with our Devi Lakshmi Washing Machine. With advanced features and a large capacity, it's perfect for busy households.",
      image: "https://i.postimg.cc/xjhDHHTp/Devi-lakshmi-washing-machine.jpg",
    },
    {
      id: 3,
      title: "Hairer Refrigerator 190 Litres",
      price: 320,
      description:
        "Keep your food fresh and organized with our Hairer Refrigerator. With a spacious interior and energy-efficient design, it's perfect for any kitchen.",
      image:
        "https://i.postimg.cc/C15XnLyV/hairer-Refridgerator-190-Litres.jpg",
    },
    {
      id: 4,
      title: "LG Refrigerator 190 Litres",
      price: 380,
      description:
        "Upgrade your kitchen with our LG Refrigerator. With advanced cooling technology and a sleek design, it's perfect for modern homes.",
      image: "https://i.postimg.cc/t7QMc3sX/IMG-1704.jpg",
    },
    {
      id: 5,
      title: "LG Washing Machine",
      price: 480,
      description:
        "Make laundry day easier with our LG Washing Machine. With multiple wash cycles and smart features, it's perfect for busy families.",
      image: "https://i.postimg.cc/DfJft7SD/IMG-1735.jpg",
    },
    {
      id: 6,
      title: "Pink Grand Dhanalakshmi Grinder",
      price: 60,
      description:
        "Grind spices and herbs with ease using our Pink Grand Dhanalakshmi Grinder. Its durable design and powerful motor make it perfect for any kitchen.",
      image:
        "https://i.postimg.cc/qvHPDTK8/pink-grand-Dhanalakshmi-grainder.jpg",
    },
  ];
  const [quantity, setQuantity] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  // async function getProducts() {
  //   const res = await fetch("https://fakestoreapi.com/products");
  //   const data = await res.json();
  //   setProducts(data);
  //   console.log(data);
  // }
  // useEffect(() => {
  //   getProducts();
  // }, []);
  function addToCart(item: any) {
    const inCart = cartItems?.find((e: any) => e.id === item.id);
    let totalItems = cartItems.length;

    if (!inCart) {
      totalItems += 1;
      setCartItems((prev: any[]) => [...prev, { ...item, quantity: 1 }]);
    } else {
      setCartItems((prev: any) =>
        prev.map((existingItem: any) => {
          if (existingItem.id == item.id) {
            return { ...existingItem, quantity: existingItem.quantity + 1 };
          }
          return existingItem;
        })
      );
    }
    setQuantity(totalItems);
    console.log(cartItems);

    console.log(totalItems);
  }
  function removeFromCart(item: any) {
    if (item.quantity > 1) {
      setCartItems((prev) =>
        prev.map((i) => {
          if (i.id === item.id) {
            return { ...i, quantity: i.quantity - 1 };
          }
          return i;
        })
      );
    } else {
      setCartItems((prev) =>
        prev.filter((existing) => existing.id !== item.id)
      );
    }
  }
  const total = cartItems.reduce(
    (acc, current) => Math.floor(acc + current.quantity * current.price),
    0
  );
  return (
    <productContext.Provider
      value={{
        quantity,
        products,
        addToCart,
        isCartOpen,
        setIsCartOpen,
        cartItems,
        removeFromCart,
        total,
        setCartItems,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
