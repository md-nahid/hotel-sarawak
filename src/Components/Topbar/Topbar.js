import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import Select from "../Select/Select";
// import images
import Logo from "../../Images/logo.svg";
import CartContainer from "../CartContainer/CartContainer";

export default function Topbar() {
  // location select options
  const options = [
    {
      label: "Loation",
      value: "location",
      selected: true,
    },
    {
      label: "Location 1",
      value: "location1",
      selected: false,
    },
  ];

  return (
    <div className="mt-2 md:mt-5 p-2 md:py-5 sticky top-0 bg-white z-50">
      <Layout>
        <div className="grid grid-cols-2 sm:grid-cols-3 xmd:grid-cols-[160px_2fr_0.5fr_0.9fr] gap-3 xmd:gap-5">
          <div className="flex items-center">
            <Link to="/" className="inline-block w-full sm:w-40">
              <img src={Logo} alt="logo" className="w-full" />
            </Link>
          </div>
          <div className="w-full md:my-0 mr-5 order-4 col-span-2 sm:col-span-3 xmd:col-span-1 xmd:order-2">
            <input
              type="text"
              placeholder="Search by Name or category"
              className="w-full text-lg px-3 py-2 border-2 outline-none border-orange-500 focus:border-orange-400 rounded-md"
            />
          </div>
          <div className="hidden sm:block order-2 xmd:order-3">
            <Select options={options} />
          </div>
          <div className="order-2 xmd:order-4">
            <CartContainer />
          </div>
        </div>
      </Layout>
    </div>
  );
}
