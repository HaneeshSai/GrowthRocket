// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCube, Pagination, Autoplay } from "swiper/modules";

export default function ImageCubeEffect({ images, style, dalayTime }) {
  return (
    <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      modules={[EffectCube, Pagination, Autoplay]}
      className="mySwiper"
      loop={true}
      autoplay={{
        delay: 5000,
      }}
    >
      {images.map((e, i) => (
        <SwiperSlide className="" key={i}>
          <img src={e} alt="" className={style} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
