import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
// import Images and icons
import Logo from "../../Images/logo.svg";
import { Icon } from "@iconify/react";
import Headphone from "../../Images/headphone.svg";

export default function Footer() {
  return (
    <div className="bg-black">
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-200 py-5 md:py-6 lg:py-8">
          <div>
            <img src={Logo} alt="logo" className="bg-transparent w-8/12 mb-5" />
            <p className="text-lg text-gray-200 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex items-center mt-5 ">
              <a
                href="https://facebook.com"
                className="w-10 h-10 rounded inline-flex justify-center items-center bg-slate-300 text-gray-500 hover:bg-orange-600 mr-3 
              hover:text-black duration-300 no-underline"
              >
                <Icon icon="akar-icons:youtube-fill" />
              </a>
              <a
                href="https://facebook.com"
                className="w-10 h-10 rounded inline-flex justify-center items-center bg-slate-300 text-gray-500 hover:bg-orange-600  mr-3
              hover:text-black duration-300 no-underline"
              >
                <Icon icon="akar-icons:linkedin-box-fill" />
              </a>
              <a
                href="https://facebook.com"
                className="w-10 h-10 rounded inline-flex justify-center items-center bg-slate-300 text-gray-500 hover:bg-orange-600  mr-3
              hover:text-black duration-300 no-underline"
              >
                <Icon icon="akar-icons:twitter-fill" />
              </a>
              <a
                href="https://facebook.com"
                className="w-10 h-10 rounded inline-flex justify-center items-center bg-slate-300 text-gray-500 hover:bg-orange-600  mr-3
              hover:text-black duration-300 no-underline"
              >
                <Icon icon="brandico:facebook" />
              </a>
              <a
                href="https://facebook.com"
                className="w-10 h-10 rounded inline-flex justify-center items-center bg-slate-300 text-gray-500 hover:bg-orange-600  mr-3
              hover:text-black duration-300 no-underline"
              >
                <Icon icon="akar-icons:instagram-fill" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 justify-between">
            <div className="grid grid-cols-1 gap-5">
              <h4 className="text-lg text-orange-600 uppercase font-bold tracking-wider ">
                quick links
              </h4>
              <Link className="normal-case tracking-wider" to="/">
                Link 1
              </Link>
              <Link className="normal-case tracking-wider" to="/">
                Link 2
              </Link>
              <Link className="normal-case tracking-wider" to="/">
                Link 3
              </Link>
              <Link className="normal-case tracking-wider" to="/">
                Link 4
              </Link>
              <Link className="normal-case tracking-wider" to="/">
                Link 5
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5">
              <h4 className="text-lg text-orange-600 capitalize font-bold tracking-wider ">
                title here
              </h4>
              <Link className="normal-case tracking-wider" to="/">
                Title name here
              </Link>
              <Link className="normal-case tracking-wider" to="/">
                Title name here
              </Link>
              <Link className="normal-case tracking-wider" to="/">
                Title name here
              </Link>
              <Link className="normal-case tracking-wider" to="/">
                Title name here
              </Link>
              <Link className="normal-case tracking-wider" to="/">
                Title name here
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg text-orange-600 uppercase font-bold tracking-wider mb-8 ">
              contact
            </h4>
            <p className="text-slate-200 text-lg leading-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit, natus?
            </p>
            <div className="mt-10 grid grid-flow-col flex-wrap gap-1">
              <img src={Headphone} alt="logo" />
              <span>
                <p>Have any question?</p>
                <p className="text-orange-600 font-bold tracking-wider">
                  +123 456 789
                </p>
              </span>
              <button className="px-7 py-3 text-xsm text-white font-bold border-2 border-orange-600 rounded-lg hover:bg-orange-600 duration-300 ">
                live chat
              </button>
            </div>
          </div>
        </div>
      </Layout>
      <div className="w-full border-t-2 border-gray-400"></div>
      <Layout>
        <p className="py-4 text-center text-white">
          Hotel Sarawak Food - <span>&copy;</span> 2022 All Rights Reserved
        </p>
      </Layout>
    </div>
  );
}
