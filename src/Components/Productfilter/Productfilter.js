import React from "react";
import { RangeBox } from "./Productfilter.styled";
import cn from "classnames";
// range Slider from mui
import Slider from "@mui/material/Slider";
// import images and icons

import { Icon } from "@iconify/react";

export default function Productfilter({
  changeCategory,
  ProductCategory,
  categoryType,
  ratingBtns,
  filterByRating,
  ratingValue,
  rangeValue,
  rangeSliderChange,
}) {
  // range slider functions and values

  return (
    <div>
      {/* category filter buttons  */}
      <ul>
        {ProductCategory.map((item) => (
          <li key={item.value} className="mb-3">
            <button
              onClick={() => changeCategory(item.value)}
              className={cn(
                "grid grid-cols-[40px_1fr] items-center text-left text-lg font-semibold w-full py-2 px-3 hover:bg-orange-300 rounded-md",
                item.value === categoryType && "bg-orange-400"
              )}
            >
              <img src={item.linkImg} alt={item.label} className="w-6" />
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      {/* price range slider  */}
      <p className="text-xl mt-10">Price range in ( BDT )</p>
      <div className="mt-10">
        <RangeBox>
          <Slider
            max={1000}
            min={50}
            getAriaLabel={() => "Minimum distance"}
            value={rangeValue}
            onChange={rangeSliderChange}
            valueLabelDisplay="auto"
            disableSwap
          />
        </RangeBox>
      </div>
      {/* rating filter buttons  */}
      <div className="mt-10 grid grid-cols-3 gap-5">
        {ratingBtns.map((btn) => (
          <button
            key={btn.value}
            className={cn(
              "flex items-center py-2 px-3 rounded cursor-pointer duration-200",
              ratingValue === btn.value
                ? "bg-red-500 text-white "
                : "bg-slate-200 text-slate-900"
            )}
            onClick={() => filterByRating(btn.value)}
          >
            <span
              className={cn(
                ratingValue === btn.value ? "text-orange-200" : "text-red-600"
              )}
            >
              <Icon icon="bxs:star" />
            </span>
            <span className="ml-2 font-bold">{btn.label} +</span>
          </button>
        ))}
      </div>
    </div>
  );
}
