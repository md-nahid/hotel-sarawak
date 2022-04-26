import React from "react";
// import icons
import { Icon } from "@iconify/react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Card({ cardImg, cardTitle, cardSubtitle, onClick, className }) {
  return (
    <div className={className}>
      <div className="relative md:max-h-60 h-full overflow-hidden rounded-md">
        <img src={cardImg} alt="product" className="w-full object-cover rounded-md" />
        <div className="absolute top-2 left-2">
          <p className="py-1 px-2 rounded-lg bg-teal-500 text-amber-300">40$ off</p>
          <p className="mt-2 py-1 px-2 rounded-lg bg-teal-700 text-amber-300 flex items-center">
            <span className="mr-2">
              <Icon icon="clarity:favorite-solid" />
            </span>
            4.8
          </p>
        </div>
      </div>
      <div className="px-3 py-1 sm:py-4 text-slate-900">
        <Link to="/" className="text-lg font-semibold capitalize hover:underline">
          {cardTitle}
        </Link>
        <p className="text-sm font-normal mt-2 sm:mt-3 capitalize break-words">{cardSubtitle}</p>
        <div className="flex justify-between flex-wrap items-center mt-3">
          <p className="text-sm text-red-600 font-bold flex flex-wrap">
            <span>RM 15.00</span>
            <sup className="text-gray-600 line-through text-xs ml-2">RM 26.50</sup>
          </p>
          <p className="flex items-center">
            <span className="mr-1">
              <Icon icon="ic:twotone-favorite-border" />
            </span>
            <span>3.5 K</span>
          </p>
        </div>
        <div className="mt-4">
          <Button text="Buy Now" onClick={onClick} />
        </div>
      </div>
    </div>
  );
}
