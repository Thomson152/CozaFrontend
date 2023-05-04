/** @format */

import React, { useEffect, useState } from "react";

import { Link, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { HiX } from "react-icons/hi";
import logo from "../images/logo-01.png";
import { logout } from "../actions/userAction";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

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
        className={`flex fixed w-full z-10 top-[0rem] items-center  py-5  px-6 justify-between bg-white   ${
          scroll ? "md:bg-white shadow" : "md:bg-white shadow"
        }`}
      >
        <div className="flex items-center space-x-24">
          <img src={logo} alt="" className="md:w-28 md:h-5 w-20 h-4" />

          <ul className="hidden md:flex  md:space-x-5 font-semibold text-neutral-500 text-[18px] md:text-lg items-center">
            <li>
              <Link className=" text-[16px] md:text-lg" to="/">Home</Link>
            </li>
            <li>
              <Link className=" text-[16px] md:text-lg" to="/shop">Shop</Link>
            </li>

            <li>
              <Link className=" text-[16px] md:text-lg" to="/about">About</Link>
            </li>
            <li>
              <Link className=" text-[16px] md:text-lg" to="/contact">Contacts</Link>
            </li>
          </ul>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-4 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <HiX className={scroll ? "text-black text-2xl" : "text-2xl"} />
          ) : (
            <HiMenuAlt3 className={scroll ? "text-black text-2xl" : "text-2xl"} />
          )}
        </div>

        <nav>
          {/* Mobile */}
          <ul
            className={`md:hidden absolute flex flex-col  top-[70px] w-[100%]  bg-slate-800  border-t-2  px-4 text-white  py-3 font-semibold space-y-5  transition-all ease-in  ${
              open ? "left-0 duration-300 z-10" : "left-[-110%] duration-300"
            }`}
          >
            <li className="p-[1rem] text-[18px] font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="p-[1rem]  text-[18px] font-bold">
              <Link to="/shop">Shop</Link>
            </li>

            <li className="p-[1rem] text-[18px] font-bold">
              <Link to="/about">About</Link>
            </li>
            <li className="p-[1rem]  text-[18px] font-bold">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <ul className="flex space-x-3 md:space-x-4 relative items-center right-7">
          <li>
            <Link to="/cart">
              <BsCart4 className="md:text-3xl mr-4 text-[25px] " />
            </Link>
          </li>
          {userInfo ? (
            <div className="inline-flex pr-2   rounded-md">
              <Link
                onClick={() => setdropdownOpen(!dropdownOpen)}
                onMouseOver={() => setdropdownOpen(!dropdownOpen)}
                className=" py-2 pr-2 text-[17px] md:text-lg font-bold text-black   rounded-l-md"
              >
                Dropdown
              </Link>

              <div
                className="relative"
                onClick={() => setdropdownOpen(false)}
                onMouseLeave={() => setdropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setdropdownOpen(!dropdownOpen)}
                  className="inline-flex items-center justify-center h-full px-0 text-gray-600    rounded-r-md"
                >
                  <RiArrowDownSLine className="text-2xl text-black relative right-1" />
                </button>

                <div
                  className={`${
                    dropdownOpen
                      ? `top-full opacity-100 visible`
                      : `top-[110%] invisible opacity-0`
                  } absolute right-0 z-10 w-[13rem] mt-6  transition-all bg-white border border-gray-100 rounded shadow`}
                >
                  <div className="p-2">
                    <Link
                      onClick={logoutHandler}
                      className="block px-4 py-2 md:text-lg text-[16px] font-medium text-gray-500 rounded-lg hover:bg-gray-200 hover:text-gray-700"
                    >
                      Logout
                    </Link>

                    <Link
                      to="/profile"
                      className="block px-4 py-2 md:text-lg font-medium text-gray-500 rounded-lg text-[16px] hover:bg-gray-200 hover:text-gray-700"
                    >
                      Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <li>
              <Link to="/login">
                <CgProfile className="md:text-3xl  text-[25px]" />
              </Link>{" "}
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
