/** @format */

import React from "react";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div className="flex mt-28 mb-6 justify-center ">
      <ul className="md:px-4 px-2">
        {step1 ? (
          <li>
            <Link to="/login" className="text-[18px]">Sign In</Link>
          </li>
        ) : (
          <Link disabled className="pointer-events-none text-gray-300" to="/login">
            Sign In
          </Link>
        )}
      </ul>

      <ul className="md:px-4 px-2">
        {step2 ? (
          <li>
            <Link to="/shipping" className="text-[18px]" >Shipping</Link>
          </li>
        ) : (
          <Link disabled className="pointer-events-none text-gray-300" to="/shipping">
            Shipping
          </Link>
        )}
      </ul>

      <ul className="md:px-4 px-2">
        {step3 ? (
          <li>
            <Link to="/payment" className="text-[18px]">Payment</Link>
          </li>
        ) : (
          <Link disabled className="pointer-events-none text-gray-300 text-[18px]" to="/payment">
            Payment
          </Link>
        )}
      </ul>

      <ul className="md:px-4 px-2">
        {step4 ? (
          <li>
            <Link to="/placeorder" className="text-[18px]">Place Order</Link>
          </li>
        ) : (
          <Link disabled className="pointer-events-none text-gray-300 text-[18px]" to="/placeorder" >
            Place Order
          </Link>
        )}
      </ul>
    </div>
  );
};

export default CheckoutSteps;
