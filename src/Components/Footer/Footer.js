import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { socialData } from "./Footer.data";
import useWindowsize from "../../Hooks/useWindowsize";
// import Images and icons
import MobileLogo from "../../Images/mobilelogo.svg";
import Headphone from "../../Images/headphone.svg";

export default function Footer() {
  let width = useWindowsize();
  return (
    <div className="bg-black px-2 xmd:px-5 xl:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-200 py-10 md:py-24">
        <div>
          <Link to="/" className="inline-block">
            <img src={MobileLogo} alt="logo" className="w-16" />
          </Link>
          <p className="text-lg text-gray-200 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="grid grid-cols-[20px_20px_20px_20px] gap-5 mt-5">
            {socialData.map((item) => (
              <a key={item.name} href="https://facebook.com" className="inline-block hover:opacity-70">
                <img src={item.img} alt={item.name} />
              </a>
            ))}
          </div>
        </div>
        {width > 767 && (
          <div className="text-center">
            <h4 className="text-lg text-orange-600 uppercase font-bold tracking-wider">quick links</h4>
            <div className="mt-9 inline-flex flex-col">
              {Array.from({ length: 5 }, (_, i) => (
                <Link key={i} className="normal-case tracking-wider hover:text-orange-500 mt-3" to="/">
                  About Us
                </Link>
              ))}
            </div>
          </div>
        )}
        <div>
          <h4 className="text-lg text-orange-600 uppercase font-bold tracking-wider mb-8">contact</h4>
          <p className="text-slate-200 text-lg leading-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, natus?</p>
          <div className="flex items-center flex-wrap">
            <div className="flex items-center mr-10 mt-10">
              <img src={Headphone} alt="logo" className="mr-10" />
              <span>
                <p>Have any question?</p>
                <p className="text-orange-600 font-bold tracking-wider">+123 456 789</p>
              </span>
            </div>
            <button className="px-7 py-3 max-w-[189px] w-full mt-10 text-xsm text-white font-bold border-2 border-orange-600 rounded-lg hover:bg-orange-600 duration-300 ">
              live chat
            </button>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-orange-800"></div>
      <Layout>
        <p className="py-4 text-center text-white">
          <span>&copy;</span> Hotel Sarawak Food - 2022 All Rights Reserved
        </p>
      </Layout>
    </div>
  );
}
