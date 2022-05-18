import React from "react";
import { Icon } from "@iconify/react";

export default function Emptycart({ text }) {
  return (
    <div className="m-auto rounded right-5 py-10 px-20 top-full">
      <div className="text-center">
        <p className="text-orange-500 text-6xl flex justify-center mb-2">
          <Icon icon="el:shopping-cart-sign" />
        </p>
        <p className="text-xl text-orange-600">{text}</p>
      </div>
    </div>
  );
}
