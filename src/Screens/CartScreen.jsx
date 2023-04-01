/** @format */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import img1 from "../images/banner-01.jpg";
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="">
      <Navbar />

      {cartItems.length === 0 ? (
        <div className="mt-[10rem] ml-20 mb-[25rem]">
          Your cart is empty <Link to="/">Go Back</Link>
        </div>
      ) : (
        <>
          <div className="mt-[7rem] mb-24 md:space-x-5 flex flex-col px-6 md:px-0 md:flex-row container  md:mx-auto">
            <div className="md:w-[70%] w-[100%]">
              <h1 className="md:text-2xl text-xl font-bold mb-7">
                SHOPPING CART
              </h1>
              <div className="">
                <div class="relative overflow-x-auto">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                      <tr>
                        <th scope="col" class="px-6  text-lg font-bold py-3">
                          Product
                        </th>
                        <th
                          scope="col"
                          class="md:px-[6rem] px-[8rem] text-lg font-bold  py-3"
                        >
                          Price
                        </th>
                        <th scope="col" class="px-6 text-lg font-bold  py-3">
                          quantity
                        </th>

                        <th scope="col" class="px-6 text-lg font-bold  py-3">
                          Remove
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            class=" py-14 px-5 flex items-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <img
                              src={item.image}
                              className="md:w-[40%]  w-[50%]"
                              alt=""
                            />
                            <h4 className="text-lg ml-2"> {item.name}</h4>
                          </th>
                          <td class="md:px-20 px-[8rem] md:py-4 text-lg">
                            {item.price}
                          </td>
                          <td class="px-6 py-[5rem]">
                            {/* <div className="flex border-2 items-center">
                              <button className=" py-2  px-4 font-medium text-2xl ">
                                -
                              </button>
                              <div className="py-2 border bg-gray-100 px-4 font-medium text-xl">
                                {item.qty}
                              </div>
                              <button className="py-2  px-4 font-medium text-2xl">
                                +
                              </button>
                            </div> */}

                            <select
                              as="select"
                              value={item.qty}
                              onChange={(e) =>
                                dispatch(
                                  addToCart(
                                    item.product,
                                    Number(e.target.value)
                                  )
                                )
                              }
                              className="outline-0 
                            border md:w-18 p-4 bg-gray-100 w-20 "
                            >
                              {[...Array(item.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </select>
                          </td>

                          <td class="px-6 py-4 text-lg ">
                            {" "}
                            <RiDeleteBin6Line
                              className="text-red-500"
                              onClick={() =>
                                removeFromCartHandler(item.product)
                              }
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="md:w-[30%] pb-8 flex flex-col w-[100%] h-[100%]  border px-5   mt-[4rem]">
              <h1 className="text-xl py-4 text-left font-bold">CART TOTALS</h1>
              <h3 className="text-lg  mb-7 border-b font-medium">
                Subtotal:({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items : $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </h3>

              <Link className="bg-black rounded px-10 font-bold  md:mx-0 text-center items-center text-white py-4 ">
                PROCEED TO CHECKOUT
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartScreen;
