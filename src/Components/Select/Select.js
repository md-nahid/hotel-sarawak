import React, { useEffect, useState } from "react";
import cn from "classnames";
// import icons
import { Icon } from "@iconify/react";

export default function Select({ options }) {
  const [screen, setScreen] = useState({
    label: "",
    value: "",
  });
  const [dropdown, setDropdown] = useState(false);
  //   set default value
  useEffect(() => {
    options.forEach((option) => {
      if (option.selected === true) {
        setScreen({ ...options, label: option.label, value: option.value });
      }
    });
  }, [options]);

  // set display value
  function handleClick(optionValue) {
    options.forEach((item) => {
      item.selected = false;
      if (item.value === optionValue) {
        item.selected = true;
        setScreen({
          ...screen,
          label: item.label,
          value: item.value,
        });
      }
    });
    setDropdown(false);
  }
  // set blur function
  function handleBlur(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  }

  return (
    <div className="relative" onBlur={handleBlur}>
      <button
        className="w-full flex justify-between items-center border-2 border-slate-200 rounded-md py-2 px-3 shadow-sm shadow-slate-300"
        onClick={() => setDropdown(!dropdown)}
      >
        <span className="inline-block text-orange-400">
          <Icon icon="akar-icons:location" />
        </span>
        <span className="ml-3 mr-5 text-black font-normal text-lg inline-block min-w-max">
          {screen.label}
        </span>
        <span className="inline-block">
          <Icon icon="akar-icons:chevron-down" />
        </span>
      </button>
      {dropdown && (
        <div className="absolute left-0 right-0 top-full mt-2 grid grid-cols-1 bg-white text-black text-lg z-10 shadow-md shadow-slate-500 rounded p-1">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleClick(option.value)}
              className={cn(
                "text-center text-sm hover:bg-slate-100 rounded py-2 mb-0",
                option.selected && "text-orange-300"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
