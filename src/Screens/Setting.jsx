import React from 'react'
import Navbar from '../components/Navbar'
import profile from "../images/profile.jpeg";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../components/Footer';


const Setting = () => {
  return (
    <div>
      <Navbar/>
      <div className="relative top-[8rem] ml-4 md:ml-10  ">
      <Link to='/profile' className = 'p-4 py-3 rounded text-bg font-bold bg-black text-white'>Go Back</Link>
      </div>
      
      <div className="flex flex-col md:flex-row md:justify-center mb-[10rem] md:items-center mt-[12rem] container">

      
        <div className="md:w-[50%] items-center justify-center flex ">
          
          <div className="md:w-[50%] md:h-[35vh] w-40 h-40 rounded-full ">
            <img src={profile} alt=""  className="md:w-[100%] md:h-[35vh] w-40 h-40 rounded-full "/>
          </div>
        </div>
        <div className="md:w-[50%] px-[1rem] md:px-[2rem] my-20 ">
          <h4 className="md:text-left text-center font-bold md:text-3xl text-2xl">
            Update Information
          </h4>

          <form className="flex flex-col space-y-6 mt-6">
            <input placeholder='Name'  className="border  p-3  text-lg outline-none"/>

            <input placeholder='Email Address'  className="border  p-3  text-lg outline-none"/>
      

            <input placeholder='Password'  className="border  p-3  text-lg outline-none"/>
      

            <input placeholder='Confirm Password'  className="border  p-3  text-lg outline-none"/>

            <button
              type="submit"
              className="hover:bg-blue-800 text-white px-14 text-center py-3 rounded-md text-xl bg-black "
            >
              <Link>Update</Link>
            </button>
      
          </form>
       
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Setting