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
                <Fade duration={1000} delay={600} direction={"left"} cascade>
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
                </Fade>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className=" img2">
              <Header />
              <div className="relative left-4 top-[15rem] md:top-[20rem] md:left-[5rem]">
                <Fade duration={1000} delay={600} direction={"left"} cascade>
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
                </Fade>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className=" img3">
              <Header />
              <div className="relative left-4 top-[15rem] md:top-[20rem] md:left-[5rem]">
                <Fade duration={1000} delay={600} direction={"left"} cascade>
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
                </Fade>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HomeScreen;
