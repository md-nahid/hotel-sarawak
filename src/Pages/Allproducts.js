import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import Productfilter from "../Components/Productfilter/Productfilter";
import Card from "../Components/Card/Card";
// import images
import Bigimg from "../Images/bigimg.png";
import Cimg1 from "../Images/cimg1.png";
import Cimg2 from "../Images/cimg2.png";

export default function Allproducts() {
  const [product, setProduct] = useState([]);
  const [categoryType, setCategoryType] = useState("");
  const [ratingValue, setRatingValue] = useState(5);

  // range slider value change
  const [rangeValue, setrangeValue] = useState([200, 500]);
  const minDistance = 50;
  const rangeSliderChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setrangeValue([
        Math.min(newValue[0], rangeValue[1] - minDistance),
        rangeValue[1],
      ]);
    } else {
      setrangeValue([
        rangeValue[0],
        Math.max(newValue[1], rangeValue[0] + minDistance),
      ]);
    }
  };
  // filter products by category
  useEffect(() => {
    fetch("products.json")
      .then((req) => req.json())
      .then((res) => {
        let a = res.meals.filter((meal) => meal.strCategory === categoryType);
        setProduct(a);
      });
  }, [categoryType]);
  // set all products
  useEffect(() => {
    fetch("products.json")
      .then((req) => req.json())
      .then((res) => setProduct(res.meals));
  }, []);

  return (
    <div>
      <Layout>
        <div className="h-40 my-10 overflow-hidden relative">
          <img src={Bigimg} alt="bigimg" className="w-full object-cover" />
          <div className="absolute left-0 top-0 bg-slate-800 bg-opacity-70 w-full h-full flex justify-center items-center">
            <h2 className="text-yellow-400 text-5xl font-bold capitalize">
              discover the right food
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-[260px_1fr] gap-10 mb-10">
          <div>
            <Productfilter
              ProductCategory={ProductCategory}
              categoryType={categoryType}
              changeCategory={(value) => setCategoryType(value)}
              ratingBtns={ratingBtns}
              filterByRating={(v) => setRatingValue(v)}
              ratingValue={ratingValue}
              rangeValue={rangeValue}
              rangeSliderChange={rangeSliderChange}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pb-8 min-h-screen">
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
        </div>
      </Layout>
    </div>
  );
}

// category items
const ProductCategory = [
  {
    label: "Cake & milk",
    value: "cake-milk",
    linkImg: Cimg1,
  },
  {
    label: "Coffes & Teas",
    value: "coffes-teas",
    linkImg: Cimg2,
  },
  {
    label: "Vegetables",
    value: "vegetable",
    linkImg: Cimg1,
  },
  {
    label: "Desert",
    value: "desert",
    linkImg: Cimg2,
  },
];
// rating buttons
const ratingBtns = [
  {
    label: "3",
    value: 3,
  },
  {
    label: "4",
    value: 4,
  },
  {
    label: "5",
    value: 5,
  },
];
