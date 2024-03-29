/** @format */

import React from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import img1 from "../images/slide-01.jpg";
import img2 from "../images/slide-02.jpg";
import img3 from "../images/slide-03.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import products from "../Prdouct";
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
import Product from "../components/Product";
import { Link } from "react-router-dom";
import { listProducts } from "../actions/productActions";
import { useEffect } from "react";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className="w-full my-[-1rem] ">
        <Swiper
          className="w-full "
          modules={[Navigation, Scrollbar, A11y, Autoplay, EffectFade]}
          spaceBetween={2}
          effect="fade"
          fadeEffect={{crossFade: true}}
          speed={2000}
          autoplay={{ delay: 3000 }}
          slidesPerView={1}
          // pagination={{ clickable: false }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="">
            <div className=" img1">
              <div className="relative top-[15rem] md:top-[20rem] md:left-[5rem] left-4">
                <h2 className="md:text-4xl text-2xl font-semibold font-sans ">
                  Woman Collection 2023
                </h2>

                <h1 className="md:text-7xl text-4xl py-7 font-serif font-medium">
                  NEW SEASON
                </h1>
                <Link
                  to="/shop"
                  className="text-white bg-blue-500 py-2 md:py-3 px-9 rounded-full hover:bg-black"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className=" img2">
              <div className="relative left-4 top-[15rem] md:top-[20rem] md:left-[5rem]">
                <h2 className="md:text-4xl text-2xl font-semibold font-sans ">
                  Men New-Season
                </h2>

                <h1 className="md:text-7xl text-4xl py-8 font-serif font-medium">
                  JACKETS <span className="text-red-700">&</span> COATS
                </h1>
                <Link
                 to="/shop"
                  className="text-white bg-blue-500 py-3 px-9 rounded-full hover:bg-black"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className=" img3">
              <div className="relative left-4 top-[15rem] md:top-[20rem] md:left-[5rem]">
                <h2 className="md:text-4xl text-2xl font-semibold font-sans ">
                  Men Collection 2023
                </h2>

                <h1 className="md:text-7xl text-4xl py-7 font-serif font-medium">
                  NEW ARRIVALS
                </h1>
                <Link
                  to="/shop"
                  className="text-white bg-blue-500 md:py-3 py-2 px-9 rounded-full hover:bg-black"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Card */}

        <div className="mt-20 flex overflow-hidden  md:space-x-10  flex-col md:flex-row  mb-5 container  md:mx-auto">
          <div className="border md:w-1/3 relative overflow-hidden group w-full my-3 border-gray-200 banner1 shadow  rounded">
            <div className="absolute left-5 ">
              <h1 className="md:text-3xl mt-4 text-2xl font-bold">Women</h1>
              <h2 className="md:text-lg text-[16px] py-2">Spring 2023</h2>
            </div>

            <div
              className="absolute h-full w-full  bg-ligthBlue/70 group-hover:text-white 
             opacity-0 group-hover:opacity-100 transition-all duration-500 "
            >
              <div className="relative left-5 ">
                <h1 className="md:text-3xl mt-4 text-2xl font-bold">Women</h1>
                <h2 className="md:text-lg text-[16px] py-2">Spring 2023</h2>
              </div>
            </div>
          </div>

          <div className="border md:w-1/3 relative overflow-hidden group w-full my-3 border-gray-200 banner2 shadow  rounded">
            <div className="absolute left-5 ">
              <h1 className="md:text-3xl mt-4 text-2xl font-bold">Men</h1>
              <h2 className="md:text-lg text-[16px] py-2">Spring 2023</h2>
            </div>

            <div
              className="absolute h-full w-full bg-ligthBlue/70 group-hover:text-white 
             opacity-0 group-hover:opacity-100 transition-all duration-500 "
            >
              <div className="relative left-5 ">
                <h1 className="md:text-3xl mt-4 text-2xl font-bold">Men</h1>
                <h2 className="md:text-lg text-[16px] py-2">Spring 2023</h2>
              </div>
            </div>
          </div>

          <div className="border md:w-1/3 relative overflow-hidden group w-full my-3 border-gray-200 banner3 shadow  rounded">
            <div className="absolute left-5 ">
              <h1 className="md:text-3xl mt-4 text-2xl font-bold">Accessories</h1>
              <h2 className="md:text-lg text-[16px] py-2">Spring 2023</h2>
            </div>

            <div
              className="absolute h-full w-full bg-ligthBlue/70 group-hover:text-white 
             opacity-0 group-hover:opacity-100 transition-all duration-500 "
            >
              <div className="relative left-5 ">
                <h1 className="md:text-3xl mt-4 text-2xl font-bold">Accessories</h1>
                <h2 className="md:text-lg text-[16px] py-2">Spring 2023</h2>
              </div>
            </div>
          </div>
        </div>

        {/* //Product */}

        <div className="container md:mx-auto mt-10">
          <h1 className="md:text-4xl text-2xl text-center md:text-left font-sans font-bold  py-10">
            TRENDING NOW
          </h1>
          {loading ? (
            <Loader/>
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            <div className="grid gap-8 mb-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {products.slice(0, 4).map((product) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
        <Footer/>
      </div>
     
    </>
  );
};

export default HomeScreen;
