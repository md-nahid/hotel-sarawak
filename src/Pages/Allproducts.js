import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Productfilter from "../Components/Productfilter/Productfilter";
import Card from "../Components/Card/Card";
import cn from "classnames";
import Pagination from "../Components/Pagination/Pagination";
// hooks
import useWindowsize from "../Hooks/useWindowsize";
// import images
import Bigimg from "../Images/bigimg.png";
import Cimg1 from "../Images/cimg1.png";
import Cimg2 from "../Images/cimg2.png";
import { Icon } from "@iconify/react";

export default function Allproducts() {
  let width = useWindowsize();
  let navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [categoryType, setCategoryType] = useState("all");
  const [ratingValue, setRatingValue] = useState(5);
  const [pageNumber, setPageNumber] = useState(0);
  const [filterOptions, setFilterOptions] = useState(false);
  let { state } = useLocation();
  // setting category type with link props
  useEffect(() => {
    if (state === null) {
      setCategoryType("all");
    } else {
      setCategoryType(state.test);
    }
  }, [state]);
  // pagination
  const userPerPage = 8;
  const pagesVisited = pageNumber * userPerPage;
  function changePage({ selected }) {
    setPageNumber(selected);
  }
  // range slider value change
  const [rangeValue, setrangeValue] = useState([200, 500]);
  const minDistance = 50;
  const rangeSliderChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setrangeValue([Math.min(newValue[0], rangeValue[1] - minDistance), rangeValue[1]]);
    } else {
      setrangeValue([rangeValue[0], Math.max(newValue[1], rangeValue[0] + minDistance)]);
    }
  };

  // load and filter products by category
  useEffect(() => {
    fetch("products.json")
      .then((req) => req.json())
      .then((res) => {
        if (categoryType === "all") {
          setProduct(res.meals);
        } else {
          setProduct(res.meals.filter((meal) => meal.strCategory === categoryType));
        }
      });
  }, [categoryType]);

  // filter option show and hide with hook
  useEffect(() => {
    if (width < 992) {
      setFilterOptions(false);
    } else {
      setFilterOptions(true);
    }
  }, [width]);

  return (
    <div>
      <Layout>
        <div className="h-40 my-10 overflow-hidden relative">
          <img src={Bigimg} alt="bigimg" className="w-full object-cover" />
          <div className="absolute left-0 top-0 bg-slate-800 bg-opacity-70 w-full h-full flex justify-center items-center">
            <h2 className="text-yellow-400 text-2xl sm:text-3xl md:text-5xl font-bold capitalize">discover the right food</h2>
          </div>
        </div>
        {/* filter options title  */}
        <div className="mb-5 mt-10">
          <div className="flex justify-between items-center">
            <h3 className="text-slate-600 text-2xl font-bold flex items-center">
              <button onClick={() => width < 992 && setFilterOptions(true)}>
                <Icon icon="akar-icons:settings-horizontal" />
              </button>
              Filters
            </h3>
            <div>
              <button className="text-orange-400 text-lg font-semibold cursor-pointer" onClick={() => setCategoryType("all")}>
                Reset All
              </button>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-1 xmd:grid-cols-[260px_1fr] gap-10 mb-10">
          {/* product filter options  */}
          <div
            className={cn(
              "fixed xmd:static bg-white top-0 z-50 xmd:z-0 left-0  h-screen xmd:h-auto xmd:px-0 pb-10 duration-500",
              filterOptions ? "w-auto overflow-y-scroll xmd:overflow-hidden px-5" : "w-0 px-0"
            )}
          >
            <div className="overflow-hidden">
              <div className="xmd:hidden text-xl font-bold capitalize my-10 flex justify-between">
                <span>Filter list</span>
                <button onClick={() => setFilterOptions(false)}>
                  <Icon icon="akar-icons:cross" />
                </button>
              </div>
              <Productfilter
                ProductCategory={ProductCategory}
                categoryType={categoryType}
                changeCategory={(value) => setCategoryType(value)}
                ratingBtns={ratingBtns}
                filterByRating={(v) => setRatingValue(v)}
                ratingValue={ratingValue}
                rangeValue={rangeValue}
                rangeSliderChange={rangeSliderChange}
                locationFilters={locationFilters}
              />
            </div>
          </div>
          {/* product view section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {product.slice(pagesVisited, pagesVisited + userPerPage).map((item) => (
              <Card
                key={item.idMeal}
                cardImg={item.strMealThumb}
                cardTitle={item.strMeal}
                cardSubtitle={item.strTags}
                onClick={() => navigate(`/${item.idMeal}`)}
              />
            ))}
          </div>
        </div>
        <div className="my-10 ">
          <Pagination userPerPage={userPerPage} pagesVisited={pagesVisited} changePage={changePage} Data={product} />
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

const locationFilters = [
  {
    label: "Ampang",
    value: "ampang",
  },
  {
    label: "Bmpang",
    value: "bmpang",
  },
  {
    label: "Cmpang",
    value: "cmpang",
  },
  {
    label: "Dmpang",
    value: "dmpang",
  },
  {
    label: "Empang",
    value: "empang",
  },
  {
    label: "Fmpang",
    value: "fmpang",
  },
  {
    label: "Gmpang",
    value: "safd",
  },
  {
    label: "Hmpang",
    value: "gmpang",
  },
  {
    label: "Impang",
    value: "impang",
  },
  {
    label: "Fmpang",
    value: "fasf",
  },
  {
    label: "Gmpang",
    value: "wthgrh",
  },
  {
    label: "Hmpang",
    value: "tryjrh",
  },
  {
    label: "Impang",
    value: "rtueghs",
  },
  {
    label: "Hmpang",
    value: "ryuikj",
  },
  {
    label: "Impang",
    value: "drtuer",
  },
  {
    label: "Fmpang",
    value: "ryhsb",
  },
  {
    label: "Gmpang",
    value: "sdgrsd",
  },
  {
    label: "Hmpang",
    value: "wertsd",
  },
  {
    label: "Impang",
    value: "esyrv",
  },
];
