/** @format */
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="flex-col px-5 h-fit group md:px-0 ">
      <div className="relative   ">
        <img src={product.image} alt="" />

        <div
          className="absolute h-full w-full -bottom-0  bg-black/20  flex flex-col  items-center justify-end group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all ease-out duration-500"
        >
          <Link to={`/product/${product._id} `} className="bg-white text-black hover:bg-black relative bottom-10 hover:text-white text-lg font-semibold py-2 px-6 rounded-full">Quick View</Link>
        </div>
      </div>
      <Link to={`/product/${product._id} `}>
        <h1 className="text-lg font-semibold ">{product.name}</h1>
        <h3 className="text-lg text-gray-900">${product.price}</h3>
      </Link>
    </div>
  );
};

export default Product;
