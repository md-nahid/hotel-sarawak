import React, { useEffect, useState } from "react";
import Cardtwo from "../../Components/Cardtwo/Cardtwo";
import increment, { decrement, removefromCart } from "../../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import Emptycart from "../../Components/Emptycart/Emptycart";
import { Link } from "react-router-dom";

export default function MyCartitems() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartCount);
  let [all, setAll] = useState({
    subTotal: 0,
    shipping: 0,
    taxes: 0,
    allTotal: 0,
  });
  useEffect(() => {
    let x = 0;
    let y = 0;
    let z = 0;
    cart.forEach((item) => {
      x += item.price * item.qty;
      y = (x * 5) / 100;
      z = (x * 5) / 100;
    });
    setAll({
      ...all,
      subTotal: x,
      shipping: y.toFixed(2),
      taxes: z.toFixed(2),
      allTotal: (x + y + z).toFixed(2),
    });
  }, [all, cart]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr] gap-5">
      <div>
        {cart.length === 0 ? (
          <Emptycart title="Your cart is Empty" subTitle="Please add products to your cart" />
        ) : (
          cart.map((item) => (
            <Cardtwo
              key={item.idMeal}
              cardImg={item.strMealThumb}
              title={item.strMeal}
              subTitle={item.strCategory}
              price={item.price}
              quantity={item.qty}
              total={item.total}
              inCrement={() => dispatch(increment(item.idMeal))}
              deCrement={() => dispatch(decrement(item.idMeal))}
              remove={() => dispatch(removefromCart(item.idMeal))}
            />
          ))
        )}
      </div>
      <div>
        <div className="p-5 grid grid-cols-1 gap-3 bg-slate-200 rounded-md">
          <h4 className="text-lg font-bold font-meriweather">Order Summary</h4>
          <div className="font-bold flex justify-between items-center ">
            <p className="text-slate-500">Subtotal</p>
            <p>$ {all.subTotal}</p>
          </div>
          <div className="font-bold flex justify-between items-center">
            <p className="text-slate-500">Shipping estimate</p>
            <p>$ {all.shipping}</p>
          </div>
          <div className="font-bold flex justify-between items-center">
            <p className="text-slate-500">Tax estimate</p>
            <p>$ {all.taxes}</p>
          </div>
          <div className="font-bold flex justify-between items-center border-t border-black pt-3">
            <p className="text-slate-900 font-bold">Order total</p>
            <p>$ {all.allTotal}</p>
          </div>
          <div className="mt-5">
            <Link
              to="checkout"
              className="block w-full py-2 text-center bg-orange-600 text-[16px] font-semibold text-white border-2 border-orange-600 rounded-md hover:bg-transparent hover:text-orange-600 duration-300"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
