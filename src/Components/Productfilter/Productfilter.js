import React, { useState } from "react";
import { RangeBox, Scrollbar } from "./Productfilter.styled";
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
  locationFilters,
}) {
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
      {/* price range filter slider  */}
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
              ratingValue === btn.value ? "bg-red-500 text-white " : "bg-slate-200 text-slate-900"
            )}
            onClick={() => filterByRating(btn.value)}
          >
            <span className={cn(ratingValue === btn.value ? "text-orange-200" : "text-red-600")}>
              <Icon icon="bxs:star" />
            </span>
            <span className="ml-2 font-bold">{btn.label} +</span>
          </button>
        ))}
      </div>
      {/* location filter  */}
      <p className="text-xl text-slate-900 mt-10 font-bold">Location ( ~ 10 km )</p>
      <Scrollbar className="w-full h-[400px] px-3 py-2 mt-4 relative overflow-y-scroll scroll">
        {locationFilters.map((item) => (
          <AreaBox key={item.value} place={item} />
        ))}
      </Scrollbar>
    </div>
  );
}
// checkbox
function AreaBox({ place }) {
  const [box, setBox] = useState(false);
  return (
    <div className="mb-4">
      <label className="flex items-center w-full cursor-pointer relative" htmlFor={place.value}>
        <input
          type="checkbox"
          id={place.value}
          className={cn("w-5 h-5 checked:bg-red-500", box && "appearance-none rounded")}
          checked={box}
          onChange={() => setBox(!box)}
        />
        <span className="ml-4">{place.label}</span>
        <span className="absolute left-1 top-[6px] text-xs text-white">
          <Icon icon="el:ok" />
        </span>
      </label>
    </div>
  );
}
