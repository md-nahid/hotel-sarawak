import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/Actions";
// icons
import { Icon } from "@iconify/react";

export default function CartContainer() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [showCart, setShowCart] = useState(false);
  const { cart } = useSelector((state) => state.cartCount);
  const user = useSelector((state) => state.login);
  // fetch data when this component loads
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

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
    <div
      className="py-2 rounded border-2 bg-orange-600 border-orange-600 text-white text-xl relative"
      onBlur={(event) => (!event.currentTarget.contains(event.relatedTarget) ? setShowCart(false) : setShowCart(true))}
    >
      <div className="flex justify-around items-center">
        <button className="relative hidden md:block">
          <Icon icon="material-symbols:favorite-rounded" />
          <span className="absolute top-0 right-0 translate-x-3 -translate-y-2 w-4 h-4 rounded-full flex justify-center items-center bg-orange-400 text-xs">
            0
          </span>
        </button>
        <button className="relative" onClick={() => setShowCart(!showCart)}>
          <Icon icon="bi:cart-check-fill" />
          <span className="absolute top-0 right-0 translate-x-3 -translate-y-2 w-4 h-4 rounded-full flex justify-center items-center bg-orange-400 text-xs">
            {cart.length}
          </span>
        </button>
        <button className="flex items-center" onClick={handleLogin}>
          <span>
            <Icon icon="ant-design:user-outlined" />
          </span>
          <span className="ml-2 flex">
            <strong>A</strong> <span className="hidden md:block">ccount</span>
          </span>
        </button>
      </div>
      {showCart && (
        <div className="absolute bg-DarkOrange min-w-full rounded right-0 py-2 px-4 top-[110%]">
          {cart.length ? <AllcartItems allcartItems={cart} onClick={handleLogin} /> : <EmptyCart />}
        </div>
      )}
    </div>
  );
}

function AllcartItems({ allcartItems, onClick }) {
  return (
    <div className="min-w-max">
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
    <div className="text-sm flex justify-center items-center min-h-[100px]">
      <div className="text-center">
        <p className="text-yellow-400 text-4xl flex justify-center mb-2">
          <Icon icon="el:shopping-cart-sign" />
        </p>
        <p>Your Cart Is</p>
        <p>Empty</p>
      </div>
    </div>
  );
}
