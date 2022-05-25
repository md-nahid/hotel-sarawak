import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Emptycart from '../../Components/Emptycart/Emptycart';
import increment, { removeFromFav } from '../../Redux/Actions';
import { Icon } from '@iconify/react';
import Button from '../../Components/Button/Button';

export default function MyFavoriteitems() {
  let dispatch = useDispatch();
  let data = useSelector((state) => state.favoriteCount);
  return (
    <div>
      {data.length ? (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.map((item) => (
            <div key={item.idMeal}>
              <div className="relative">
                <img
                  src={item.strMealThumb}
                  alt="product"
                  className="w-full object-cover rounded-md"
                />
                <button
                  className="absolute right-3 top-3 bg-red-600 text-white text-xs font-semibold py-1 px-2 rounded-md"
                  onClick={() => dispatch(removeFromFav(item.idMeal))}
                >
                  Remove
                </button>
              </div>
              <div className="px-3 py-1 sm:py-4 text-slate-900">
                <h4 className="flex justify-between items-center">
                  <Link to="/" className="text-lg font-bold capitalize hover:underline">
                    {item.strMeal}
                  </Link>
                  <p className="flex items-center font-lato font-bold text-orange-600">
                    <span className="mr-1">
                      <Icon icon="bxs:star" />
                    </span>
                    <span>4.8</span>
                  </p>
                </h4>
                <p className="text-sm font-normal capitalize break-words">{item.strTags}</p>
                <div className="flex justify-between flex-wrap items-center mt-3">
                  <p className="text-sm text-red-600 font-bold flex flex-wrap">
                    <span>RM 15.00</span>
                    <sup className="text-gray-600 line-through italic text-xs ml-2">RM 26.50</sup>
                  </p>
                </div>
                <div className="mt-4">
                  <Button text="Buy Now" onClick={() => dispatch(increment(item.idMeal))} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Emptycart
          title="Your wishlist is empty"
          subTitle="Please add products to your wishlist."
        />
      )}
    </div>
  );
}
