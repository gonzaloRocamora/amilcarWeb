import React from "react";
import sliderMadona from "./fotos";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectCube, Pagination } from "swiper";
SwiperCore.use([EffectCube, Pagination]);


export default function Madona() {
  
  
  return (
    <div className='divComponente'>
    <h2>Madona</h2>
    <h3>Desliza para mas imagenes</h3>
    <section>
      <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      
      pagination={true}
      className="mySwiper"
      >
      
      {sliderMadona.map((item, index) => {
        return (
          <div
            
          >
            {<SwiperSlide><img src={item} alt='slider' className="image"></img></SwiperSlide>}
          </div>
        );
      })}
      </Swiper>
    </section>
  </div>
  );
}
