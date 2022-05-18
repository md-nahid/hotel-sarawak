import React from "react";
import { Link } from "react-router-dom";
import CartContainer from "../CartContainer/CartContainer";
import useWindowsize from "../../Hooks/useWindowsize";
import { useDispatch } from "react-redux";
import { showSearch } from "../../Redux/Actions";
// import images
import Logo from "../../Images/logo.svg";
import Mobilelogo from "../../Images/mobilelogo.svg";
import { Icon } from "@iconify/react";

export default function Topbar() {
  const dispatch = useDispatch();
  const width = useWindowsize();
  return (
    <div className="mt-2 py-3 px-2 sm:px-4 md:mt-5 sticky top-0 bg-white z-50">
      <div className="grid grid-cols-2 gap-3 sm:gap-5 xmd:gap-10 items-center ">
        <div className="flex items-center">
          <Link to="/" className="inline-block w-full sm:w-40">
            <img src={width > 575 ? Logo : Mobilelogo} alt="logo" className={width > 575 ? "max-w-[200px] w-full" : "max-w-[50px] w-full"} />
          </Link>
        </div>
        <div>
          <div className="flex text-purple-500 justify-end">
            <button className="px-3 text-2xl border-[1px] border-purple-500 rounded-full mr-5" onClick={() => dispatch(showSearch())}>
              <Icon icon="charm:search" />
            </button>
            <CartContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
