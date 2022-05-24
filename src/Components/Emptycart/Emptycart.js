import React from "react";
import { Icon } from "@iconify/react";

export default function Emptycart({ title, subTitle }) {
  return (
    <div className="m-auto rounded right-5 py-10 px-20 top-full">
      <div className="text-center">
        <p className="text-orange-500 text-6xl flex justify-center mb-2">
          <Icon icon="akar-icons:shopping-bag" />
        </p>
        <h4 className="text-xl text-orange-600">{title}</h4>
        <p>{subTitle}</p>
      </div>
    </div>
  );
}
