import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// icons
import { Icon } from "@iconify/react";

export default function CartContainer() {
  let navigate = useNavigate();
  let [showCart, setShowCart] = useState(false);
  const { cart } = useSelector((state) => state.cartCount);
  const fav = useSelector((state) => state.favoriteCount);
  const user = useSelector((state) => state.login);
  // handlelogin
  function handleLogin() {
    if (user) {
      navigate("/mycart");
      setShowCart(false);
    } else {
      console.log("please log in");
      setShowCart(false);
    }
  }

  return (
    <div className="flex" onBlur={(event) => (!event.currentTarget.contains(event.relatedTarget) ? setShowCart(false) : setShowCart(true))}>
      <button
        className="relative p-2 text-3xl border-[1px] border-green-500 rounded-full mr-5 text-green-500"
        onClick={() => navigate("/mycart/favorites")}
      >
        <Icon icon="material-symbols:favorite-rounded" />
        <span className="absolute -top-3 -right-3 px-2 rounded-full  bg-green-600 text-white text-lg">{fav.length}</span>
      </button>
      <button
        className="relative p-2 text-3xl border-[1px] border-orange-500 rounded-full mr-5 text-orange-500"
        onClick={() => setShowCart(!showCart)}
      >
        <Icon icon="bi:cart-check-fill" />
        <span className="absolute -top-3 -right-3 px-2 rounded-full  bg-orange-500 text-white text-lg">{cart.length}</span>
      </button>
      <button className="p-2 text-3xl border-[1px] border-slate-500 rounded-full text-slate-500" onClick={handleLogin}>
        <Icon icon="ant-design:user-outlined" />
      </button>
      {showCart && <div className="">{cart.length ? <AllcartItems allcartItems={cart} onClick={handleLogin} /> : <EmptyCart />}</div>}
    </div>
  );
}

function AllcartItems({ allcartItems, onClick }) {
  return (
    <div className="min-w-max absolute bg-DarkOrange max-w-fit w-full rounded right-5 py-2 px-4 top-full">
      <table className="w-full">
        <thead className="border-b">
          <tr className="text-sm text-center grid grid-cols-4 gap-3">
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th className="text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          {allcartItems.map((item, index) => (
            <tr key={index} className="grid grid-cols-4 gap-3 text-center py-3">
              <td className="grid grid-cols-[30px_1fr] gap-3 items-center cursor-pointer">
                <div className="rounded-md overflow-hidden">
                  <img src={item.strMealThumb} alt="product" className="w-full" />
                </div>
                <div>
                  <p>{item.strMeal}</p>
                </div>
              </td>
              <td>$ {item.price}</td>
              <td>{item.qty}</td>
              <td className="text-right">$ {item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className=" pt-2 text-right">
        <button className="text-slate-800 text-sm font-semibold inline-block py-2 px-4 bg-yellow-400 rounded-md" onClick={onClick}>
          View Cart
        </button>
      </div>
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="text-sm absolute bg-DarkOrange rounded right-5 py-10 px-20 top-full">
      <div className="text-center text-slate-50">
        <p className="text-yellow-400 text-4xl flex justify-center mb-2">
          <Icon icon="el:shopping-cart-sign" />
        </p>
        <p className="text-xl">Empty</p>
      </div>
    </div>
  );
}
