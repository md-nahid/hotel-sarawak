import React from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import ProductCarousel from "../Components/ProductCarousel/ProductCarousel";
// import icons and images
import { Icon } from "@iconify/react";
import Giftbox from "../Images/giftbox.svg";
import Mobile from "../Images/mobile.svg";
import Offerimg from "../Images/offerimg.png";
import Restaurantlogo from "../Images/restaurantlogo.png";

export default function ProductDetails() {
  // let { productid } = useParams();
  return (
    <div>
      <Layout>
        <div className="mt-10 mb-10 grid grid-flow-col sm:grid-cols-[100px_1fr] gap-5">
          <div className="hidden sm:block"></div>
          <div>
            <h2 className="text-xl sm:text-2xl text-slate-900 font-medium capitalize">Three (3) Mini Cheesecakes</h2>
            <p className="text-sm text-black font-normal capitalize">Purple Monkey</p>
          </div>
        </div>
        {/* big grid start  */}
        <div className="grid grid-cols-1 xmd:grid-cols-[1fr_0.5fr] gap-6">
          {/* grid first column  */}
          <div className="mb-10">
            <ProductCarousel />
            <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-5 mt-5 sm:mt-10">
              <div className="hidden sm:block"></div>
              <div className="flex flex-wrap justify-between items-center text-sm font-normal">
                <p className="flex items-center">
                  <span className="mr-3">
                    <Icon icon="uil:calender" />
                  </span>
                  <span>Redeem offer from Today until Tue 15, Mar 2022</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-3">
                    <Icon icon="ic:baseline-call" />
                  </span>
                  <span>No reservation required</span>
                </p>
              </div>
            </div>
            <div className="bg-white rounded shadow-md mb-5">
              <h4 className="p-4 text-lg font-semibold text-black">How to redeem</h4>
              <div className="p-4 border-y-[1px] border-slate-200 flex items-center">
                <img src={Restaurantlogo} alt="icon" className="w-[52px] mr-2" />
                <div>
                  <h4 className="p-4 text-lg font-semibold text-black">Tosaya Japanese Restaurant</h4>
                  <p className="text-lg font-normal my-4">Cheras</p>
                  <div>
                    <div>
                      <span>
                        <Icon icon="bxs:star" />
                      </span>
                      <span>4.8</span>
                    </div>
                    <div>
                      <span>
                        <Icon icon="ic:round-favorite" />
                      </span>
                      <span>123 faves</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* big grid second column start */}
          <div className="hidden xmd:block">
            {/* first box start  */}
            <div className="bg-white shadow-md py-5 rounded-md mb-5">
              <h4 className="text-2xl text-black font-semibold border-b border-slate-200 pb-2 px-4">Price Variant</h4>
              <div className="px-4 py-5 border-b border-slate-200 ">
                <p className="flex items-center text-red-600 font-bold">
                  <span>RM 15.00</span>
                  <span className="ml-5 mr-2 text-gray-400">Save</span>
                  <span>RM 7.00</span>
                </p>
                <div className="flex justify-between items-end mt-6">
                  <div>
                    <h3 className="text-3xl font-bold text-red-600">RM 15.00</h3>
                    <p className="text-lg font-semibold text-slate-800">Per person</p>
                  </div>
                  <button className="capitalize text-[16px] font-bold rounded-lg bg-black text-yellow-400 py-1 px-2 cursor-pointer border-2 border-black hover:bg-transparent hover:text-black duration-200">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="px-4 py-5 border-t border-slate-200">
                <p className="text-red-600 text-xl font-bold">Limited time offer</p>
                <div className="flex justify-between items-end mt-6">
                  <div>
                    <h3 className="text-3xl font-bold text-red-600">RM 15.00</h3>
                    <p className="text-lg font-semibold text-slate-800">Per person</p>
                  </div>
                  <button className="capitalize text-[16px] font-bold rounded-lg bg-black text-yellow-400 py-1 px-2 cursor-pointer border-2 border-black hover:bg-transparent hover:text-black duration-200">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white rounded shadow-md mb-5">
              <div className="border-[1px] border-slate-800 rounded-md p-2 mr-3 flex items-center">
                <span className="mr-2">
                  <Icon icon="material-symbols:favorite" />
                </span>
                <span>Add to whishlist</span>
              </div>
              <button className="flex items-center rounded px-4 py-2 bg-blue-500 text-xl text-white font-normal">
                <span>
                  <Icon icon="ei:sc-facebook" />
                </span>
                <span className="mx-2">Share</span>
                <span>0</span>
              </button>
            </div>
            <div className="bg-white rounded shadow-md mb-5">
              <h4 className="p-4 text-lg font-semibold text-black">How to redeem</h4>
              <div className="p-4 border-y-[1px] border-slate-200 flex items-center">
                <img src={Giftbox} alt="icon" className="w-[52px] mr-5" />
                <p className="text-lg font-normal">Love gifting? Gift this deal to your Fave-ourite person!</p>
              </div>
              <div className="p-4">
                <Link to="/" className=" text-blue-400 text-lg font-normal underline">
                  How it works
                </Link>
              </div>
            </div>
            <div className="bg-white rounded shadow-md mb-5">
              <h4 className="p-4 text-lg font-semibold text-black">How to redeem</h4>
              <div className="p-4 border-y-[1px] border-slate-200 flex items-center">
                <img src={Mobile} alt="icon" className="w-[52px] mr-2" />
                <p className="text-lg font-normal">You can easily redeem from your phone. No printout required.</p>
              </div>
              <div className="p-4">
                <Link to="/" className=" text-blue-400 text-lg font-normal underline">
                  View Redemption Instruction
                </Link>
              </div>
            </div>
            <div className="bg-white rounded shadow-md mb-5">
              <h4 className="p-4 text-lg font-semibold text-black">Cancellation Policy</h4>
              <div className="p-4 border-y-[1px] border-slate-200">
                <p className="text-lg font-normal">Cancel using your Fave app within the next 3 days and receive a full refund in Fave cashback</p>
              </div>
            </div>
            <div className="shadow-md">
              <button className="w-full rounded overflow-hidden">
                <img src={Offerimg} alt="icon" className="w-full" />
              </button>
            </div>
            {/* first box end  */}
          </div>
          {/* big grid second column end  */}
        </div>
      </Layout>
    </div>
  );
}
