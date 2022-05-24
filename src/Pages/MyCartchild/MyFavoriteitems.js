import React from "react";
import { useSelector } from "react-redux";
import Emptycart from "../../Components/Emptycart/Emptycart";
import Cardtwo from "../../Components/Cardtwo/Cardtwo";

export default function MyFavoriteitems() {
  let data = useSelector((state) => state.favoriteCount);
  return (
    <div>
      {data.length ? (
        <div>
          {data.map((item) => (
            <Cardtwo key={item.idMeal} cardImg={item.strMealThumb} title={item.strMeal} subTitle={item.strCategory} price={item.price} />
          ))}
        </div>
      ) : (
        <Emptycart title="Your wishlist is empty" subTitle="Please add products to your wishlist." />
      )}
    </div>
  );
}
