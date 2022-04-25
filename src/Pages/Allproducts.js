import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Productfilter from "../Components/Productfilter/Productfilter";
// import images
import Bigimg from "../Images/bigimg.png";

export default function Allproducts() {
  return (
    <div>
      <Layout>
        <div className="h-40 my-10 overflow-hidden relative">
          <img src={Bigimg} alt="bigimg" className="w-full object-cover" />
          <div className="absolute left-0 top-0 bg-slate-800 bg-opacity-70 w-full h-full flex justify-center items-center">
            <h2 className="text-yellow-400 text-5xl font-bold capitalize">
              discover the right food
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-[260px_1fr] gap-5 mb-10">
          <div>
            <Productfilter />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </Layout>
    </div>
  );
}
