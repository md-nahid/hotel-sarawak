import React from "react";
import cn from "classnames";

export default function FormControl({ htmlFor, label, placeholder, value, onChange, icon, type, onClick }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="font-semibold font-lato mb-1 block">
        {label}
      </label>
      <div className="w-full relative">
        <input
          type={type}
          id={htmlFor}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={cn("w-full py-2 px-4 outline-none text-black text-lg rounded-md font-lato", icon && "pr-10 pl-5")}
        />
        {icon && (
          <button onClick={onClick} className="absolute right-5 top-1/2 -translate-y-1/2 translate-x-1/4 text-slate-500 text-2xl">
            {icon}
          </button>
        )}
      </div>
    </div>
  );
}
