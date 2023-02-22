/** @format */

import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import logo from "../images/logo-01.png";

const Header = () => {
  return (
    <header
      className="container 
      mx-auto"
    >
      <nav className=" flex mx-10  items-center   py-10 justify-between">
        <div className="flex items-center space-x-24">
          <img src={logo} alt="" className="w-28 h-5" />

          <ul className="hidden md:flex space-x-5 font-semibold text-neutral-500 text-lg items-center">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contacts</a>
            </li>
          </ul>
        </div>

        <ul className="flex space-x-5">
          <li>
            <BsCart4 className="text-2xl" />
          </li>
          <li>
            {" "}
            <a
              href=""
              className="text-xl py-2 rounded-full px-5 text-white bg-black"
            >
              Login
            </a>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
