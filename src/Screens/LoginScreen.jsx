/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const LoginScreen = () => {
  return (
    <div>
      <Navbar />

      <div className="flex justify-center conatiner items-center mt-32 mb-16">
        <div className="bg-white md:w-[40%] w-[90%] h-[70%]  space-y-8 flex-col border-3 shadow flex py-[2rem] px-3 md:px-[3rem] ">
          <h1 className="text-2xl pt-2 font-sans font-semibold">SIGN IN</h1>
          <input
            type="text"
            className="border  p-5 text-lg outline-none"
            placeholder="Email"
          />
          <input
            type="password"
            className="border  p-5 text-lg outline-none"
            placeholder="Password"
          />

          <Link
            to="/"
            className="hover:bg-slate-900 text-white px-14 text-center py-3 rounded-full text-xl bg-blue-600 "
          >
            Log In
          </Link>

          <div className="text-center text-lg">
            New Customer?
            <Link>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
