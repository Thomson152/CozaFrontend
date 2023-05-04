/** @format */

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import profile from "../images/profile.jpeg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserProfile } from "../actions/userAction";
import Loader from "../components/Loader";

const Setting = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  },[dispatch, history, userInfo, user, success]);

  const submitHandle = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
      toast.info("Profile Updated");
    }
    if (error) {
      toast.error(error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="relative top-[8rem] ml-4 md:ml-10  ">
        <Link to="/profile" className="p-4 py-3 rounded text-bg  ">
          Go Back
        </Link>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center mb-[10rem] md:items-center mt-[12rem] container">
        <div className="md:w-[50%] items-center justify-center flex ">
          <div className="md:w-[50%] md:h-[35vh] w-40 h-40 rounded-full ">
            <img
              src={profile}
              alt=""
              className="md:w-[100%] md:h-[35vh] w-40 h-40 rounded-full "
            />
          </div>
        </div>
        <div className="md:w-[50%] px-[1rem] md:px-[2rem] my-20 ">
          <h4 className="md:text-left text-center font-bold md:text-3xl text-2xl">
            Update Information
          </h4>
          {loading && <Loader />}
          <form
            onSubmit={submitHandle}
            className="flex flex-col space-y-6 mt-6"
          >
            <input
              type="name"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="border  p-3 text-[18px] md:text-lg outline-none"
            />

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border  p-3 text-[18px] md:text-lg outline-none"
            />

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border  p-3  text-[18px] md:text-lg outline-none"
            />

            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border  p-3 text-[18px] md:text-lg outline-none"
            />

            <button
              type="submit"
              className="hover:bg-blue-800 bg-slate-800 text-white px-14 text-center py-3 rounded-md text-[18px] md:text-lg "
            >
              Update
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Setting;
