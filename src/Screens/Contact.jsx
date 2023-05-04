/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />

      <div className="aboutBanner mt-10 justify-center items-center flex">
        <h1 className="md:text-6xl font-sans text-2xl font-bold text-white">
          Contact
        </h1>
      </div>

      <div className="  my-10 border-2 md:flex-row flex-col space-y-20 container mx-auto flex justify-between">
        
        <div className="md:w-1/2  space-y-7 p-5 md:p-16 flex flex-col  md:border-r-2">
          <h4 className="md:text-3xl text-[18px] text-center ">Send Us A Message</h4>

          <input
            type="text"
            className="border md:p-5 p-3 md:text-lg text-[16px] outline-none"
            placeholder="Your Email Address"
          />

          <textarea
            name=""
            className="border md:p-5 p-3 text-[16px]  md:text-lg outline-none"
            id=""
            cols="30"
            rows="5"
            placeholder="How Can We Help?"
          ></textarea>

          <Link className="bg-slate-900 text-white md:text-lg text-[17px] md:py-3 py-2 text-center rounded-full hover:bg-blue-500 ">
            SUBMITE
          </Link>
        </div>

        <div className="flex flex-col space-y-7 justify-center items-left mx-auto px-5 ">

          <div className="">
            <div className=" flex items-center">
              <FaMapMarkerAlt className="md:text-lg text-[18px] text-gray-500"/>
              <h4 className="md:text-xl text-[18px] px-5 text-gray-700 font-medium">Address</h4>
            </div>

            <p className="max-w-xs py-4 md:text-lg text-[16px] px-9 text-gray-400">
              Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US
            </p>
          </div>

          <div className="">
            <div className="text-2xl flex items-center">
              <AiOutlinePhone className=" text-gray-500"/>
              <h4 className="md:text-xl text-[18px]  text-gray-700 font-medium px-5">Let's Talk</h4>
            </div>

            <p className="md:text-lg text-[16px] px-8 text-blue-600 py-4">+1 800 123456789</p>
          </div>

          <div className="">
            <div className="text-2xl flex items-center">
              <AiOutlineMail className=" text-gray-500"/>
              <h4 className="md:text-xl text-[18px] px-5 text-gray-700 font-medium">Scale Support</h4>
            </div>

            <p className="py-4 md:text-lg text-[16px] text-blue-600 px-9">contact@example.com</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
