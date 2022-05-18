import React from "react";
import { Icon } from "@iconify/react";

export default function Cardtwo({ cardImg, title, subTitle, price, quantity, total, inCrement, deCrement, remove }) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-5 border-t border-red-500 p-5">
      <div className="max-w-[200px] w-full">
        <img src={cardImg} alt={title} className="w-full rounded-xl" />
      </div>
      <div>
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-slate-500 capitalize">{subTitle}</p>
        <p>$ {price}</p>
        <div className="flex items-center mt-5">
          <div className="flex items-center mr-5">
            <button onClick={inCrement} className="p-2 rounded shadow-slate-800 bg-orange-600 text-white hover:bg-orange-700 mr-2">
              <Icon icon="akar-icons:plus" />
            </button>
            <button onClick={deCrement} className="p-2 rounded shadow-slate-800 bg-slate-200 hover:bg-slate-300 text-orange-600 mr-2">
              <Icon icon="akar-icons:minus" />
            </button>
          </div>
          <div>
            <span className="p-2 text-lg font-semibold">{quantity}</span>
          </div>
        </div>
        <p>Delivery in 6 hours</p>
      </div>
      <div>
        <button onClick={remove}>
          <Icon icon="akar-icons:cross" />
        </button>
        <div>
          <p>$ {total}</p>
        </div>
      </div>
    </div>
  );
}
