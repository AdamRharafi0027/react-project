import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";

import jacket1 from "../../image/jacket1.png";
import "./MostPopular.css";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const MostPopular = () => {
  
    return (
      <>
      <section id="mostPop" className="mt-5">
        <h1 className="text-uppercase mt-5 position-relative">most popular</h1>
        <div className="sw mt-5 align-items-center">

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
            width: 480
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        
        pagination={{ clickable: true }} 
        navigation 
        // loop={true} 
        className="d-flex justify-content-center  align-items-center"
        style={{marginInline:'50px'}}
      >
        <SwiperSlide className="d-flex justify-content-center  align-items-center" style={{marginInline:'20px'}}>
                <img src={jacket1} alt="jacket" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={jacket1} alt="jacket" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={jacket1} alt="jacket" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={jacket1} alt="jacket" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={jacket1} alt="jacket" />
              </SwiperSlide>
      </Swiper>
      </div>
      </section>
      </>
    );
  };

export default MostPopular;
