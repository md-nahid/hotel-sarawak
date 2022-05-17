import React from "react";
// import icons
import { Icon } from "@iconify/react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Card({ cardImg, cardTitle, cardSubtitle, onClick, addtoFavorite }) {
  return (
    <div>
      <div className="relative overflow-hidden rounded-md">
        <img src={cardImg} alt="product" className="w-full object-cover rounded-md" />
        <button className="absolute right-2 top-2 text-xl text-white p-4 rounded-full bg-red-400 bg-opacity-60" onClick={addtoFavorite}>
          <Icon icon="ic:twotone-favorite-border" />
        </button>
      </div>
      <div className="px-3 py-1 sm:py-4 text-slate-900">
        <h4 className="flex justify-between items-center">
          <Link to="/" className="text-lg font-bold capitalize hover:underline">
            {cardTitle}
          </Link>
          <p className="flex items-center font-lato font-bold text-orange-600">
            <span className="mr-1">
              <Icon icon="bxs:star" />
            </span>
            <span>4.8</span>
          </p>
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
