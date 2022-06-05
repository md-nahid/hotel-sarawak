import React from 'react';
import { Link } from 'react-router-dom';
import CartContainer from '../CartContainer/CartContainer';
import useWindowsize from '../../Hooks/useWindowsize';
import Layout from '../Layout/Layout';
// import images
import Logo from '../../Images/logo.svg';
import Mobilelogo from '../../Images/mobilelogo.svg';

export default function Topbar() {
  const width = useWindowsize();
  return (
    <div className="py-3 px-2 sm:px-4 md:mt-5 sticky top-0 bg-white z-50">
      <Layout>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 xmd:gap-10 items-center ">
          <div className="flex items-center">
            <Link to="/" className="inline-block w-full sm:w-40">
              <img
                src={width > 575 ? Logo : Mobilelogo}
                alt="logo"
                className={width > 575 ? 'max-w-[200px] w-full' : 'max-w-[50px] w-full'}
              />
            </Link>
          </div>
          <div>
            <div className="flex justify-end">
              <CartContainer />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
