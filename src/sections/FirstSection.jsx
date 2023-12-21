import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { LinearGradient } from "react-text-gradients";
import ImageCubeEffect from "../components/ImageCubeEffect";
import TwoCardsEffect from "../components/TwoCardsEffect";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Autoplay } from "swiper/modules";

const images = {
  1: [
    "https://growthrocket.media/_next/image?url=%2F01.jpg&w=1920&q=75",
    "https://growthrocket.media/_next/image?url=%2F02.jpg&w=1920&q=75",
    "https://growthrocket.media/_next/image?url=%2F03.JPG&w=1920&q=75",
  ],
  2: [
    "https://growthrocket.media/_next/image?url=%2F04.JPG&w=1920&q=75",
    "https://growthrocket.media/_next/image?url=%2F05.jpeg&w=1920&q=75",
    "https://growthrocket.media/_next/image?url=%2F06.jpeg&w=1920&q=75",
  ],
  3: [
    "https://growthrocket.media/_next/image?url=%2F06.jpg&w=1920&q=75",
    "https://growthrocket.media/_next/image?url=%2F08.JPG&w=1920&q=75",
    "https://growthrocket.media/_next/image?url=%2F07.jpeg&w=1920&q=75",
  ],
};

const brands = [
  "https://growthrocket.media/_next/image?url=%2Fbrands%2Frangde.png&w=256&q=75",
  "https://growthrocket.media/_next/image?url=%2Fbrands%2Fshishu.jpg&w=256&q=75",
  "https://growthrocket.media/brands/fisdom.svg",
  "https://growthrocket.media/_next/image?url=%2Fbrands%2Fzypp.png&w=256&q=75",
  "https://growthrocket.media/_next/image?url=%2Fbrands%2Fpokerbazi.png&w=256&q=75",
  "https://growthrocket.media/_next/image?url=%2Fbrands%2Fopulence.jpeg&w=256&q=75",
  "https://growthrocket.media/_next/image?url=%2Fbrands%2Favisa.jpg&w=256&q=75",
  "https://growthrocket.media/_next/image?url=%2Fbrands%2Fadilqadri.png&w=256&q=75",
  "https://growthrocket.media/_next/image?url=%2Fbrands%2Fvitra.png&w=256&q=75",
  "https://growthrocket.media/_next/image?url=%2Fbrands%2Fiquanta.png&w=256&q=75",
  "https://growthrocket.media/_next/image?url=%2Fbrands%2Fnavi.png&w=256&q=75",
  "https://growthrocket.media/_next/image?url=%2Fbrands%2Faism.png&w=128&q=75",
];

export default function FirstSection() {
  const [text] = useTypewriter({
    words: ["Educates Customers", "Builds Brand", "Engages Viewers"],
    loop: {},
  });
  return (
    <div className="text-white my-44 mx-5">
      <div className="flex justify-between">
        <div className="">
          <h1 className="text-[80px] font-[400] tracking-wide leading-[85px]">
            Create <br /> Content That <br />
            <span className="font-[600]">
              <LinearGradient gradient={["to right", "#ffb701 ,#ff341e"]}>
                {text}
              </LinearGradient>
              <Cursor cursorColor="#ff341e" />
            </span>
          </h1>
          <button className="my-10 bg-gradient-to-br from-yellow-500 to-red-600 text-black font-semibold px-7 py-2.5 text-2xl rounded">
            Go Viral
          </button>
        </div>

        <div className="">
          <div className="w-56 h-56 relative bottom-24 right-72">
            <ImageCubeEffect
              images={images[1]}
              style={"h-56 w-full object-cover rounded-full"}
            />
          </div>
          <div className="h-48 w-48 relative bottom-56 right-0">
            <ImageCubeEffect
              images={images[2]}
              style={"h-48 w-full object-cover rounded-full"}
            />
          </div>
          <div className="w-64 h-64 relative bottom-56 right-56">
            <ImageCubeEffect
              images={images[3]}
              style={"h-64 w-64 object-cover rounded-full"}
            />
          </div>
        </div>
      </div>

      <div className="my-16">
        <h1 className="text-6xl font-medium tracking-tight">
          Brands That{" "}
          <LinearGradient gradient={["to right", "#ffb701 ,#ff341e"]}>
            Trust Us
          </LinearGradient>
        </h1>
        <TwoCardsEffect
          children={
            <Swiper
              loop={true}
              slidesPerView={4}
              centeredSlides={false}
              slidesPerGroupSkip={1}
              grabCursor={true}
              keyboard={{
                enabled: true,
              }}
              autoplay={true}
              breakpoints={{
                769: {
                  slidesPerView: 4,
                  slidesPerGroup: 1,
                },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              spaceBetween={120}
              modules={[Keyboard, Navigation, Autoplay]}
              className="mySwiper px-20 py-10 "
            >
              {brands.map((el, i) => (
                <SwiperSlide key={i} className="">
                  <img src={el} className="h-44 w-44 object-contain " alt="" />
                </SwiperSlide>
              ))}
              <div className="swiper-button-next text-slate-100 animate-bounce-left"></div>
              <div className="swiper-button-prev text-slate-100 animate-bounce-right"></div>
            </Swiper>
          }
        />
      </div>
    </div>
  );
}
