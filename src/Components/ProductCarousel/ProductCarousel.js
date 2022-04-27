import React, { useState } from "react";
import useWindowsize from "../../Hooks/useWindowsize";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// import icons
import { Icon } from "@iconify/react";
import SlideImg from "../../Images/bigimg.png";
import SlideImg2 from "../../Images/slideProductimg.png";

export default function ProductCarousel() {
  let width = useWindowsize();
  let [state, setState] = useState(SlideImg);
  let allImg = [
    {
      id: "a57ftg",
      img1: SlideImg,
    },
    {
      id: "ykujh8",
      img1: SlideImg2,
    },
    {
      id: "kiy587",
      img1: SlideImg,
    },
    {
      id: "945gdj",
      img1: SlideImg2,
    },
    {
      id: "jhty12327",
      img1: SlideImg,
    },
    {
      id: "kyur789",
      img1: SlideImg2,
    },
  ];
  function handleClick(value) {
    setState(value);
  }
  return (
    <div>
      <div className="grid grid-cols-[1fr] sm:grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-5 items-center">
        <div className="max-h-[426px] h-full grid grid-cols-1 sm:grid-rows-[auto_80%_auto] sm:w-full">
          <div className="h-auto hidden sm:flex justify-center items-center">
            <button className="text-4xl goDown text-slate-400">
              <Icon icon="akar-icons:chevron-up" />
            </button>
          </div>
          <div className="h-full sm:h-[100%]">
            <Swiper
              direction={width > 575 && "vertical"}
              loop={true}
              slidesPerView={4}
              spaceBetween={10}
              navigation={{
                nextEl: ".goUp",
                prevEl: ".goDown",
              }}
              modules={[Navigation]}
              className="mySwiper5 h-full"
            >
              {allImg.map((item) => (
                <SwiperSlide key={item.id}>
                  <button className="h-full flex items-center w-full rounded-md overflow-hidden" onClick={() => handleClick(item.img1)}>
                    <img src={item.img1} alt="icon" className="w-full h-full" />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden sm:flex justify-center items-center h-auto">
            <button className="text-4xl goUp text-slate-400">
              <Icon icon="akar-icons:chevron-down" />
            </button>
          </div>
        </div>
        <div className="max-h-[426px] h-full">
          <img src={state} alt="icon" className="w-full h-full object-cover object-center rounded-md" />
        </div>
      </div>
    </div>
  );
}
