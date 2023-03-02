/** @format */

import React from "react";


const Footer = () => {
  return (
    <footer className="bg-slate-800 ">
      <div className="container space-y-10 md:space-y-0 px-6 justify-between flex-col md:flex-row py-20 text-white flex mx-auto">
        <div className=" space-y-4">
          <h2 className="font-semibold text-xl">CATEGORIES</h2>

          <ul className="flex space-y-2 text-slate-300 flex-col text-lg">
            <li>Women</li>
            <li>Men</li>
            <li>Shoes</li>
            <li>Watches</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-xl">HELP</h2>

          <ul className="flex space-y-2 text-slate-300 flex-col text-lg">
            <li>Track Order</li>

            <li>Returns</li>
            <li>Shipping</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-xl">GET IN TOUCH</h2>

          <p className="max-w-sm text-lg text-slate-300">
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className="">
            
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <h2 className="font-semibold text-xl">NEWSLETTER</h2>

         {/* <input type="text" placeholder="email@example.com"  className="w-"/> */}

      
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
