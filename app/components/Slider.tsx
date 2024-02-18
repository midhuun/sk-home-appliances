"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./styles/Hamburger.css";
import Image from "next/image";
const SliderComponent = () => {
  return (
    <div className="w-[100%] ad h-[250px] bg-blue-100 lg:h-[550px] shadow-lg flex justify-center items-center">
      <Swiper
        modules={[Navigation]}
        spaceBetween={500}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="w-full  flex justify-between items-center h-[180px] lg:h-[280px] ">
            {/* <Image
              className="object-contain h-[160px] lg:h-[380px]"
              alt="fridge"
              width={400}
              height={200}
              src="/fridge.jpeg"
            /> */}
            <div></div>
            <div className="w-[50%] z-[-1]  flex justify-end items-start h-full p-4 text-white">
              <h3 className=" font-bold leading-[40px] -z-1 lg:text-[28px]">
                Stay cool with up to 30% off! Upgrade your kitchen with our
                sleek refrigerators. Limited time offer, grab yours now!
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderComponent;
