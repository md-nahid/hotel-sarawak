import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import cn from "classnames";

export default function MyCart() {
  const [productType, setProductType] = useState("");
  return (
    <div className="mt-10">
      <div className="max-w-xl w-full m-auto grid grid-cols-2 gap-5 text-center">
        {buttonsarr.map((button) => (
          <NavLink
            to={button.value}
            key={button.value}
            className={cn("text-[12px] sm:text-[16px] py-3 relative font-semibold", button.value === productType && "text-red-500")}
            onClick={() => setProductType(button.value)}
          >
            {button.label}
            {button.value === productType ? (
              <motion.div className="absolute left-0 bottom-[-4px] right-0 top-0 border-b-4 border-red-500" layoutId="underline" />
            ) : null}
          </NavLink>
        ))}
      </div>
      <Layout>
        <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-[1fr_0.5fr] gap-5">
          <Outlet />
          <div className="border-2 border-orange-600">subtotal</div>
        </div>
      </Layout>
    </div>
  );
}

// button groups
const buttonsarr = [
  {
    label: "My Cart",
    value: "",
  },
  {
    label: "Favorites",
    value: "favorites",
  },
];
