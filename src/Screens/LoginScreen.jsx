/** @format */
import { useState, useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import logo from "../images/logo-01.png";
import usePasswordToggle from "../hooks/usePasswordToggle";
import { login } from "../actions/userAction";
import Loader from "../components/Loader";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginScreen = ({ history, location }) => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {

  
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);


  const submitHandler = (e) => {
    if (error) {
      toast.error(error)
    }
    e.preventDefault();
    dispatch(login(email, password));
  };
 

  return (
    <div>
    <Navbar/>
   
      {loading && <Loader />}
      <div className="flex justify-center relative conatiner items-center mt-32 mb-16">
        <div className="bg-white md:w-[40%] w-[90%] h-[100%]  space-y-5 flex-col border-3 shadow flex py-[2rem] px-3 md:px-[3rem] ">
          <form
            action=""
            onSubmit={submitHandler}
            className="flex flex-col space-y-6 md:space-y-7"
          >
            <div className=" flex justify-center mb-4">
              <img src={logo} alt="" />
            </div>

            <h1 className="md:text-2xl text-xl pt-2 font-bold">LOG IN</h1>
            <input
              type="text"
              className="border  p-3 text-lg outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type={PasswordInputType}
              className="border  p-3  text-lg outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="absolute top-[14rem] md:top-[14.2rem]  right-[3rem] md:right-[31rem]">
              {ToggleIcon}
            </span>
            <button
              type="submit"
              className="hover:bg-blue-800 text-white px-14 text-center py-3 rounded-md text-xl bg-black "
            >
              <Link>Log In</Link>
            </button>

            <div className="text-center  text-sm md:text-lg ">
              New Customer?{" "}
              <Link
                to={redirect ? `/register?redirect=${redirect}` : "/register"} className = "text-blue-800 text-sm md:text-lg"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
