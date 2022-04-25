import React from "react";
// icons
import { Icon } from "@iconify/react";

export default function CartContainer() {
  return (
    <div className=" py-2 px-3 rounded border-2 bg-orange-600 border-orange-600 text-white text-xl">
      <div className="flex justify-around xmd:justify-between items-center ">
        <div className="relative hidden sm:block">
          <Icon icon="carbon:favorite" />
          <span className="absolute top-0 right-0 translate-x-3 -translate-y-2 w-4 h-4 rounded-full flex justify-center items-center bg-orange-400 text-xs">
            1
          </span>
        </div>
        <div className="relative">
          <Icon icon="bi:cart-check-fill" />
          <span className="absolute top-0 right-0 translate-x-3 -translate-y-2 w-4 h-4 rounded-full flex justify-center items-center bg-orange-400 text-xs">
            1
          </span>
        </div>
        <div className="flex items-center">
          <span>
            <Icon icon="ant-design:user-outlined" />
          </span>
          <span className="ml-2 flex">
            <strong>A</strong> <span className="hidden md:block">ccount</span>
          </span>
        </div>
      </div>
    </div>
  );
}
