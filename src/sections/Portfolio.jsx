import React from "react";
import { LinearGradient } from "react-text-gradients";
import vid1 from "../assets/videos/1.mp4";
import vid2 from "../assets/videos/2.mp4";
import vid3 from "../assets/videos/3.mp4";
import vid4 from "../assets/videos/4.mp4";
import vid5 from "../assets/videos/5.mp4";
import vid6 from "../assets/videos/6.mp4";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import TwoCardsEffect from "../components/TwoCardsEffect";

const vids = [vid1, vid2, vid3, vid4, vid5, vid6];

export default function Portfolio() {
  return (
    <div className="mx-5 mb-36">
      <h1 className="text-[55px] font-medium tracking-tight leading-[60px]">
        We create the highest quality content for brands. <br />
        <LinearGradient gradient={["to right", "#ffb701 ,#ff341e"]}>
          And we will do the same for you
        </LinearGradient>
      </h1>
      <div className="flex gap-20 my-14">
        <Swiper
          loop={true}
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={32}
          grabCursor={true}
          className="mySwiper"
          freeMode={true}
        >
          {vids.map((e, i) => (
            <SwiperSlide
              key={i}
              className="border-2 border-red-900 p-1 rounded-md"
            >
              <video
                src={e}
                className=""
                width="320"
                height="190"
                autoPlay
                muted
                controls
              ></video>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <div>
          <h1 className="text-[55px] font-medium tracking-tight leading-[60px] mt-36">
            Numbers that speak{" "}
            <LinearGradient gradient={["to right", "#ffb701 ,#ff341e"]}>
              louder than words
            </LinearGradient>
          </h1>
          <div>
            <TwoCardsEffect
              children={
                <div className="py-10">
                  <div className="text-black text-4xl flex justify-around font-semibold">
                    <p className="text-center">
                      25 Million+ <br />
                      <span className="text-2xl">Views</span>
                    </p>
                    <p className="text-center">
                      200,000 Hours+ <br />{" "}
                      <span className="text-2xl">Watch Time</span>
                    </p>
                    <p className="text-center">
                      10 Million+ <br />{" "}
                      <span className="text-2xl">Audience</span>
                    </p>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
