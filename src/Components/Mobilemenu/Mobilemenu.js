import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { showSearch } from "../../Redux/Actions";

export default function Mobilemenu() {
  const { cart } = useSelector((state) => state.cartCount);
  const fav = useSelector((state) => state.favoriteCount);
  const user = useSelector((state) => state.login);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  // handlelogin
  function handleLogin() {
    if (user) {
      navigate("/mycart");
    } else {
      console.log("please log in");
    }
  }
  return (
    <div className="flex justify-between w-full fixed left-0 right-0 bottom-0 bg-white py-3 px-2 z-50">
      <Link to="/" className="p-2 text-xl border-[1px] border-blue-500 rounded-full mr-5 text-blue-500 inline-block">
        <Icon icon="bxs:home-alt-2" />
      </Link>
      <button className="px-2 text-xl border-[1px] border-purple-500 text-purple-500 rounded-full mr-5" onClick={() => dispatch(showSearch())}>
        <Icon icon="charm:search" />
      </button>
      <button
        className="relative p-2 text-xl border-[1px] border-red-500 rounded-full mr-5 text-red-500"
        onClick={() => navigate("mycart/favorites")}
      >
        <Icon icon="material-symbols:favorite-rounded" />
        <span className="absolute -top-3 -right-3 px-2 rounded-full  bg-red-600 text-white text-lg">{fav.length}</span>
      </button>
      <button className="relative p-2 text-xl border-[1px] border-orange-500 rounded-full mr-5 text-orange-500" onClick={() => navigate("mycart")}>
        <Icon icon="heroicons-solid:shopping-bag" />
        <span className="absolute -top-3 -right-3 px-2 rounded-full  bg-orange-500 text-white text-lg">{cart.length}</span>
      </button>
      <button className="p-2 text-xl border-[1px] border-slate-500 rounded-full text-slate-500" onClick={handleLogin}>
        <Icon icon="ant-design:user-outlined" />
      </button>
    </div>
  );
}
