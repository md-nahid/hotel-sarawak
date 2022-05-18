import React from "react";
import Cardtwo from "../../Components/Cardtwo/Cardtwo";
import increment, { decrement, removefromCart } from "../../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import Emptycart from "../../Components/Emptycart/Emptycart";

export default function MyCartitems() {
  const { cart } = useSelector((state) => state.cartCount);
  const dispatch = useDispatch();
  return (
    <div>
      {cart.length === 0 ? (
        <Emptycart text="Empty Cart." />
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
  );
}
