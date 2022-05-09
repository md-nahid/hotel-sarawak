import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import Counter from "../Components/Counter/Counter";
import DateInput from "../Components/Datepicker/Datepicker";

// import iamges
import Dishimg from "../Images/bigimg.png";
import { Icon } from "@iconify/react";
import Creditcard from "../Images/creditcard.svg";
import Fpxicon from "../Images/fpx.svg";
import Boostpay from "../Images/boostpay.svg";
import Touchngo from "../Images/touchngo.svg";

export default function Checkout() {
  let [countState, setCountState] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [paymentSelected, setPaymentSelected] = useState("");
  return (
    <div>
      <Layout>
        <div className="grid grid-cols-1 xmd:grid-cols-[1fr_360px] gap-5 py-10">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-[152px_1fr] gap-5 bg-white shadow-md rounded-md p-5">
              <div className="w-full rounded overflow-hidden">
                <img src={Dishimg} alt="dishimg" className="h-full w-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Japanese Set Meal for 1 Person</h3>
                <p className="text-red-500 font-bold text-3xl mt-5">
                  RM<span>22.90</span>
                </p>
                <div className="flex flex-wrap justify-between">
                  <button className="text-gray-400 my-5 mr-10">+ Add note</button>
                  <div className="flex">
                    <Counter
                      count={countState}
                      decraseCount={() => {
                        if (countState < 1) {
                          setCountState(0);
                        } else {
                          setCountState(countState - 1);
                        }
                      }}
                      inCreaseCount={() => setCountState(countState + 1)}
                    />
                    <button className="border-2 px-4 py-3 rounded-md text-md text-gray-400 hover:bg-gray-400 hover:text-black hover:border-gray-400 duration-300 mx-2">
                      <Icon icon="fa-solid:trash" />
                    </button>
                    <button className="border-2 border-transparent p-3 rounded-md text-xl bg-yellow-400 text-white hover:border-2 hover:border-yellow-400 hover:bg-white hover:text-yellow-400 duration-300 ">
                      <Icon icon="material-symbols:favorite" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md p-5 mt-5">
              <h4 className="text-2xl font-semibold">Redemtion date</h4>
              <p className="text-gray-700 font-normal">Please select your redemption date for your voucher</p>
              <div className="mt-5">
                <DateInput selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md p-5 mt-5">
              <h4 className="text-2xl font-semibold">Redemtion Time</h4>
              <p className="text-gray-600 font-normal">This voucher is allow to redeem from 15:00 to 18:00 only</p>
            </div>
            <div className="bg-white rounded-md shadow-md p-5 mt-5">
              <h4 className="text-2xl font-semibold">Redemtion Location</h4>
              <p className="text-gray-600 font-normal">This voucher is eligible to be redeemed at</p>
              <div className="m-5 pb-5 border-b border-slate-400">
                <p className="text-red-500 text-xl font-semibold">ABC Restaurant</p>
                <p className="text-xl font-normal">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
              </div>
              <div className="m-5">
                <p className="text-red-500 text-xl font-semibold">XYZ cafe</p>
                <p className="text-xl font-normal">2715 Ash Dr. San Jose, South Dakota 83475</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-md shadow-md">
              <h3 className="p-5 text-xl font-bold text-center border-b border-slate-400">Pricing Summary</h3>
              <div className="py-4 px-3 border-b border-slate-400">
                <li className="flex justify-between items-center text-lg font-normal mb-2">
                  <p>Deal Price X QTY</p>
                  <p className="text-red-600 font-bold">
                    RM <span>15.00</span>
                  </p>
                </li>
                <li className="flex justify-between items-center text-lg font-normal mb-2">
                  <p>Total Price</p>
                  <p className="text-red-600 font-bold">
                    RM <span>15.00</span>
                  </p>
                </li>
                <li className="flex justify-between items-center text-lg font-normal mb-2">
                  <p>Texes</p>
                  <p className="text-red-600 font-bold">
                    RM <span>1.00</span>
                  </p>
                </li>
                <li className="flex justify-between items-center text-lg font-normal">
                  <p>Total payable Amount</p>
                  <p className="text-red-600 font-bold">
                    RM <span>17.73</span>
                  </p>
                </li>
              </div>
              <div className="border-b border-slate-400 px-3 flex flex-wrap justify-between items-center">
                <input type="text" className=" p-2 text-[16px] border-2 rounded-lg focus:outline-orange-500 my-3" placeholder="Promo Code" />
                <button className="px-3 py-2 bg-slate-800 text-yellow-400 font-semibold rounded-md text-[16px] border-2 border-slate-800 hover:bg-transparent hover:text-slate-900 flex items-center min-w-max duration-200 my-3">
                  Apply Now
                  <span className="ml-2">
                    <Icon icon="bx:chevrons-right" />
                  </span>
                </button>
              </div>
              <div className="py-4 px-3">
                <PaymentMethods Data={paymentOptions} handleClick={(v) => setPaymentSelected(v)} paymentSelected={paymentSelected} />
                <div className="my-5">
                  <p className="text-sm text-gray-600">By clicking proceed to payment, you have agreed to our service and policy</p>
                </div>
                <button className="px-3 py-2 bg-slate-700 text-yellow-400 font-semibold rounded-md text-[16px] border-2 border-slate-700 hover:bg-slate-900 duration-200 w-full text-center">
                  Proceed To Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

const paymentOptions = [
  {
    name: "Credit Card",
    icon: Creditcard,
    paymentType: "creditcard",
  },
  {
    name: "Fpx",
    icon: Fpxicon,
    paymentType: "fpx",
  },
  {
    name: "Boost Pay",
    icon: Boostpay,
    paymentType: "boostpay",
  },
  {
    name: "Touch n Go",
    icon: Touchngo,
    paymentType: "touchngo",
  },
];

// payment methods
function PaymentMethods({ Data, handleClick, paymentSelected }) {
  return (
    <>
      {Data.map((btn) => (
        <button key={btn.name} className="flex items-center cursor-pointer my-3 w-full" onClick={() => handleClick(btn.paymentType)}>
          <span>{btn.paymentType === paymentSelected ? <Icon icon="bi:record-circle-fill" color="red" /> : <Icon icon="akar-icons:circle" />}</span>
          <p className="text-lg font-semibold flex">
            <img src={btn.icon} alt="icon" className="mx-3" /> {btn.name}
          </p>
        </button>
      ))}
    </>
  );
}
