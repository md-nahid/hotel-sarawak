import React from "react";
import Layout from "../Layout/Layout";
// import icons and images
import { Icon } from "@iconify/react";
import Newsletterimg from "../../Images/newsletterimg.png";

export default function Newsletter() {
  return (
    <div className="py-5 sm:py-8 md-py-24  bg-DarkOrange">
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="text-center">
            <img
              src={Newsletterimg}
              alt="food"
              className="w-full sm:w-5/12 md:w-full"
            />
          </div>
          <div className="">
            <h2 className="text-white text-5xl md:text-6xl capitalize font-extrabold ">
              newsletter
            </h2>
            <p className="text-white text-sm sm:text-lg md:text-xl opacity-80 mt-2 sm:mt-4 md:mt-6">
              Sign up to receive updates and exclusive information from Company
              Take action against mentos waste today!
            </p>
            <div className="bg-white p-3 lg:pl-8 mt-6 md:mt-10 lg:mt-16 rounded-md lg:flex items-center justify-between">
              <input
                type="text"
                placeholder="Enter your email"
                className="text-lg leading-none text-black placeholder:text-gray-500 h-8 px-2 outline-none border-0"
              />
              <button className="bg-slate-800 text-white flex justify-center items-center uppercase font-bold px-5 h-16 rounded-md hover:bg-slate-700 duration-300 ease-in-out mt-3 lg:mt-0 w-full lg:w-auto">
                <span className="text-sm tracking-wider">subscribe</span>
                <span className="text-orange-400 ml-4 text-4xl">
                  <Icon icon="akar-icons:circle-chevron-right-fill" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
