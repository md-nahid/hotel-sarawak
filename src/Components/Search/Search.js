import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { hideSearch } from '../../Redux/Actions';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@iconify/react';

export default function Search() {
  const dispatch = useDispatch();
  let [value, setValue] = useState('');
  const { products } = useSelector((state) => state.cartCount);
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen bg-yellow-400 pb-3 overflow-y-scroll z-50"
      animate={animate}
    >
      <div className="w-full sticky top-0 z-50 bg-white py-3">
        <input
          type="text"
          placeholder="Search by names..."
          className="w-full h-full pl-5 pr-14 rounded-md outline-none text-xl text-center py-1 sm:py-3 md:py-5"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus={true}
        />
        <button
          className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-gray-500 hover:text-gray-900"
          onClick={() => {
            setValue('');
            dispatch(hideSearch());
          }}
        >
          <Icon icon="akar-icons:cross" />
        </button>
      </div>
      <div className="py-5 px-3 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {products
          .filter((item) => item.strMeal.toLowerCase().includes(value))
          .map((prod) => (
            <Card
              key={prod.idMeal}
              cardImg={prod.strMealThumb}
              cardTitle={prod.strMeal}
              cardSubtitle={prod.strTags}
              cardTitleLink={`/${prod.idMeal}`}
            />
          ))}
      </div>
    </motion.div>
  );
}
// serarch result animate values
const animate = {
  opacity: [0, 1],
  transition: { duration: 0.3 },
};
