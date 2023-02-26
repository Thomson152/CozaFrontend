/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Ratings from "../components/Ratings";
import products from "../Prdouct";

const ProductScreen = ({ match }) => {
  const [qty, setQty] = useState(1);
  const product = products.find((p) => p._id === match.params.id);

  return (
    <div>
      <Navbar />

      <div className=" container px-8 flex items-center flex-col md:flex-row my-28  mx-auto">
        <div className="md:w-1/2  ">
          <img src={product.image} className="w-[80%]  h-[90%]" />
        </div>

        <div className="md:w-1/2 md:py-16  py-8">
          <h1 className=" md:text-5xl text-3xl font-bold">{product.name}</h1>
          <h4 className="text-2xl py-3 font-semibold">${product.price}</h4>

          <Ratings
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />

          <div className="flex py-5 flex-col">
            <h1 className="text-xl font-bold">Description:</h1>
            <p className="text-lg">{product.description}</p>
          </div>

          {/* <select value={qty} onChange={(e) => setQty(e.target.value)}>
            <option>
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </option>
          </select> */}
          <Link
            to="/cart"
            className="bg-black py-2 hover:bg-blue-500 hover:text-white  px-6 text-lg rounded-full text-white"
          >
            {" "}
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
