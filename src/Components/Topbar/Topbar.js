import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartContainer from "../CartContainer/CartContainer";
import useWindowsize from "../../Hooks/useWindowsize";
import Search from "../Search/Search";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { hideSearch } from "../../Redux/Actions";
import Card from "../Card/Card";
import { showSearch } from "../../Redux/Actions";
// import images
import Logo from "../../Images/logo.svg";
import Mobilelogo from "../../Images/mobilelogo.svg";
import { Icon } from "@iconify/react";

export default function Topbar() {
  const dispatch = useDispatch();
  const width = useWindowsize();
  const s = useSelector((state) => state.isSearch);
  useEffect(() => {
    if (s) {
      document.body.className = "overflow-y-hidden";
    } else {
      document.body.className = "";
    }
  }, [s]);

  return (
    <div className="mt-2 py-2 xmd:py-4 px-2 sm:px-4 md:mt-5 sticky top-0 bg-white z-50">
      <div className="grid grid-flow-col xmd:grid-cols-[220px_1fr_220px] gap-5 xmd:gap-10 items-center ">
        <div className="flex items-center">
          <Link to="/" className="inline-block w-full sm:w-40">
            <img src={width > 575 ? Logo : Mobilelogo} alt="logo" className={width > 575 ? "max-w-[200px] w-full" : "max-w-[50px] w-full"} />
          </Link>
        </div>
        <div>{width > 992 && <Search />}</div>
        <div>
          <div className="max-w-[260px] grid grid-cols-[auto_1fr] xmd:grid-cols-1 gap-3 w-full ml-auto">
            <button
              className="xmd:hidden px-2 rounded border-2 bg-orange-600 border-orange-600 text-white text-xl text-center"
              onClick={() => dispatch(showSearch())}
            >
              <Icon icon="charm:search" />
            </button>
            <CartContainer />
          </div>
        </div>
      </div>
      {s && <SearchModal />}
    </div>
  );
}
// open search
function SearchModal() {
  const dispatch = useDispatch();
  let [value, setValue] = useState("");
  const { products } = useSelector((state) => state.cartCount);
  return (
    <motion.div className="fixed top-0 left-0 w-full h-screen bg-yellow-400 pb-3 overflow-y-scroll" animate={animate}>
      <div className="w-full sticky top-0 z-50 bg-white py-3">
        <input
          type="text"
          placeholder="Search by names..."
          className="w-full h-full pl-5 pr-14 rounded-md outline-none text-xl text-center py-1 sm:py-3 md:py-5"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus={true}
        />
        <button
          className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-gray-500 hover:text-gray-900"
          onClick={() => {
            setValue("");
            dispatch(hideSearch());
          }}
        >
          <Icon icon="akar-icons:cross" />
        </button>
      </div>
      <div className="py-5 px-3 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {products
          .filter((item) => item.strMeal.toLowerCase().includes(value))
          .map((prod) => (
            <Card key={prod.idMeal} cardImg={prod.strMealThumb} cardTitle={prod.strMeal} cardSubtitle={prod.strTags} />
          ))}
      </div>
    </motion.div>
  );
}

// serarch result animate values
const animate = {
  opacity: [0, 1],
  transition: { duration: 0.3 },
};
