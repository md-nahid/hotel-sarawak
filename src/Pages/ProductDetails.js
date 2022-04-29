import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import ProductCarousel from "../Components/ProductCarousel/ProductCarousel";
import Card from "../Components/Card/Card";
// import icons and images
import { Icon } from "@iconify/react";
import Giftbox from "../Images/giftbox.svg";
import Mobile from "../Images/mobile.svg";
import Offerimg from "../Images/offerimg.png";
import Restaurantlogo from "../Images/restaurantlogo.png";
import Menuimg1 from "../Images/menuimg1.png";
import Menuimg2 from "../Images/menuimg2.png";
import Menuimg3 from "../Images/menuimg3.png";
import Menuimg4 from "../Images/menuimg4.png";
import Customerimg from "../Images/customerimg.png";

export default function ProductDetails() {
  // let { productid } = useParams();3
  let navigate = useNavigate();
  const [product, setProduct] = useState([]);
  // set all products
  useEffect(() => {
    fetch("products.json")
      .then((req) => req.json())
      .then((res) => setProduct(res.meals));
  }, []);

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
        {/* big grid first column start  */}
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
            <div className="bg-white rounded shadow-md mb-5 mt-5">
              <h4 className="p-4 text-lg font-semibold text-black">How to redeem</h4>
              <div className="p-4 border-t border-slate-200 flex flex-wrap items-center">
                <div className="max-w-[200px] w-full m-auto sm:m-0">
                  <img src={Restaurantlogo} alt="icon" className="w-full" />
                </div>
                <div className="mt-5 ml-5">
                  <h4 className="text-lg font-semibold text-black">Tosaya Japanese Restaurant</h4>
                  <p className="text-lg font-normal my-2">Cheras</p>
                  <div className="flex items-center">
                    <div className="inline-flex items-center mr-5 bg-teal-800 text-yellow-400 py-1 px-3 rounded-md">
                      <span className="mr-3 ">
                        <Icon icon="bxs:star" />
                      </span>
                      <span>4.8</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-3 text-red-600">
                        <Icon icon="ic:round-favorite" />
                      </span>
                      <span>123 faves</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded shadow-md mb-5 mt-5">
              <h4 className="p-4 text-lg font-semibold text-black">What you get</h4>
              <div className="p-4 border-t border-slate-200">
                <h4 className="text-sm xs:text-lg font-semibold text-black pb-3">One (1) Japanese set meal (choose from):</h4>
                <ul className="text-sm xs:text-sm list-disc ml-8">
                  <li>Salmon Sashimi, Salmon Teriyaki and Udon set</li>
                  <li>Ay Spicy Tonkotsu Nabe and Sushi set</li>
                  <li>Sanma Kuwayaki set</li>
                  <li>Sanma Kabayaki set</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded shadow-md mb-5 mt-5">
              <h4 className="p-4 text-lg font-semibold text-black">Fine Print</h4>
              <div className="p-4 border-t border-slate-200">
                <ul className="text-sm xs:text-sm list-disc ml-8">
                  <li>Valid Tue - Sun: Lunch: 12.00pm - 2.30pm. Dinner: 6pm - 10:30pm. Valid on public holidays.Close on Mon.</li>
                  <li>Strictly valid for dine-in only.</li>
                  <li>Not valid with other offers / promotions / discounts.</li>
                  <li>Price includes service charges.</li>
                  <li>No extension on the redemption of voucher that is expired.</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded shadow-md mb-5 mt-5">
              <h4 className="p-4 text-lg font-semibold text-black">Redemption Instructions</h4>
              <div className="p-4 border-t border-slate-200">
                <ul className="text-sm xs:text-sm list-disc ml-8">
                  <li>Reservation recommended.</li>
                  <li>Booking subject to availability.</li>
                  <li>Please ensure that your reservation is made within the validity period stated on your voucher.</li>
                  <li>Call / Whatsapp +123456789 for booking with:</li>
                  <li>Name</li>
                  <li>Date and time of reservation</li>
                  <li>Fave Receipt ID (refer to your Fave voucher)</li>
                  <li>Present your Fave voucher (it’s under the ‘Me’ tab) at the outlet.</li>
                </ul>
              </div>
            </div>
            {/* menu gallary */}
            <div className="bg-white rounded shadow-md mb-5 mt-5">
              <h4 className="p-4 text-lg font-semibold text-black">Menu</h4>
              <div className="p-4 border-t border-slate-200 grid grid-cols-4 gap-5">
                <img src={Menuimg1} alt="menu" className="w-full" />
                <img src={Menuimg2} alt="menu" className="w-full" />
                <img src={Menuimg3} alt="menu" className="w-full" />
                <img src={Menuimg4} alt="menu" className="w-full" />
              </div>
            </div>
            {/* customers reviews  */}
            <div className="bg-white rounded shadow-md mb-5 mt-5">
              <h4 className="p-4 text-lg font-semibold text-black">What customers like about Tosaya Japanese Restaurant</h4>
              <div className="border-t border-slate-200">
                {/* customer review  */}
                <div className="p-4 border-b border-slate-200 flex items-center">
                  <div className="w-14 rounded-full mr-5">
                    <img src={Customerimg} alt="customer name" className="w-full" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black">Ivy Tee</h4>
                    <p>nice taste and not crowded</p>
                  </div>
                </div>
                <div className="p-4 border-b border-slate-200 flex items-center">
                  <div className="w-14 rounded-full mr-5">
                    <img src={Customerimg} alt="customer name" className="w-full" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black">Ivy Tee</h4>
                    <p>nice taste and not crowded</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center py-6">
                <button className="bg-slate-200 text-gray-400 font-bold py-2 px-8 rounded-md hover:text-gray-600 mr-5">Preview</button>
                <button className="bg-slate-200 text-gray-400 font-bold py-2 px-8 rounded-md hover:text-gray-600">Next</button>
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
        <div>
          <h3 className="text-2xl font-bold">Recomended Offers</h3>
          <div className="grid grid-cols-1 my-5 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {product.slice(0, 4).map((item) => (
              <div key={item.idMeal}>
                <Card cardImg={item.strMealThumb} cardTitle={item.strMeal} cardSubtitle={item.strTags} onClick={() => navigate(`/${item.idMeal}`)} />
              </div>
            ))}
          </div>
          <div className="mt-8 mb-20 text-right">
            <Link to="/allproducts" className="inline-block text-orange-400 text-xl font-bold tracking-wider">
              View All
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}
