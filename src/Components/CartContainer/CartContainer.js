import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Emptycart from '../Emptycart/Emptycart';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { removefromCart } from '../../Redux/Actions';
import { showSearch } from '../../Redux/Actions';
// icons
import { Icon } from '@iconify/react';

export default function CartContainer() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let [showCart, setShowCart] = useState(false);
  const { cart } = useSelector((state) => state.cartCount);
  const fav = useSelector((state) => state.favoriteCount);
  const user = useSelector((state) => state.login);

  function handleClick(e) {
    let x = e.currentTarget.id;
    let y = e.target.id;
    if (y === 'cartOverlay') {
      setShowCart(false);
    } else if (x === 'closeCart') {
      setShowCart(false);
    } else if (x === 'checkout') {
      setShowCart(false);
      if (user) {
        navigate('/checkout');
      } else {
        navigate('/auth');
      }
    } else if (x === 'viewCart') {
      setShowCart(false);
      if (user) {
        navigate('/mycart');
      } else {
        navigate('/auth');
      }
    }
  }

  return (
    <div className="flex">
      <button
        className="p-2 text-3xl rounded-full mr-5 text-slate-500"
        onClick={() => dispatch(showSearch())}
      >
        <Icon icon="charm:search" />
      </button>
      <button
        className="relative p-2 text-3xl rounded-full mr-5 text-red-500"
        onClick={() => navigate('/mycart/favorites')}
      >
        <Icon icon="material-symbols:favorite-rounded" />
        <span className="absolute top-0 right-0 px-1 rounded-full  bg-red-600 text-white text-sm">
          {fav.length}
        </span>
      </button>
      <button
        className="relative p-2 text-3xl rounded-full mr-5 text-orange-500"
        onClick={() => setShowCart(!showCart)}
      >
        <Icon icon="heroicons-solid:shopping-bag" />
        <span className="absolute top-0 right-0 px-1 rounded-full  bg-orange-500 text-white text-sm">
          {cart.length}
        </span>
      </button>
      <button
        className="p-2 text-3xl border-[1px] border-slate-500 rounded-full text-slate-500"
        onClick={() => (user ? navigate('/mycart') : navigate('/auth'))}
      >
        <Icon icon="ant-design:user-outlined" />
      </button>
      <AnimatePresence>
        {showCart && <AllcartItems allcartItems={cart} onClick={handleClick} />}
      </AnimatePresence>
    </div>
  );
}

function AllcartItems({ allcartItems, onClick }) {
  let dispatch = useDispatch();
  let [subTotal, setSubTotal] = useState(0);
  const { cart } = useSelector((state) => state.cartCount);
  useEffect(() => {
    let x = 0;
    cart.forEach((item) => {
      x += item.price * item.qty;
    });
    setSubTotal(x);
  }, [subTotal, cart]);

  return (
    <div
      className="text-slate-700 fixed left-0 right-0 top-0 bottom-0 h-screen w-full bg-slate-700 bg-opacity-50 overflow-hidden"
      id="cartOverlay"
      onClick={onClick}
    >
      <motion.div
        className="max-w-md w-full h-full ml-auto bg-white grid grid-rows-[80px_1fr_120px] gap-3"
        initial="initial"
        animate="animate"
        exit="initial"
        variants={variant}
      >
        <div className="flex justify-between items-center px-5 font-semibold text-xl bg-white w-full shadow-slate-100 shadow-md">
          <h4>Shopping cart</h4>
          <button className="text-3xl" onClick={onClick} id="closeCart">
            <Icon icon="akar-icons:cross" />
          </button>
        </div>
        <div
          className={cn(
            'px-3 overflow-y-scroll',
            allcartItems.length || 'flex justify-center items-center'
          )}
        >
          {allcartItems.length ? (
            allcartItems.map((item, index) => (
              <div key={index} className="grid grid-cols-[auto_1fr_auto] gap-5 items-center mb-4">
                <div className="max-w-[100px] w-full">
                  <img src={item.strMealThumb} alt="product" className="w-full rounded-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-[16px] font-lato capitalize">{item.strMeal}</h3>
                  <div className="mt-2 text-xs flex items-center">
                    <span className="py-1 px-3 rounded-full bg-slate-300">$ {item.price}</span>
                    <span className="mx-2">
                      <Icon icon="akar-icons:cross" />
                    </span>
                    <span>{item.qty}</span>
                  </div>
                </div>
                <div>
                  <button
                    className="text-lg hover:text-red-600"
                    onClick={() => dispatch(removefromCart(item.idMeal))}
                  >
                    <Icon icon="akar-icons:cross" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="">
              <Emptycart
                title="Your cart is empty"
                subTitle="Please add product to your cart list"
              />
            </div>
          )}
        </div>
        <div className="bg-white shadow-slate-600 shadow-md p-5">
          <div className="">
            <div className="font-bold flex justify-between items-center mb-3">
              <p className="text-slate-500">Subtotal</p>
              <p className="text-black">$ {subTotal}</p>
            </div>
            <button
              onClick={onClick}
              id="checkout"
              disabled={allcartItems.length ? false : true}
              className="w-full text-center py-3 bg-orange-600 rounded-md text-white font-semibold border-[1px] border-orange-600 hover:bg-transparent duration-300 hover:text-orange-600"
            >
              Checkout
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const variant = {
  initial: {
    x: 999,
    transition: { duration: 0.5 },
  },
  animate: {
    x: [999, 0],
    transition: { duration: 0.5 },
  },
};
