import React from "react";
import Layout from "../Layout/Layout";
import useWindowsize from "../../Hooks/useWindowsize";
// import icons and images
import { Icon } from "@iconify/react";
import Newsletterimg from "../../Images/newsletterimg.png";

export default function Newsletter() {
  let width = useWindowsize();
  return (
    <div className=" bg-DarkOrange mt-20 py-10 xmd:py-24">
      <Layout>
        <div className="grid grid-cols-1 xmd:grid-cols-2 w-full sm:w-3/4 xmd:w-full m-auto gap-5 items-end">
          {width > 992 && (
            <div className="text-center">
              <img src={Newsletterimg} alt="food" className="w-full" />
            </div>
          )}
          <div>
            <h2 className="text-white text-[56px] font-extrabold ">Newsletter</h2>
            <p className="text-white text-lg md:text-xl opacity-80 mt-2 sm:mt-4 md:mt-6">
              Sign up to receive updates and exclusive information from Company Take action against mentos waste today!
            </p>
            <div className="bg-white p-2 rounded-md flex items-center flex-wrap xs:flex-nowrap justify-between mt-16">
              <input
                type="text"
                placeholder="Enter your email"
                className="text-lg text-center xs:text-left leading-none px-4 pb-4 pt-2 xs:pb-0 xs:pt-0 text-black placeholder:text-gray-500 outline-none border-0 w-full"
              />
              <button className="bg-black w-full xs:w-auto text-white flex justify-center items-center uppercase font-bold px-5 py-[10px] rounded-md hover:bg-slate-700 duration-300 ease-in-out ">
                <span className="text-sm tracking-wider">subscribe</span>
                <span className="text-white ml-4 text-4xl">
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
