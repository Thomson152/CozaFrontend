import { useState, useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import logo from "../images/logo-01.png";
import usePasswordToggle from "../hooks/usePasswordToggle";
import { login, register } from "../actions/userAction";
import Loader from "../components/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RegisterScreen = ({history, location}) => {

    const [PasswordInputType, ToggleIcon] = usePasswordToggle();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null)
    const dispatch = useDispatch();
  
    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister
  
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
      e.preventDefault()
    if (password !== ConfirmPassword) {
      toast.message("Passwords do not match")
    } else {
      dispatch(register(name, email, password))
    }
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

            <h1 className="md:text-2xl text-xl pt-2 font-bold">REGISTER</h1>

            <input
              type="text"
              className="border  p-3 text-lg outline-none"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

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
            <span className="absolute top-[19rem] md:top-[20rem]  right-[3rem] md:right-[31rem]">
              {ToggleIcon}
            </span>

            <input
              type={PasswordInputType}
              className="border  p-3  text-lg outline-none"
              placeholder="Confirm Password"
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span className="absolute top-[24rem] md:top-[25rem]  right-[3rem] md:right-[31rem]">
              {ToggleIcon}
            </span>
            <button
              type="submit"
              className="hover:bg-slate-900 text-white px-14 text-center py-3 rounded-md text-lg bg-blue-600 "
            >
              <Link>REGISTER</Link>
            </button>

            <div className="text-center text-sm md:text-lg ">
              Already Have an account?{" "}
              <Link
                to={redirect ? `/login?redirect=${redirect}` : "/login"} className = "text-white hover:bg-slate-900 bg-blue-600 rounded text-lg py-2 px-2"
              >
                LOG IN
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterScreen