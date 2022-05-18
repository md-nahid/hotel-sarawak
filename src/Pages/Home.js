import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card/Card";
import Carousel from "../Components/Carousel/Carousel";
import CatagoriesCarousel from "../Components/CatagoriesCarousel/CatagoriesCarousel";
import Layout from "../Components/Layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import increment, { addToFavorite } from "../Redux/Actions";
import Tabs from "../Components/Tabs/Tabs";
import { motion } from "framer-motion";
import MostSoldProduct from "../Components/MostSoledProduct/MostSoldProduct";
// import images

export default function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cartCount);
  const [productType, setProductType] = useState("cake-milk");
  return (
    <div>
      <div className="max-w-screen-xl w-full px-0 sm:px-4 m-auto mt-11">
        <Carousel />
      </div>
      <Layout>
        <div className="mt-14 md:mt-10">
          <CatagoriesCarousel />
        </div>
        <div>
          <MostSoldProduct />
        </div>
        {/* product filter button groups  */}
        <div className="mt-14 md:mt-20">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl text-black font-bold capitalize mr-5 ">Food Picks</h3>
            <Link
              to="allproducts"
              className="inline-block py-2 px-5 bg-orange-600 border-2 border-orange-600 text-white text-lg font-semibold rounded-md hover:bg-transparent hover:text-orange-600 duration-300"
            >
              All Products
            </Link>
          </div>
          <div className="mt-5 grid grid-cols-4 gap-0 text-center border-b-4 border-slate-200">
            <Tabs onClick={(v) => setProductType(v)} productType={productType} buttonsarr={buttonsarr} />
          </div>
        </div>
        {/* product list  */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 min-h-[600px]">
          {products
            .filter((meal) => meal.strCategory === productType)
            .slice(0, 8)
            .map((item) => (
              <motion.div key={item.idMeal} animate={animate}>
                <Card
                  cardImg={item.strMealThumb}
                  cardTitle={item.strMeal}
                  cardSubtitle={item.strTags}
                  onClick={() => dispatch(increment(item.idMeal))}
                  addtoFavorite={() => dispatch(addToFavorite(item.idMeal))}
                />
              </motion.div>
            ))}
        </div>
      </Layout>
    </div>
  );
}

const animate = {
  y: [20, 0],
  scale: [0.7, 1],
  opacity: [0, 1],
  transition: { duration: 0.5 },
};

// button groups
const buttonsarr = [
  {
    label: "Cake & milk",
    value: "cake-milk",
  },
  {
    label: "Coffes & Teas",
    value: "coffes-teas",
  },
  {
    label: "Vegetables",
    value: "vegetable",
  },
  {
    label: "Desert",
    value: "desert",
  },
];
