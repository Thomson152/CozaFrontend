/** @format */

import React from "react";
import Navbar from "../components/Navbar";
import CheckoutSteps from "../components/CheckoutSteps";
import { useDispatch, useSelector } from "react-redux";

const PlaceOrderSreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <Navbar />
      <div className="">
        <CheckoutSteps step1 step2 step3 step4 />
      </div>
      <div className="mt-[5rem]">
        <div className="w-[100%] px-10 flex  justify-between">
          <div className="w-[60%]  flex flex-col">
            <h1 className="md:text-2xl mb-3">SHIPPING</h1>
            <p>
              <strong>Address : </strong>
              {cart.shippingAddress.address}, {cart.shippingAddress.city}{" "}
              {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
            </p>
            <hr className="mt-4" />

            <div className="mt-8">
              <h2 className="mb-3 text-2xl">Payment Method</h2>
              <strong>Method: </strong>
              {cart.paymentMethod}
              <hr className="mt-4" />
            </div>

            <div className="mt-8">
              <h2 className="mb-3 text-2xl">Order Items</h2>
              
              {cart.cartItems.length === 0 ? (
                <h1>Your cart is empty </h1>
              ) : (
                <div className="">
                  {cart.cartItems.map((item, index)=>(
                    <div >
                      <h1>{item.name}</h1>
                      <img src={item.image} alt="" />
                    </div>
                  ))}
                </div>
              )}
              <hr className="mt-4" />
            </div>
          </div>

          <div className="max-w-[40%]"></div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderSreen;
