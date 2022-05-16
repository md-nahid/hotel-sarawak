import React from "react";
// import icons
import { Icon } from "@iconify/react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Card({ cardImg, cardTitle, cardSubtitle, onClick }) {
  return (
    <div>
      <div className="relative overflow-hidden rounded-md">
        <img src={cardImg} alt="product" className="w-full object-cover rounded-md" />
        <button className="absolute right-5 top-5 text-xl text-orange-500 p-4 rounded-full bg-yellow-50 bg-opacity-60">
          <Icon icon="ic:twotone-favorite-border" />
        </button>
      </div>
      <div className="px-3 py-1 sm:py-4 text-slate-900">
        <h4 className="flex justify-between items-center">
          <Link to="/" className="text-lg font-bold capitalize hover:underline">
            {cardTitle}
          </Link>
          <span>3.5 K</span>
        </h4>
        <p className="text-sm font-normal capitalize break-words">{cardSubtitle}</p>
        <div className="flex justify-between flex-wrap items-center mt-3">
          <p className="text-sm text-red-600 font-bold flex flex-wrap">
            <span>RM 15.00</span>
            <sup className="text-gray-600 line-through italic text-xs ml-2">RM 26.50</sup>
          </p>
        </div>
        <div className="mt-4">
          <Button text="Buy Now" onClick={onClick} />
        </div>
      </div>
    </div>
  );
}
