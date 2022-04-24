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
      label: "Value 1",
      value: "value1",
      selected: true,
    },
    {
      label: "Value 2",
      value: "value2",
      selected: false,
    },
  ];

  return (
    <div className="mt-5">
      <Layout>
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
          <div className="mr-5">
            <Link to="/" className="inline-block w-40">
              <img src={Logo} alt="logo" className="w-full" />
            </Link>
          </div>
          <div className="flex-grow w-full my-5 md:my-0 mr-5">
            <input
              type="text"
              placeholder="Search by Name or category"
              className="w-full px-3 py-2 border-2 border-orange-500 focus:border-orange-800 rounded-md"
            />
          </div>
          <div className="flex items-center">
            <Select options={options} />
            <div className="ml-5">
              <CartContainer />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
