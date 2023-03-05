/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { RiDeleteBin6Line } from "react-icons/ri";
import img1 from "../images/banner-01.jpg";

const CartScreen = () => {
  return (
    <div className="">
      <Navbar />

      <div className="mt-[7rem] mb-24 flex flex-col px-6 md:px-0 md:flex-row container  md:mx-auto">
        <div className="md:w-[65%] w-[100%]">
          <h1 className="text-2xl font-bold mb-7">SHOPPING CART</h1>
          <div class="relative overflow-x-auto b">
            <table class=" text-sm border text-left text-gray-500 dark:text-gray-400">
              <thead class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-slate-100 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" class="md:px-6 px-[6rem] py-3">
                    PRICE
                  </th>
                  <th scope="col" class="px-6 py-3">
                    QUANTITY
                  </th>
                  <th scope="col" class="px-6 py-3">
                    TOTAL
                  </th>
                  <th scope="col" class="px-6 py-3">
                    REMOVE
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:text-gray-400 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="flex items-center">
                      <img
                        src={img1}
                        className="md:w-[30%] h-[50%] w-[50%]"
                        alt=""
                      />
                      <h6 className="ml-4 text-lg">Apple MacBook Pro 17"</h6>
                    </div>
                  </th>
                  <td class="md:px-6 px-[7rem] md:py-4 text-lg">$1000</td>
                  <td class="px-6 py-[5rem]">
                    <div className="flex border-2 items-center">
                      <button className=" py-2  px-4 font-medium text-2xl ">
                        -
                      </button>
                      <div className="py-2 border bg-gray-100 px-4 font-medium text-xl">
                        0
                      </div>
                      <button className="py-2  px-4 font-medium text-2xl">
                        +
                      </button>
                    </div>
                  </td>
                  <td class="px-6 py-4 text-lg">$2999</td>

                  <td class="px-6 py-4 text-lg ">
                    {" "}
                    <RiDeleteBin6Line className="text-red-500" />
                  </td>
                </tr>

                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="flex items-center">
                      <img
                        src={img1}
                        className="md:w-[30%] h-[50%] w-[50%] "
                        alt=""
                      />
                      <h6 className="ml-4 text-lg">Apple MacBook Pro 17"</h6>
                    </div>
                  </th>
                  <td class="md:px-6 px-[7rem] md:py-4 text-lg ">$1000</td>
                  <td class="px-6 py-[5rem]">
                    <div className="flex border-2 items-center">
                      <button className=" py-2  px-4 font-medium text-2xl ">
                        -
                      </button>
                      <div className="py-2 border bg-gray-100 px-4 font-medium text-xl">
                        0
                      </div>
                      <button className="py-2  px-4 font-medium text-2xl">
                        +
                      </button>
                    </div>
                  </td>
                  <td class="px-6 py-4 text-lg">$2999</td>

                  <td class="px-6 py-4 text-lg ">
                    {" "}
                    <RiDeleteBin6Line className="text-red-500" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="md:w-[30%] pb-8 w-[100%] h-[100%] md:ml-10 border px-5   mt-[4rem]">
          <h1 className="text-xl py-4 text-left font-bold">CART TOTALS</h1>
          <h3 className="text-lg  mb-7 border-b font-medium">Subtotal:</h3>

          <Link className="bg-black rounded-sm px-10 font-bold  md:mx-9 text-center items-center text-white py-3 ">
            PROCEED TO CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
