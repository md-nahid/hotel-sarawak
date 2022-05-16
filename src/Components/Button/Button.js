import React from "react";
// import icons
import { Icon } from "@iconify/react";

export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-[1px] w-[189px] h-14 border-black outline-0 rounded-lg text-[#FFC329] bg-black hover:bg-transparent hover:text-black duration-300 text-[16px] font-bold flex items-center justify-center"
    >
      {text}
      <span className="ml-6">
        <Icon icon="fa:angle-double-right" />
      </span>
    </button>
  );
}
