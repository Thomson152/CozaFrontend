/** @format */
import React, { useState } from 'react'

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ShippingScreen = () => {
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [postalCode, setPostalCode] = useState();
  const [country, setCountry] = useState();
  return (
    <div className="">
      <Navbar />
      <div className=" flex  flex-col border-2 w-[90%] lg:w-[50%] items-start lg:items-center mx-[auto] mb-10 my-[15rem] container shadow py-[5rem]  ">
        <div className="mb-10 pl-7">
          <h1 className="lg:text-3xl  text-2xl">Shipping</h1>
        </div>

        <form className="flex-col px-10  w-[100%] lg:w-[80%] lg:mt-10  space-y-6">
          <div className=" flex flex-col ">
            <label className="mb-2">Address</label>
            <input
              type="text"
              className="border text-[18px]   p-3 md:text-lg outline-none"
              required
              placeholder="Enter Address"
              value={address}
              
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2">City</label>
            <input
              type="text"
              className="border text-[18px]  p-3 md:text-lg outline-none"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2">Postal code</label>
            <input
              type="text"
              className="border text-[18px]  p-3 md:text-lg outline-none"
              placeholder="Enter Potal code"
               value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>

          <div className="flex flex-col ">
            <label className="mb-2">Country</label>
            <input
              type="text"
              className="border text-[18px]  p-3 md:text-lg outline-none"
              placeholder="Enter country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="mt-[rem]">
            <Link className=" py-3 px-7 hover:bg-blue-600 rounded text-[14px] bg-black text-white">
              CONTINUE
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ShippingScreen;
