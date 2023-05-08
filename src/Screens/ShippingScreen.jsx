/** @format */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

const ShippingScreen = ({history}) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    history.push('/payment')
  }
  return (
    <div className="">
      <Navbar />
      <CheckoutSteps step1 step2/>
      <div className=" flex  flex-col border-2 w-[90%] lg:w-[50%] items-start lg:items-center mx-[auto] mb-10 container shadow py-[5rem]  ">
        <div className="mb-10 lg:mb-3 pl-7">
          <h1 className="lg:text-4xl  text-2xl">Shipping</h1>
        </div>

        <form  onSubmit={submitHandler} className="flex-col px-3  w-[100%] lg:w-[80%] lg:mt-10  space-y-6">
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
          <div className="">
            <button type='submit' className=" py-3 px-7 hover:bg-blue-600 rounded text-[16px] bg-black text-white">
              Continue
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ShippingScreen;
