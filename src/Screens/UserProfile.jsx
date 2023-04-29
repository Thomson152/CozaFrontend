/** @format */

import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import profile from "../images/profile.jpeg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const UserProfile = () => {

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
        dispatch(getUserDetails('profile'))
     
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user]);
  return (
    <div>
      <Navbar />

      <div className="relative top-[8rem] ml-4 md:ml-10  ">
      <Link to='/profile' className = 'p-4 py-3 rounded text-bg font-bold  text-black'>Go Back</Link>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center mb-[10rem] md:items-center mt-[10rem] container">
        <div className="md:w-[50%] items-center justify-center flex ">
          <div className="md:w-[50%] md:h-[35vh] w-40 h-40 rounded-full ">
            <img src={profile} alt=""  className="md:w-[100%] md:h-[35vh] w-40 h-40 rounded-full "/>
          </div>
        </div>
        <div className="md:w-[50%] px-[1rem] md:px-[2rem] my-20 ">
          <h4 className="md:text-left text-center font-bold md:text-3xl text-2xl">
            Personal Information
          </h4>
          <div className="flex flex-col mt-10 gap-6 ">
            <div className="flex items-center">
              <span className="md:text-xl font-semibold text-lg items-center">Name</span>:{" "}
              <h1 className="text-lg pl-2">Thomson</h1>
            </div>
            <div className="flex items-center">
              <span className="md:text-xl font-semibold text-lg">Email</span>:{" "}
              <h1 className="text-lg  pl-2 ">tomsinonyedikachi@gmail.com</h1>
            </div>

            <div className="flex items-center">
              <span className="md:text-xl font-semibold text-lg ">Address</span>:{" "}
              <h1 className="text-lg"></h1>
            </div>

            <div className="flex items-center">
              <span className="md:text-xl font-semibold text-lg">Phone number</span>:{" "}
              <h1 className="text-lg"></h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
