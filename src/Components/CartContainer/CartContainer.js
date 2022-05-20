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
  function handleClick(e) {
    let x = e.currentTarget.id;
    if (x === "closeCart") {
      setShowCart(false);
    } else if (x === "checkout") {
      setShowCart(false);
      if (user) {
        navigate("/checkout");
      } else {
        navigate("/auth");
      }
    } else {
      setShowCart(false);
      if (user) {
        navigate("/viewCart");
      } else {
        navigate("/auth");
      }
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
      <button
        className="p-2 text-3xl border-[1px] border-slate-500 rounded-full text-slate-500"
        onClick={() => (user ? navigate("/mycart") : navigate("/auth"))}
      >
        <Icon icon="ant-design:user-outlined" />
      </button>
      {showCart && <div>{cart.length ? <AllcartItems allcartItems={cart} onClick={handleClick} /> : <EmptyCart />}</div>}
    </div>
  );
}

function AllcartItems({ allcartItems, onClick }) {
  return (
    <div className="text-slate-700 fixed left-0 right-0 top-0 bottom-0 h-screen w-full bg-slate-700 bg-opacity-50 overflow-y-scroll overflow-x-hidden scroll-m">
      <div className="w-1/2 lg:w-2/5 h-full ml-auto bg-white relative">
        <div className="flex justify-between items-center p-5 font-semibold text-xl">
          <h4>Shopping cart</h4>
          <button className="text-3xl" onClick={onClick} id="closeCart">
            <Icon icon="akar-icons:cross" />
          </button>
        </div>
        <div className="px-3">
          {allcartItems.map((item, index) => (
            <div key={index} className="grid grid-cols-[auto_1fr] gap-5 mt-5 items-center">
              <div className="max-w-[150px] w-full">
                <img src={item.strMealThumb} alt="product" className="w-full rounded-lg" />
              </div>
              <div>
                <h3 className="font-bold text-xl font-lato capitalize">{item.strMeal}</h3>
                <p className="text-orange-600">
                  Price: <span className="ml-3 font-semibold text-green-600">$ {item.price}</span>
                </p>
                <p className="text-orange-600">
                  Quantity: <span className="ml-3 font-semibold text-green-600">{item.qty}</span>
                </p>
                <p className="mt-3 text-orange-600">
                  Total: <span className="ml-3 font-semibold text-green-600">$ {item.total}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 py-5 px-3 bg-white shadow-slate-600 shadow-md text-center">
          <div className="flex justify-center items-center">
            <button
              onClick={onClick}
              id="checkout"
              className="max-w-[216px] w-full text-center py-3 bg-orange-600 rounded-full text-white font-semibold border-[1px] border-orange-600 hover:bg-transparent duration-300 hover:text-orange-600"
            >
              Checkout
            </button>
            <p className="px-3 font-semibold text-purple-700">OR</p>
            <button
              id="viewCart"
              onClick={onClick}
              className="max-w-[216px] w-full text-center py-3 bg-green-600 rounded-full text-white font-semibold border-[1px] border-green-600 hover:bg-transparent duration-300 hover:text-green-600"
            >
              View Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// popup empty cart
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
