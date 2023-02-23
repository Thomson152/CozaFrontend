/** @format */
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="flex flex-col px-5 md:px-0 ">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt="" />
      </Link>

      <Link to={`/product/${product._id}`}>
        <h1 className="text-lg font-semibold">{product.name}</h1>
        <h3 className="text-lg text-gray-900">${product.price}</h3>
      </Link>
    </div>
  );
};

export default Product;
