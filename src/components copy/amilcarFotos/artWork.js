
import React from "react";

import { collection } from "./objFotos";
import {useParams } from 'react-router-dom';
import "./styles.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { EffectCube, Pagination } from "swiper";
SwiperCore.use([EffectCube, Pagination]);
//UTILIZO USEPARAMS PARA DESTRUCTURAR LA PROP QUE LE PASO COMO NAME A LA RUTA EN MI APP ( una prop de react route )
//la variable name es la paso a la ruta en mi app al clickear el link en store 
export default function ArtWork() {
  
  const {name} = useParams();
  return (
    <div className="divComponente">
      <h2>{collection[name].title}</h2>
      <h3>Desliza para mas imagenes</h3>
      <section>
        <div className="divSwiper">
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
            {collection[name].fotos.map((item) => {
              return (
                <div >
                  {
                    <SwiperSlide className="swiperStore">
                      <img src={item} alt="slider" className="image"></img>
                    </SwiperSlide>
                  }
                </div>
              );
            })}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
