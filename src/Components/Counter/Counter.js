import React from "react";
// import icons
import { Icon } from "@iconify/react";

export default function Counter({ count, inCreaseCount, decraseCount }) {
  return (
    <div className="flex justify-center items-center px-3 py-2 border-2 border-gray-200 rounded-md">
      <button onClick={decraseCount}>
        <Icon icon="akar-icons:minus" />
      </button>
      <span className="mx-8">{count}</span>
      <button onClick={inCreaseCount}>
        <Icon icon="akar-icons:plus" />
      </button>
    </div>
  );
}
