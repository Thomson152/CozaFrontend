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
import { ToastContainer, toast } from 'react-toastify';
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

    if (error) {
      toast.error(error)
    }
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect, error]);


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
 

  return (
    <div>
    <Navbar/>
   
      {loading && <Loader />}
      <div className="flex justify-center relative conatiner items-center mt-32 mb-16">
        <div className="bg-white md:w-[40%] w-[90%] h-[70%]  space-y-5 flex-col border-3 shadow flex py-[2rem] px-3 md:px-[3rem] ">
          <form
            action=""
            onSubmit={submitHandler}
            className="flex flex-col space-y-4 md:space-y-5"
          >
            <div className=" flex justify-center mb-4">
              <img src={logo} alt="" />
            </div>

            <h1 className="md:text-2xl text-xl pt-2 font-bold">SIGN IN</h1>
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
            <span className="absolute top-[12.7rem]  right-[3rem] md:right-[31rem]">
              {ToggleIcon}
            </span>
            <button
              type="submit"
              className="hover:bg-slate-900 text-white px-14 text-center py-3 rounded-full text-xl bg-blue-600 "
            >
              <Link>Log In</Link>
            </button>

            <div className="text-center text-lg">
              New Customer?{" "}
              <Link
                to={redirect ? `/register?redirect=${redirect}` : "/register"}
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
