/** @format */

import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RiArrowDownSLine } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import logo from "../images/logo-01.png";
import { CgProfile } from "react-icons/cg";
import { logout } from '../actions/userAction'

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setdropdownOpen] = useState(false);
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

    const dispatch = useDispatch();

    const logoutHandler = () => {
      dispatch(logout())
    }
  

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <header>
      <nav
        className={`flex fixed w-full z-10 top-[0rem] items-center  py-5 pt-5 px-6 justify-between bg-white  ${
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
          className="text-3xl absolute right-4 top-5 cursor-pointer md:hidden"
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
            className={`md:hidden absolute top-[4rem] right-[0rem] w-[100%] text-xl bg-blue-500 px-4 text-white  py-3 font-semibold space-y-5  transition-all ease-in  ${
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

        <ul className="flex space-x-5 items-center relative right-7">
          <li>
            <Link to="/cart">
              <BsCart4 className="text-3xl" />
            </Link>
          </li>
          {userInfo ? (
            <div className="inline-flex  rounded-md">
              <Link
                onClick={()=>setdropdownOpen(!dropdownOpen)}
                className="px-4 py-2  text-lg font-medium text-gray-600 hover:text-gray-700  rounded-l-md"
              >
                {userInfo.name}
              </Link>

              <div className="relative">
                <button
                  type="button"
                  onClick={()=>setdropdownOpen(!dropdownOpen)}
                  className="inline-flex items-center justify-center h-full px-0 text-gray-600   hover:text-gray-700 rounded-r-md "
                >
                  <RiArrowDownSLine className="text-2xl"/>
                </button>
                

                <div className={`${dropdownOpen ? `top-full opacity-100 visible` : `top-[110%] invisible opacity-0`} absolute right-0 z-10 w-[11rem] mt-4  transition-all bg-white border border-gray-100 rounded-md shadow-lg`}>
                  <div className="p-2">
                    <Link
                       onClick={logoutHandler}
                      className="block px-4 py-2 text-lg font-medium text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      Logout
                    </Link>

                    <Link
                      href="#"
                      className="block px-4 py-2 text-lg font-medium text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
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
                <CgProfile className="text-3xl" />
              </Link>{" "}
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
