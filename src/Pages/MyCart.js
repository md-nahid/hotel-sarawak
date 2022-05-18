import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Tabs from "../Components/Tabs/Tabs";
import Layout from "../Components/Layout/Layout";
import Cardtwo from "../Components/Cardtwo/Cardtwo";
import increment, { decrement, removefromCart } from "../Redux/Actions";

export default function MyCart() {
  const [productType, setProductType] = useState("myCart");
  const { cart } = useSelector((state) => state.cartCount);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="max-w-xl w-full m-auto grid grid-cols-2 gap-5 text-center mt-10">
        <Tabs onClick={(v) => setProductType(v)} productType={productType} buttonsarr={buttonsarr} />
      </div>
      <Layout>
        <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-[1fr_0.5fr] gap-5">
          <div>
            {cart.map((item) => (
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
            ))}
          </div>
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
    value: "myCart",
  },
  {
    label: "Favorites",
    value: "favorites",
  },
];
