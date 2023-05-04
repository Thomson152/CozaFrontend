/** @format */

import React, { useState } from "react";
import VideoBg from "../images/Ecommerce.mp4";
import logo from "../images/logo-01.png";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const ProfileScreen = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex md:flex-row flex-col relative w-[100%]">
      <div className="md:w-[26%] w-[100%]  ">
        <div className="absolute top-5 left-4 text-white cursor-pointer ">
          <HiMenuAlt3
            onClick={() => setOpen(!open)}
            className="bg-slate-900 text-4xl px-2 rounded-md"
          />
        </div>

        <div
          className={`w-[300px] z-10 shadow fixed duration-500 top-0 bottom-0 bg-slate-800 overflow-y-auto ${
            open
              ? "left-[0px] transition-all  ease-in "
              : "left-[-300px] md:left-[0px] "
          }`}
        >
          <div className="mt-20">
            <div className="flex items-center px-10  text-xl font-bold text-white ">
              {/* <h1>USER</h1> */}

              <div onClick={() => setOpen(!open)} className="text-3xl ">
                <HiX className="ml-[10rem] md:hidden" />
              </div>
            </div>
          </div>
          <ul className="text-white text-xl   md:text-2xl flex flex-col gap-10 items-left ml-6 mt-[5rem]">
            <div className="hover:bg-blue-600 p-2.5  rounded-md">
              <li>
                <Link to="/">Home</Link>
              </li>
            </div>

            <div className="hover:bg-blue-600 p-2.5  rounded-md">
              <li>
                <Link>Orders</Link>
              </li>
            </div>

            <div className="hover:bg-blue-600 p-2.5  rounded-md">
              <li>
                {" "}
                <Link to="/user">UserProfile</Link>
              </li>
            </div>

            <div className="hover:bg-blue-600 p-2.5  rounded-md">
              <li>
                {" "}
                <Link to="/setting">Settings</Link>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div className="md:w-[70%]  w-[100%]">
        <div className="flex justify-center flex-col space-y-3 items-center  h-screen">
          <div className="mb-[2rem]">
            
          <h4 className="md:text-4xl text-2xl   font-semibold">
            Welcome To CozaStore
          </h4>
          <p className="md:text-sm text-sm text-center">We make online selling superbly easy</p>
          </div>
    
          <video
            className="w-[100%] h-[50%]  "
            src={VideoBg}
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
