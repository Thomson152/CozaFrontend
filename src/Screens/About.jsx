/** @format */

import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import about1 from "../images/about-01.jpg";
import about2 from "../images/about-02.jpg";

const About = () => {
  return (
    <div className="">
      <Navbar />

      <div className="aboutBanner mt-10 justify-center items-center flex">
        <h1 className="md:text-7xl text-4xl font-sans font-bold text-white">About</h1>
      </div>

      <div className="flex container mx-auto my-14 md:flex-row flex-col px-3 justify-between ">
        <div className="md:w-[60%] w-[100%]">
          <h1 className="text-4xl font-bold text-slate-700">Our Story</h1>
          <p className="text-lg mt-3 font-sans text-slate-500 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            consequat consequat enim, non auctor massa ultrices non. Morbi sed
            odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Maecenas varius egestas diam, eu sodales metus
            scelerisque congue. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas. Maecenas gravida
            justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus
            ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt
            vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec
            condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a
            tempor elit.
          </p>

          <p className="text-lg mt-6 font-sans  text-slate-500 font-normal">
            Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce
            eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla
            turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida.
            Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu
            sodales lectus sagittis. Etiam pellentesque, magna vel dictum
            rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem.
            Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum,
            et maximus enim ligula ac ligula.
          </p>

          <p className="text-lg mt-6 font-sans  text-slate-500 font-normal">
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 or call us on (+1) 96 716 6879
          </p>
        </div>

        <div className="md:w-[30%] mt-16 md:h-[50%] w-[100%] p-6 md:p-2 border-4 overflow-hidden ">
          <img
            src={about1}
            alt=""
            className="w-[100%] scale-100 hover:scale-125 ease-in duration-500"
          />
        </div>
      </div>

      <div className="flex items-center container mx-auto my-14 md:flex-row flex-col-reverse px-3 justify-between  ">
        <div className="md:w-[30%] mt-16 md:h-[50%] w-[100%] p-6 md:p-2 border-4 overflow-hidden ">
          <img
            src={about2}                                           
            alt=""
            className="w-[100%] scale-100 hover:scale-125 ease-in duration-500"
          />                                                                                                                  
        </div>

        <div className="md:w-[60%] w-[100%]">
        <h1 className="text-4xl font-bold text-slate-700">Our Mission</h1>
          <p className="text-lg mt-3 font-sans text-slate-500 font-normal">
          Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
