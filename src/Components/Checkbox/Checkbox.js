import React from "react";
import cn from "classnames";
import { Icon } from "@iconify/react";

export default function Checkbox({ htmlFor, checked, onChange, label }) {
  return (
    <div>
      <label className="flex items-center w-full cursor-pointer relative" htmlFor={htmlFor}>
        <input
          type="checkbox"
          id={htmlFor}
          className={cn("w-5 h-5 checked:bg-green-500", checked && "appearance-none rounded")}
          checked={checked}
          onChange={onChange}
        />
        <span className="ml-4">{label}</span>
        <span className="absolute left-1 top-[6px] text-xs text-white">
          <Icon icon="el:ok" />
        </span>
      </label>
    </div>
  );
}
