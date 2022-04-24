import React from "react";
// import icons
import { Icon } from "@iconify/react";

export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-2 border-black outline-0 px-6 py-4 rounded-lg text-[#FFC329] bg-black hover:bg-transparent hover:text-black duration-300 text-[16px] font-bold tracking-wider flex items-center cursor-pointer uppercase"
    >
      {text}
      <span className="ml-4">
        <Icon icon="fa:angle-double-right" />
      </span>
    </button>
  );
}
