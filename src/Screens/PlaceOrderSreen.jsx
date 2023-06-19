/** @format */

import React from "react";
import Navbar from "../components/Navbar";
import CheckoutSteps from "../components/CheckoutSteps";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PlaceOrderSreen = () => {


  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);


  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100)
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2)

  return (
    <div>
      <Navbar />
      <div className="">
        <CheckoutSteps step1 step2 step3 step4 />
      </div>
      <div className="mt-[5rem]">
        <div className="w-[100%] px-10 flex md:flex-row flex-col justify-between">
          <div className="md:w-[60%] w-[100%]  flex flex-col">
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
                  {cart.cartItems.map((item, index) => (
                    <table >
                      <tbody >
                        <tr className="">
                          <td > <img src={item.image} alt="" className="w-[80px] py-1" /> </td>
                          <td > <Link to={`/product/${item.product}`} className="px-[1rem]">
                            {item.name}
                          </Link> </td>
                          <td>
                            {item.qty} X ${item.price} = ${item.qty * item.price}
                          </td>
                        </tr>

                      </tbody>

                    </table>
                  ))}
                </div>
              )}
              <hr className="mt-4" />
            </div>
          </div>

          <div className="md:w-[30%] ">
            <div className="bg-white rounded-md justify-center shadow p-4">
              <h2 className="text-lg font-semibold mb-4">ORDER SUMMARY</h2>
              <ul >

                <li className="flex justify-between">
                  <span className="font-medium">Items</span>
                  <span>${cart.itemsPrice}</span>
                </li>

                <li className="flex justify-between mt-3">
                  <span className="font-medium">Shipping</span>
                  <span>${cart.shippingPrice}</span>
                </li>

                <li className="flex justify-between mt-3">
                  <span className="font-medium">Tax</span>
                  <span>${cart.taxPrice}</span>
                </li>


              </ul>
              <div className="mt-4 flex justify-between">
                <span className="font-medium">Total:</span>
                <span className="font-semibold">${cart.totalPrice}</span>
              </div>

              <button className="w-[100%] border mt-10 bg-black py-4">

              <Link  className=" bg-black text-white w-[100%]  rounded py-2"> PLACE ORDER</Link>
              </button>



            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderSreen;
