/** @format */
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import profile from "../images/profile.jpeg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../actions/userAction";
import Loader from "../components/Loader";

const UserProfile = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState();
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(userInfo.name);
        setEmail(userInfo.email);
      }
    }
  }, [dispatch, history, user, userInfo]);
  return (
    <div>
      <Navbar />

      <div className="relative top-[8rem] ml-4 md:ml-10  ">
        <Link
          to="/profile"
          className="p-4 py-3 rounded text-bg "
        >
          Go Back
        </Link>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center mb-[10rem] md:items-center mt-[10rem] container">
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
            Personal Information
          </h4>
          {loading ? (
            <Loader />
          ) : error ? (
            error
          ) : (
            <div className="flex flex-col mt-10 gap-6 ">
              <div className="flex items-center">
                <span className="md:text-xl text-lg font-semibold text-lg items-center">
                  Name
                </span>
                : <h1 className="md:text-lg text-sm pl-2">{name}</h1>
              </div>
              <div className="flex items-center">
                <span className="md:text-xl font-semibold text-lg">Email</span>:{" "}
                <h1 className="md:text-lg text-sm   pl-2 ">{email}</h1>
              </div>

              <div className="flex items-center">
                <span className="md:text-xl font-semibold text-lg ">Admin</span>
                : <h1 className="text-lg pl-2">{admin}</h1>
              </div>

              <div className="flex items-center">
                <span className="md:text-xl font-semibold text-lg">
                  Phone number
                </span>
                : <h1 className="text-lg"></h1>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
