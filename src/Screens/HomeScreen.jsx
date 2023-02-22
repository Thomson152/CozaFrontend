/** @format */

import React from "react";
import Header from "../components/Header";
import img1 from "../images/slide-01.jpg";
import img2 from "../images/slide-02.jpg";
import img3 from "../images/slide-03.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import { Fade, Zoom } from "react-awesome-reveal";

const HomeScreen = () => {
  return (
    <>
      <div className="w-full my-[-1rem] ">
        <Swiper
          className="w-full "
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectFade,
          ]}
          spaceBetween={2}
          effect={"fade"}
          speed={1000}
          autoplay={{ delay: 2000 }}
          slidesPerView={1}
          pagination={{ clickable: false }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="">
            <div className=" img1">
              <Header />
              <div className="relative top-[15rem] md:top-[20rem] md:left-[5rem] left-4">
               
                  <h2 className="md:text-4xl text-2xl font-semibold font-sans ">
                    Woman Collection 2023
                  </h2>

                  <h1 className="md:text-7xl text-5xl py-7 font-serif font-medium">
                    NEW SEASON
                  </h1>
                  <a
                    href=""
                    className="text-white bg-blue-500 py-3 px-9 rounded-full hover:bg-black"
                  >
                    SHOP NOW
                  </a>
                
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className=" img2">
              <Header />
              <div className="relative left-4 top-[15rem] md:top-[20rem] md:left-[5rem]">
               
                  <h2 className="md:text-4xl text-2xl font-semibold font-sans ">
                    Men New-Season
                  </h2>

                  <h1 className="md:text-7xl text-4xl py-8 font-serif font-medium">
                    JACKETS <span className="text-red-700">&</span> COATS
                  </h1>
                  <a
                    href=""
                    className="text-white bg-blue-500 py-3 px-9 rounded-full hover:bg-black"
                  >
                    SHOP NOW
                  </a>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className=" img3">
              <Header />
              <div className="relative left-4 top-[15rem] md:top-[20rem] md:left-[5rem]">
               
                  <h2 className="md:text-4xl text-2xl font-semibold font-sans ">
                    Men Collection 2023
                  </h2>

                  <h1 className="md:text-7xl text-4xl py-7 font-serif font-medium">
                    NEW ARRIVALS
                  </h1>
                  <a
                    href=""
                    className="text-white bg-blue-500 py-3 px-9 rounded-full hover:bg-black"
                  >
                    SHOP NOW
                  </a>
            
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Card */}

        <div className="mt-10 flex overflow-hidden  md:space-x-10  flex-col md:flex-row  mb-5 container  md:mx-auto">

          <div className="border md:w-1/3 w-full my-3 border-gray-200 banner1 shadow  rounded">
            <div className="relative left-5 ">
              <h1 className="text-3xl font-bold">Women</h1>
              <h2 className="text-lg py-2">Spring 2023</h2>
            </div>
          </div>

          <div className="border md:w-1/3 w-full my-3  border-gray-200 banner2 shadow   rounded">
            <div className="relative left-5">
              <h1 className="text-3xl font-bold">Men</h1>
              <h2 className="text-lg py-2">Spring 2023</h2>
            </div>
          </div>

          <div className="border md:w-1/3 w-full my-3  border-gray-200 banner3 shadow rounded">
            <div className="relative left-5">
              <h1 className="text-3xl font-bold">Accessories</h1>
              <h2 className="text-lg py-2">New Trend</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
