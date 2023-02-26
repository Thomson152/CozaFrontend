/** @format */

import React from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import products from "../Prdouct";
const ShopScreen = () => {
  return (
    <>
      <Navbar />

      <div className="container md:mx-auto mt-[10rem]">
        <div className="grid gap-8 mb-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product._id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopScreen;
