/** @format */
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="flex-col px-5  group  md:px-0 ">
      <div className="relative  border shadow ">
        <img src={product.image} alt="" className="scale-100 hover:scale-125 ease-in duration-500" />

        <div
          className="absolute h-full w-full -bottom-0  bg-black/20  flex flex-col  items-center justify-end group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all ease-out duration-500"
        >
          <Link to={`/product/${product._id} `} className="bg-white text-black hover:bg-black relative bottom-10 hover:text-white md:text-lg font-semibold md:py-2 md:px-6  py-1 px-5 rounded-full">Quick View</Link>
        </div>
      </div>
      <Link to={`/product/${product._id} `}>
        <h1 className="md:text-lg text-[18px] font-semibold pt-3 pl-3">{product.name}</h1>
        <h3 className="md:text-lg text-[18px] text-gray-900 pl-3 pb-2">${product.price}</h3>
      </Link>
    </div>
  );
};

export default Product;
