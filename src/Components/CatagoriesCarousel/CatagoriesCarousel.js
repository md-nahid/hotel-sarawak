import React from "react";
import { Link } from "react-router-dom";
// icons
import { Icon } from "@iconify/react";
// import swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
// import data
import { CategoryData } from "../Alldata/HomeSlider.data";

export default function CatagoriesCarousel() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold capitalize">all categories</h3>
        <div>
          <button className="text-2xl font-bold text-black categoryPrev">
            <Icon icon="akar-icons:chevron-left" />
          </button>
          <button className="text-2xl font-bold text-black ml-6 categoryNext">
            <Icon icon="akar-icons:chevron-right" />
          </button>
        </div>
      </div>
      <div className="mt-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          speed={800}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".categoryNext",
            prevEl: ".categoryPrev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            850: {
              slidesPerView: 5,
            },
            992: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="categorySwiper"
        >
          {CategoryData.map((data) => (
            <SwiperSlide key={data.id}>
              <div className={`h-full rounded-2xl overflow-hidden relative ${data.bgColor}`}>
                <div className="w-full h-32 flex justify-center items-center">
                  <img src={data.cImg} alt={data.cName} className="max-w-full" />
                </div>
                <div className="text-center pb-4">
                  <h4 className="text-slate-900 text-xl font-semibold tracking-wide">{data.cName}</h4>
                  <p className="text-[16px] font-normal ">{data.cQuantity} items</p>
                </div>
                <Link to={"/allproducts"} state={{ test: data.cId }} className="absolute left-0 top-0 right-0 bottom-0"></Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
