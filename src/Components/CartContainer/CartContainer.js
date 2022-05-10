import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../../Redux/Actions";
// icons
import { Icon } from "@iconify/react";

export default function CartContainer() {
  let [showCart, setShowCart] = useState(false);
  let [cartData, setCartData] = useState([]);
  const { count } = useSelector((state) => state.cartCount);
  const { products } = useSelector((state) => state.cartCount);

  // setting cart values
  useEffect(() => {
    // other code
    fetch("products.json")
      .then((req) => req.json())
      .then(function (res) {
        for (let i = 0; i <= products.length; i++)
          res.meals.forEach((meal) => {
            if (meal.idMeal === products[i]) {
              setCartData([...cartData, meal]);
            }
          });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  // onBlur function
  function handleBlur(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  }

  return (
    <div
      className=" py-2 px-3 rounded border-2 bg-orange-600 border-orange-600 text-white text-xl relative"
      onBlur={handleBlur}
    >
      <div className="flex justify-around items-center">
        <button
          className="relative cursor-pointer"
          onClick={() => setShowCart(!showCart)}
        >
          <Icon icon="bi:cart-check-fill" />
          <span className="absolute top-0 right-0 translate-x-3 -translate-y-2 w-4 h-4 rounded-full flex justify-center items-center bg-orange-400 text-xs">
            {count}
          </span>
        </button>
        <div className="flex items-center">
          <span>
            <Icon icon="ant-design:user-outlined" />
          </span>
          <span className="ml-2 flex">
            <strong>A</strong> <span className="hidden md:block">ccount</span>
          </span>
        </div>
      </div>
      {showCart && (
        <div className="absolute w-full bg-DarkOrange p-2 rounded left-0 top-[110%]">
          {products.length ? (
            <AllcartItems allcartItems={cartData} />
          ) : (
            <EmptyCart />
          )}
        </div>
      )}
    </div>
  );
}

function AllcartItems({ allcartItems }) {
  function handleClick() {}
  let dispatch = useDispatch();
  return (
    <div>
      {allcartItems.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-[1fr_30px] gap-3 mb-2 items-center"
        >
          <div
            className="grid grid-cols-[40px_1fr] gap-3 items-center cursor-pointer"
            onClick={handleClick}
          >
            <div className="rounded-md overflow-hidden">
              <img
                src={item.strMealThumb}
                alt="product"
                className="w-full h-full"
              />
            </div>
            <div>
              <h5>{item.strMeal}</h5>
            </div>
          </div>
          <button onClick={() => dispatch(decrement(item.idMeal))}>
            <Icon icon="charm:cross" />
          </button>
        </div>
      ))}
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
