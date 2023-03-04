/** @format */

import React from "react";
import Navbar from "../components/Navbar";
import img1 from "../images/banner-01.jpg";

const CartScreen = () => {
  return (
    <div className="">
      <Navbar />

      <div className="mt-[10rem] mb-24  container md:mx-auto">
        <div class="relative overflow-x-auto b">
          <table class="md:w-[60%] w-[100%] text-sm border-2 text-left text-gray-500 dark:text-gray-400">
            <thead class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex items-center">
                    <img src={img1} className="md:w-[30%] w-[50%]" alt="" />
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
                    <button className="py-2  px-4 font-medium text-2xl">+</button>
                  </div>
                </td>
                <td class="px-6 py-4 text-lg">$2999</td>
              </tr>


              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex items-center">
                    <img src={img1} className="md:w-[30%] w-[50%] " alt="" />
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
                    <button className="py-2  px-4 font-medium text-2xl">+</button>
                  </div>
                </td>
                <td class="px-6 py-4 text-lg">$2999</td>
              </tr>
              
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
