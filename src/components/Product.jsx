/** @format */
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="flex-col px-5 md:px-0 ">
      <div className=" ">
        <Link to={`/product/${product._id}`}>
          <img src={product.image} alt="" className="scale-100  ease-in duration-500 " />
        </Link>


        <Link to={`/product/${product._id} `}>
        <h1 className="text-lg font-semibold ">{product.name}</h1>
        <h3 className="text-lg text-gray-900">${product.price}</h3>
        </Link>
      </div>

  
    </div>
  );
};

export default Product;
