import React from "react";
import Button from "../Button/Button";
// import swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
// import slider data
import { HomeSliderData } from "../Alldata/HomeSlider.data";
// icons
import { Icon } from "@iconify/react";
// import redux actions
import increment from "../../Redux/Actions";
import { useDispatch } from "react-redux";

export default function Carousel() {
  const dispatch = useDispatch();
  return (
    <div className="my-6">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper pb-10"
      >
        {HomeSliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-cover sm:bg-contain bg-no-repeat bg-right overflow-hidden relative">
              <div className="absolute  right-0 w-full sm:w-6/12 h-full -z-10">
                <img
                  src={item.productImg}
                  alt="product"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gradient-to-r from-[#ffc229] to-[rgba(255,255,255,0.49)] w-full ">
                <div className=" w-10/12 lg:w-6/12 pl-5 md:pl-20 py-10 md:py-20">
                  <h3 className="text-slate-900 text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
                    {item.title}
                  </h3>
                  <p className="text-black text-lg font-bold first-letter:uppercase mb-5">
                    {item.subtitle}
                  </p>
                  <p className="text-sm font-bold flex items-center flex-wrap">
                    <span className="mr-2">
                      <Icon icon="bx:time-five" />
                    </span>
                    <span>{item.limitedOffer}</span>
                    <span className="text-3xl ml-2">
                      RM {item.offerPrice}
                      <sup className="ml-3 text-gray-500 line-through">
                        Rm{item.regularPrice}
                      </sup>
                    </span>
                  </p>
                  <div className="mt-8">
                    <Button
                      text="Add to cart"
                      onClick={() => dispatch(increment(item.id))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
