/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Ratings from "../components/Ratings";

import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import Loader from "../components/Loader";

const ProductScreen = ({ match }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id)); //Getting id from the url
  }, [dispatch, match]);

  return (
    <div>
      <Navbar />
      <Link
        to="/shop"
        className="text-xl relative top-32 md:left-24 left-14 py-3  text-black rounded-full"
      >
        Go Back
      </Link>

      {loading ? (
        <Loader />
      ) : error ? (
        error
      ) : (
        <div className=" container px-8 flex items-center flex-col md:flex-row my-40  mx-auto">
          <div className="md:w-1/2  ">
            <img src={product.image} className="md:w-[80%]  md:h-[90%]" />
          </div>

          <div className="md:w-1/2 md:py-16  py-8">
            <h1 className=" md:text-5xl text-2xl font-bold">{product.name}</h1>
            <h4 className="text-2xl py-3 font-semibold">${product.price}</h4>

            <Ratings
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
            <div className="flex pt-3 items-center">
              <h1 className="text-lg  font-bold">Status:</h1>
              <p className=" px-3 font-semibold text-lg">
                {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
              </p>
            </div>

            <div className="flex pt-3 flex-col">
              <h1 className="text-xl font-bold">Description:</h1>
              <p className="text-lg py-2">{product.description}</p>
            </div>

            <div className="pt-3 ">
              <select
                as="select"
                value={qty}
                className="outline-0 border md:w-20 p-4 bg-gray-100 w-20 ml-3"
                onChange={(e) => setQty(e.target.value)}
              >
                {[...Array(product.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
              <Link
                to="/cart"
                className="bg-black py-2 mx-2 text-center hover:bg-blue-500 hover:text-white m px-6 text-lg rounded-full text-white"
              >
                {" "}
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
