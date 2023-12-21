import React from "react";
import { LinearGradient } from "react-text-gradients";
import Lottie from "lottie-react";
import NightSky from "../assets/lottieIcons/wired-gradient-1821-night-sky-moon-stars.json";
import ShootingStar from "../assets/lottieIcons/wired-gradient-1865-shooting-stars.json";
import wings from "../assets/lottieIcons/wired-gradient-1145-wings.json";

const SkyRocket = [
  "6 Reels",
  "Influencer",
  " Carousels",
  "Personalized Branding",
  "Video Editing",
  "Production",
  "Script Writing",
  "Content Research",
  "Content Strategy",
  "Graphic Designing",
  "Account Manager",
  "Dedicated Team",
  "Meme Marketing",
  "Daily Stories",
];
const SkNo = [3, 9, 10, 11, 12, 13, 14];

const MoonRocket = [
  "12 Reels",
  "1 Influencer",
  "Carousels",
  "Personalized Branding",
  "Video Editing",
  "Production",
  "Script Writing",
  "Content Research",
  "Content Strategy",
  "Graphic Designing",
  "Account Manager",
  "Dedicated Team",
  "Meme Marketing",
  "Daily Stories",
];
const MrNo = [3, 13, 14];

const MilkyWayRocket = [
  "20 Reels",
  "2 Influencers",
  "4 Carousels",
  "Personalized Branding",
  "Video Editing",
  "Production",
  "Script Writing",
  "Content Research",
  "Content Strategy",
  "Graphic Designing",
  "Account Manager",
  "Dedicated Team",
  "Meme Marketing",
  "Daily Stories",
];
const MwrNo = [];

export default function Price() {
  return (
    <div className="">
      <h1 className="text-[55px] font-medium tracking-tight leading-[60px] mb-12">
        Select Your Package To Build A{" "}
        <LinearGradient gradient={["to right", "#ffb701 ,#ff341e"]}>
          Viral Brand
        </LinearGradient>
      </h1>
      <div className="flex gap-6 text-black">
        <div className="bg-white border-[7px] border-[#ffb701] flex-1 rounded-[13px] p-7">
          <div className="flex items-center gap-4 ">
            <h1 className="text-4xl font-semibold pb-5">Sky Rocket</h1>
            <Lottie animationData={NightSky} className="h-[75px] pb-5"></Lottie>
          </div>
          <p className="text-xl opacity-70 pb-4">&#8377;50,000 per month</p>
          <div className="text-xl">
            {SkyRocket.map((e, i) => (
              <div className="my-3 flex items-center gap-5">
                <img
                  src={
                    !SkNo.includes(i + 1)
                      ? "https://img.icons8.com/color/96/null/checked--v1.png"
                      : "https://img.icons8.com/color/96/null/cancel--v1.png"
                  }
                  className="h-8"
                  alt=""
                />
                <p className="">{e}</p>
              </div>
            ))}
          </div>
          <button className="mt-10 text bg-gradient-to-br from-yellow-500 to-red-600 text-black font-semibold px-5 py-2 rounded flex gap-3 items-center">
            Book Call
            <img
              src="https://growthrocket.media/assets/right-arrow.svg"
              alt=""
              className="h-8"
            />
          </button>
        </div>
        <div className="bg-white border-[7px] border-[#ffb701] flex-1 rounded-[13px] p-7">
          <p className="bg-gradient-to-r from-yellow-500 to-red-600 w-fit px-3 py-2 -mt-[50px] rounded-lg text-lg font-medium text-white tracking-wide">
            Best For Growing Brands
          </p>
          <div className="flex  items-center gap-4 ">
            <h1 className="text-4xl font-semibold pb-5">Moon Rocket</h1>
            <Lottie
              animationData={ShootingStar}
              className="h-[75px] pb-5"
            ></Lottie>
          </div>
          <p className="text-xl opacity-70 pb-4">&#8377;50,000 per month</p>
          <div className="text-xl">
            {MoonRocket.map((e, i) => (
              <div className="my-3 flex items-center gap-5">
                <img
                  src={
                    !MrNo.includes(i + 1)
                      ? "https://img.icons8.com/color/96/null/checked--v1.png"
                      : "https://img.icons8.com/color/96/null/cancel--v1.png"
                  }
                  className="h-8"
                  alt=""
                />
                <p className="">{e}</p>
              </div>
            ))}
          </div>
          <button className="mt-10 text bg-gradient-to-br from-yellow-500 to-red-600 text-black font-semibold px-5 py-2 rounded flex gap-3 items-center">
            Book Call
            <img
              src="https://growthrocket.media/assets/right-arrow.svg"
              alt=""
              className="h-8"
            />
          </button>
        </div>
        <div className="bg-white border-[7px] border-[#ffb701] flex-1 rounded-[13px] p-7">
          <p className="bg-gradient-to-r from-yellow-500 to-red-600 w-fit px-3 py-2 -mt-[50px] rounded-lg text-lg font-medium text-white tracking-wide">
            Best For Growing Brands
          </p>
          <div className="flex  items-center gap-4 ">
            <h1 className="text-[34px] font-semibold pb-5">Milky Way Rocket</h1>
            <Lottie animationData={wings} className="h-[75px] pb-5"></Lottie>
          </div>
          <p className="text-xl opacity-70 pb-4">&#8377;50,000 per month</p>
          <div className="text-xl">
            {MilkyWayRocket.map((e, i) => (
              <div className="my-3 flex items-center gap-5">
                <img
                  src={
                    !MwrNo.includes(i + 1)
                      ? "https://img.icons8.com/color/96/null/checked--v1.png"
                      : "https://img.icons8.com/color/96/null/cancel--v1.png"
                  }
                  className="h-8"
                  alt=""
                />
                <p className="">{e}</p>
              </div>
            ))}
          </div>
          <button className="mt-10 text bg-gradient-to-br from-yellow-500 to-red-600 text-black font-semibold px-5 py-2 rounded flex gap-3 items-center">
            Book Call
            <img
              src="https://growthrocket.media/assets/right-arrow.svg"
              alt=""
              className="h-8"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
