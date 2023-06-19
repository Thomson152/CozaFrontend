/** @format */

import Navbar from "../components/Navbar";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";


const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress.address) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod))
    history.push("/placeorder");
  };

  

  const handleMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

 
  return (
    <div>
      <Navbar />
      <CheckoutSteps step1 step2 step3 />
      <div className="">
        <div className="flex justify-center items-center h-[80vh]">
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">
              Select Payment Method
            </h2>
            <form onSubmit={submitHandler}>
              <div className="mb-4">
                <label
                  htmlFor="paymentMethod"
                  className="block font-medium mb-1"
                >
                  Payment Method
                </label>
                <select
                  id="paymentMethod"
                  className="w-full border-gray-300 border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={paymentMethod}
                  onChange={handleMethodChange}
                >
                  
                 
                  <option value="paypal">PayPal</option>
                   {/* <option value="strip">Strip</option> */}
                  
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                disabled={!paymentMethod}
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentScreen;
