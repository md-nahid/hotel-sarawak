import React from "react";
import cn from "classnames";
import { motion } from "framer-motion";

export default function Tabs({ onClick, productType }) {
  return (
    <div className="grid grid-cols-4 gap-0 text-center border-b-4 border-slate-200">
      {buttons.map((button) => (
        <button
          key={button.value}
          className={cn("text-[12px] sm:text-[16px] py-3 relative font-semibold", button.value === productType && "text-red-500")}
          onClick={() => onClick(button.value)}
        >
          {button.label}
          {button.value === productType ? (
            <motion.div className="absolute left-0 bottom-[-4px] right-0 top-0 border-b-4 border-red-500" layoutId="underline" />
          ) : null}
        </button>
      ))}
    </div>
  );
}

// button groups
const buttons = [
  {
    label: "Cake & milk",
    value: "cake-milk",
  },
  {
    label: "Coffes & Teas",
    value: "coffes-teas",
  },
  {
    label: "Vegetables",
    value: "vegetable",
  },
  {
    label: "Desert",
    value: "desert",
  },
];
