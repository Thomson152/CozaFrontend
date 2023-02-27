/** @format */

import React from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import products from "../Prdouct";
import Loader from "../components/Loader";
import { listProducts } from "../actions/productActions";
import { useEffect } from "react";
const ShopScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <div className="container md:mx-auto mt-[10rem]">
      {loading ? (
           <Loader/>
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            <div className="grid gap-8 mb-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          )}
      </div>
    </>
  );
};

export default ShopScreen;
