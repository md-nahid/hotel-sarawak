import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";
import Card from "../Components/Card/Card";
import Carousel from "../Components/Carousel/Carousel";
import CatagoriesCarousel from "../Components/CatagoriesCarousel/CatagoriesCarousel";
import Layout from "../Components/Layout/Layout";
import Bigimg from "../Images/bigimg.png";
import increment from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Tabs from "../Components/Tabs/Tabs";
import { motion } from "framer-motion";
// import images

export default function Home() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 items-center mt-14 md:mt-20">
          <div>
            <h4 className="text-4xl font-bold text-black">One (1) 550g Tin of Milky Way Kuih Kapit</h4>
            <p className="text-lg font-normal mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi quaerat repellat non in perspiciatis excepturi totam odio minima
              delectus accusamus harum ab. Consequatur cumque voluptate maxime aliquam perspiciatis quae!
            </p>
            <div className="mt-10">
              <Button text="Add to cart" onClick={() => dispatch(increment("52977"))} />
            </div>
          </div>
          <div>
            <img src={Bigimg} alt="bigimg" className="w-full" />
          </div>
        </div>
        {/* product filter button groups  */}
        <div className="mt-14 md:mt-20">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl text-black font-bold capitalize mr-5 ">Food Picks</h3>
            <Link to="allproducts" className="inline-block py-2 px-5 bg-orange-600 text-white text-lg rounded-md hover:bg-orange-700">
              All Products
            </Link>
          </div>
          <div className="mt-5">
            <Tabs onClick={(v) => setProductType(v)} productType={productType} />
          </div>
        </div>
        {/* product list  */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 min-h-[600px]">
          {products
            .filter((meal) => meal.strCategory === productType)
            .slice(0, 8)
            .map((item) => (
              <motion.div key={item.idMeal} animate={animate}>
                <Card cardImg={item.strMealThumb} cardTitle={item.strMeal} cardSubtitle={item.strTags} onClick={() => navigate(item.idMeal)} />
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
