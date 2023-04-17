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
          <img src={logo} alt="" className="w-28 h-5" />

          <ul className="hidden md:flex  md:space-x-5 font-semibold text-neutral-500 text-lg items-center">
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
            <HiX className={scroll ? "text-black text-3xl" : ""} />
          ) : (
            <HiMenuAlt3 className={scroll ? "text-black text-3xl" : ""} />
          )}
        </div>

        <nav>
          {/* Mobile */}
          <ul
            className={`md:hidden absolute top-[4.5rem] right-[0rem] w-[100%]  bg-blue-500  px-4 text-white text-lg py-3 font-semibold space-y-5  transition-all ease-in  ${
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

        <ul className="flex space-x-4 md:space-x-4 relative items-center right-7">
          <li>
            <Link to="/cart">
              <BsCart4 className="text-3xl " />
            </Link>
          </li>
          {userInfo ? (
            <div className="inline-flex pr-2   rounded-md"  >
              <Link
                onMouseOver={() => setdropdownOpen(!dropdownOpen)}
                className=" py-2 pr-2 text-lg font-bold text-gray-600   rounded-l-md"
              >
                {userInfo.name}
              </Link>

              <div className="relative" onMouseLeave={()=>setdropdownOpen(false)}  >
                <button
                  type="button"
                  onClick={() => setdropdownOpen(!dropdownOpen)}
                  className="inline-flex items-center justify-center h-full px-0 text-gray-600    rounded-r-md"
                >
                  <RiArrowDownSLine className="text-2xl" />
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
                      className="block px-4 py-2 text-lg font-medium text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      Logout
                    </Link>

                    <Link
                     to='/profile'
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

export default Navbar;
