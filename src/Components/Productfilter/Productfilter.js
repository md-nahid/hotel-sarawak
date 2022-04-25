import React, { useState } from "react";
import { RangeBox } from "./Productfilter.styled";
import { NavLink } from "react-router-dom";
import cn from "classnames";
// range Slider from mui
import Slider from "@mui/material/Slider";
// import images and icons
import Cimg1 from "../../Images/cimg1.png";
import Cimg2 from "../../Images/cimg2.png";
import { Icon } from "@iconify/react";

export default function Productfilter() {
  // range slider functions and values
  const [rating, setRating] = useState(5);
  const [value1, setValue1] = React.useState([200, 500]);
  const minDistance = 50;
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  // category items
  const ProductCategory = [
    {
      label: "Cake & milk",
      value: "",
      linkImg: Cimg1,
    },
    {
      label: "Coffes & Teas",
      value: "coffes-teas",
      linkImg: Cimg2,
    },
    {
      label: "Vegetables",
      value: "vegetable",
      linkImg: Cimg1,
    },
    {
      label: "Desert",
      value: "desert",
      linkImg: Cimg2,
    },
  ];

  const ratingBtn = [
    {
      label: "3",
      value: 3,
    },
    {
      label: "4",
      value: 4,
    },
    {
      label: "5",
      value: 5,
    },
  ];

  return (
    <div>
      <ul>
        {ProductCategory.map((item) => (
          <li key={item.value} className="mb-3">
            <NavLink
              to={item.value}
              className={(nav) =>
                nav.isActive
                  ? "grid grid-cols-[40px_1fr] items-center font-semibold p-2 hover:bg-yellow-200 rounded duration-200 bg-yellow-300"
                  : "grid grid-cols-[40px_1fr] items-center font-semibold p-2 hover:bg-yellow-200 rounded duration-200"
              }
              end
            >
              <img src={item.linkImg} alt={item.label} className="w-6" />
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <p className="text-xl mt-10">Price range</p>
      <div className="mt-10">
        <RangeBox>
          <Slider
            max={1000}
            min={50}
            getAriaLabel={() => "Minimum distance"}
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            disableSwap
          />
        </RangeBox>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-5">
        {ratingBtn.map((btn) => (
          <button
            className={cn(
              "flex items-center py-2 px-3  cursor-pointer duration-200",
              rating === btn.value
                ? "bg-red-500 text-white "
                : "bg-slate-200 text-slate-900"
            )}
            onClick={() => setRating(btn.value)}
          >
            <span
              className={cn(
                rating === btn.value ? "text-orange-200" : "text-red-600"
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
