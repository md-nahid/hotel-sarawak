import React, { useEffect, useState } from "react";
import Button from "../Components/Button/Button";
import Card from "../Components/Card/Card";
import Carousel from "../Components/Carousel/Carousel";
import CatagoriesCarousel from "../Components/CatagoriesCarousel/CatagoriesCarousel";
import Layout from "../Components/Layout/Layout";
import cn from "classnames";
// import images
import Bigimg from "../Images/bigimg.png";
import { Link } from "react-router-dom";

export default function Home() {
  const [product, setProduct] = useState([]);
  const [productType, setProductType] = useState("");
  // filter products by category
  useEffect(() => {
    fetch("products.json")
      .then((req) => req.json())
      .then((res) => {
        let a = res.meals.filter((meal) => meal.strCategory === productType);
        setProduct(a);
      });
  }, [productType]);
  // set all products
  useEffect(() => {
    fetch("products.json")
      .then((req) => req.json())
      .then((res) => setProduct(res.meals));
  }, []);

  // button groups
  const buttons = [
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

  return (
    <div>
      <div className="max-w-screen-xl w-full px-0 sm:px-4 m-auto">
        {/* top Carousel  */}
        <Carousel />
      </div>
      <Layout>
        {/* category carousel  */}
        <CatagoriesCarousel />
        {/* big sell product section  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 items-center my-10 md:my-20 ">
          <div>
            <h4 className="text-4xl font-bold text-black">
              One (1) 550g Tin of Milky Way Kuih Kapit
            </h4>
            <p className="text-lg font-normal mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              animi quaerat repellat non in perspiciatis excepturi totam odio
              minima delectus accusamus harum ab. Consequatur cumque voluptate
              maxime aliquam perspiciatis quae!
            </p>
            <div className="mt-10">
              <Button text="Add to cart" />
            </div>
          </div>
          <div>
            <img src={Bigimg} alt="bigimg" className="w-full" />
          </div>
        </div>
        {/* product filter button groups  */}
        <div className="flex flex-col md:flex-row mb-6 items-center">
          <h3 className="text-2xl text-black font-bold capitalize mr-5 ">
            Fave Food Picks
          </h3>
          <div className="flex items-center mt-6 md:mt-0">
            {buttons.map((button) => (
              <button
                key={button.value}
                className={cn(
                  "text-black text-sm sm:text-lg font-normal capitalize mx-1 sm:mx-4",
                  button.value === productType && "font-extrabold"
                )}
                onClick={() => setProductType(button.value)}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
        {/* product list  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-8">
          {product.slice(0, 8).map((item) => (
            <div key={item.idMeal}>
              <Card
                cardImg={item.strMealThumb}
                cardTitle={item.strMeal}
                cardSubtitle={item.strTags}
              />
            </div>
          ))}
        </div>
        <div className="mt-8 mb-20 text-right">
          <Link
            to="allproducts"
            className="inline-block text-orange-400 text-xl font-bold tracking-wider"
          >
            View All
          </Link>
        </div>
      </Layout>
    </div>
  );
}
