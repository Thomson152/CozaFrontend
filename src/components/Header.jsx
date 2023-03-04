/** @format */

import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import logo from "../images/logo-01.png";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScoll = () => {
      if (window.scrollY > 90) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScoll);
  }, []);

  return (
    <header>
      <nav
        className={`flex fixed w-full z-10 top-[0rem] items-center  py-4 pt-5 px-6 justify-between bg-white  ${
          scroll ? "md:bg-white shadow" : "md:bg-transparent"
        }`}
      >
        <div className="flex items-center space-x-24">
          <img src={logo} alt="" className="w-28 h-5" />

          <ul className="hidden md:flex space-x-5 font-semibold text-neutral-500 text-lg items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contacts</Link>
            </li>
          </ul>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-4 top-8 cursor-pointer md:hidden"
        >
          {open ? (
            <HiX className={scroll ? "text-black " : ""} />
          ) : (
            <HiMenuAlt3 className={scroll ? "text-black" : ""} />
          )}
        </div>

        <nav>
          {/* Mobile */}
          <ul
            className={`md:hidden absolute top-[4.5rem] right-[0rem] w-[100%] text-xl bg-blue-500 px-4 text-white  py-3 font-semibold space-y-5  transition-all ease-in  ${
              open ? "left-0 duration-300" : "left-[-100%] duration-300"
            }`}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contacts</Link>
            </li>
          </ul>
        </nav>

        <ul className="flex space-x-7 items-center relative right-7">
          <li>
            <Link to="/cart">
              <BsCart4 className="text-3xl" />
            </Link>
          </li>
          <li>
            <Link to="/login">
              <CgProfile className="text-3xl" />
              <h6>Sign In</h6>
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
