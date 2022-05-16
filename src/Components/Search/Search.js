import React from "react";
import { useDispatch } from "react-redux";
import { showSearch } from "../../Redux/Actions";
// import icons
import { Icon } from "@iconify/react";

export default function Search() {
  let dispatch = useDispatch();
  return (
    <div className="max-w-[1170px] w-full m-auto h-full">
      <div className="relative">
        <input
          type="text"
          id="search"
          placeholder="Search by names..."
          className="w-full h-[48px] pl-5 pr-14 border-2 border-orange-600 outline-none rounded-lg bg-white"
          onFocus={() => dispatch(showSearch())}
        />
        <span className="absolute right-5 top-1/2 -translate-x-1/4 -translate-y-1/2">
          <label htmlFor="search" className="cursor-pointer">
            <Icon icon="charm:search" />
          </label>
        </span>
      </div>
    </div>
  );
}

// onMouseDown={(e) => e.target === blurDiv.current && dispatch(hideSearch())}
