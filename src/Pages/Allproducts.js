import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import Productfilter from '../Components/Productfilter/Productfilter';
import Card from '../Components/Card/Card';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import increment, { addToFavorite } from '../Redux/Actions';
import Loadmore from '../Components/Loadmore/Loadmore';
// hooks
import useWindowsize from '../Hooks/useWindowsize';
// import images
import Bigimg from '../Images/bigimg.png';
import Cimg1 from '../Images/cimg1.png';
import Cimg2 from '../Images/cimg2.png';
import { Icon } from '@iconify/react';

export default function Allproducts() {
  let width = useWindowsize();
  let dispatch = useDispatch();
  let { state } = useLocation();
  const { products } = useSelector((state) => state.cartCount);
  const [slice, setSlice] = useState(8);
  const [categoryType, setCategoryType] = useState('all');
  const [ratingValue, setRatingValue] = useState(5);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
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
  // setting category type with link props
  useEffect(() => {
    if (state === null) {
      setCategoryType('all');
    } else {
      setCategoryType(state.test);
    }
  }, [state]);
  // filter option show and hide with hook
  useEffect(() => {
    if (width < 992) {
      setShowFilterOptions(false);
    } else {
      setShowFilterOptions(true);
    }
  }, [width]);

  return (
    <div>
      <Layout>
        <div className="h-40 my-10 overflow-hidden relative">
          <img src={Bigimg} alt="bigimg" className="w-full object-cover" />
          <div className="absolute left-0 top-0 bg-slate-800 bg-opacity-70 w-full h-full flex justify-center items-center">
            <h2 className="text-yellow-400 text-2xl sm:text-3xl md:text-5xl font-bold capitalize">
              discover the right food
            </h2>
          </div>
        </div>
        {/* filter options title  */}
        <div className="mb-5 mt-10 sticky top-0 py-3 bg-white z-40 md:static">
          <div className="flex justify-between items-center">
            <h3 className="text-slate-600 text-2xl font-bold flex items-center">
              <button
                className="flex items-center"
                onClick={() => width < 992 && setShowFilterOptions(true)}
              >
                <Icon icon="akar-icons:settings-horizontal" />
                Filters
              </button>
            </h3>
            <div>
              <button
                className="text-orange-400 text-lg font-semibold cursor-pointer"
                onClick={() => setCategoryType('all')}
              >
                Reset All
              </button>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-1 xmd:grid-cols-[260px_1fr] gap-10 mb-10">
          {/* product filter options  */}
          <div
            className={cn(
              'fixed xmd:static bg-white top-0 z-50 xmd:z-0 left-0  h-screen xmd:h-auto xmd:px-0 pb-10 duration-500',
              showFilterOptions ? 'w-auto overflow-y-scroll xmd:overflow-hidden px-5' : 'w-0 px-0'
            )}
          >
            <div className="overflow-hidden">
              <div className="xmd:hidden text-xl font-bold capitalize my-10 flex justify-between">
                <span>Filter list</span>
                <button onClick={() => setShowFilterOptions(false)}>
                  <Icon icon="akar-icons:cross" />
                </button>
              </div>
              <Productfilter
                ProductCategory={ProductCategory}
                categoryType={categoryType}
                changeCategory={(value) => {
                  setCategoryType(value);
                  setSlice(8);
                }}
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
            {products
              .filter((item) =>
                categoryType === 'all'
                  ? item.strCategory !== categoryType
                  : item.strCategory === categoryType
              )
              .slice(0, slice)
              .map((item) => (
                <Card
                  key={item.idMeal}
                  cardImg={item.strMealThumb}
                  cardTitle={item.strMeal}
                  cardSubtitle={item.strTags}
                  onClick={() => dispatch(increment(item.idMeal))}
                  cardTitleLink={`/${item.idMeal}`}
                  addtoFavorite={() => dispatch(addToFavorite(item.idMeal))}
                />
              ))}
          </div>
        </div>
        <div className="my-10 text-center">
          <Loadmore onClick={() => setSlice(slice + 8)} />
        </div>
      </Layout>
    </div>
  );
}

// category items
const ProductCategory = [
  {
    label: 'Cake & milk',
    value: 'cake-milk',
    linkImg: Cimg1,
  },
  {
    label: 'Coffes & Teas',
    value: 'coffes-teas',
    linkImg: Cimg2,
  },
  {
    label: 'Vegetables',
    value: 'vegetable',
    linkImg: Cimg1,
  },
  {
    label: 'Desert',
    value: 'desert',
    linkImg: Cimg2,
  },
];
// rating buttons
const ratingBtns = [
  {
    label: '3',
    value: 3,
  },
  {
    label: '4',
    value: 4,
  },
  {
    label: '5',
    value: 5,
  },
];

const locationFilters = [
  {
    label: 'Ampang',
    value: 'ampang',
  },
  {
    label: 'Bmpang',
    value: 'bmpang',
  },
  {
    label: 'Cmpang',
    value: 'cmpang',
  },
  {
    label: 'Dmpang',
    value: 'dmpang',
  },
  {
    label: 'Empang',
    value: 'empang',
  },
  {
    label: 'Fmpang',
    value: 'fmpang',
  },
  {
    label: 'Gmpang',
    value: 'safd',
  },
  {
    label: 'Hmpang',
    value: 'gmpang',
  },
  {
    label: 'Impang',
    value: 'impang',
  },
  {
    label: 'Fmpang',
    value: 'fasf',
  },
  {
    label: 'Gmpang',
    value: 'wthgrh',
  },
  {
    label: 'Hmpang',
    value: 'tryjrh',
  },
  {
    label: 'Impang',
    value: 'rtueghs',
  },
  {
    label: 'Hmpang',
    value: 'ryuikj',
  },
  {
    label: 'Impang',
    value: 'drtuer',
  },
  {
    label: 'Fmpang',
    value: 'ryhsb',
  },
  {
    label: 'Gmpang',
    value: 'sdgrsd',
  },
  {
    label: 'Hmpang',
    value: 'wertsd',
  },
  {
    label: 'Impang',
    value: 'esyrv',
  },
];
