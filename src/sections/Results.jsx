import React from "react";
import { LinearGradient } from "react-text-gradients";
import TiltCard from "../components/TiltCard";
import TwoCardsEffect from "../components/TwoCardsEffect";

export default function Results() {
  return (
    <div className="mx-5 my-64">
      <h1 className="text-[55px] font-medium tracking-tight leading-[60px] mt-36">
        Stories of our brands that saw{" "}
        <LinearGradient gradient={["to right", "#ffb701 ,#ff341e"]}>
          exponential growth
        </LinearGradient>{" "}
      </h1>
      <div>
        <div className="md:w-[71%] w-full">
          <TiltCard
            image={"https://growthrocket.media/brands/fisdom.svg"}
            title={"1100% increase in views within 45 days"}
            para={
              "Fisdom's Instagram reels used to get an average of 300-400 organic views. After partnering with us, their average views on reels skyrocketed to 3500 in less than 45 days."
            }
            imgStyle={"h-fit"}
            imgContainerStyle={
              "bg-[#ecc86c] md:py-20 py-24 md:m-0 m-6 w-fit flex justify-center items-center p-3 rounded-md"
            }
          />
        </div>
        <div className="md:w-[71%] w-full  relative md:left-96">
          <TiltCard
            image={
              "https://growthrocket.media/_next/image?url=%2Fresult_formula.JPG&w=256&q=75"
            }
            title={"50,000 followers and 5 million lifetime views in 6 months"}
            para={
              "Formula Guy’s personal brand page gained over 50,000 followers and over 5 million views in less than 6 months. Growth Rocket helped build his personal brand from day 1 of his journey."
            }
            imgStyle={"md:h-[165px] h-fit object-cover"}
            imgContainerStyle={
              "bg-[#ecc86c] h-full m-3 md:m-0 h-full md:h-44 md:w-96 flex justify-center items-center p-1 rounded-md "
            }
          />
        </div>
        <div className="md:w-[71%] w-full">
          <TiltCard
            image={"https://growthrocket.media/rangde.svg"}
            title={"800% more virality and 6x growth in average views"}
            para={
              "RangDe created a reel in house on one of their success stories and it got 6800 views. We created a reel on the exact same topic and it went viral with over 61,000 views! Plus a 6x growth in average views on reels."
            }
            imgStyle={"h-[125px] object-cover"}
            imgContainerStyle={
              "bg-[#ecc86c] h-44 md:w-full w-[65%] m-3 md:m-0 flex justify-center items-center p-1 rounded-md "
            }
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse gap-24 my-44">
        <div className="rounded-md bg-gradient-to-br from-yellow-500 to-red-600 -rotate-[5deg]">
          <img
            src="https://growthrocket.media/_next/image?url=%2Freel_thumb.jpg&w=1920&q=75"
            alt=""
            className="w-[500px] rounded-md rotate-[5deg] border border-red-900"
          />
        </div>
        <div className="w-[90%]">
          <p className="text-red-600 text-lg md:text-2xl md:leading-[70px] leading-[24px] mb-5 md:mb-0">
            IF YOUR BUSINESS ISN'T ON INSTAGRAM, IT SHOULD BE.
          </p>
          <h1 className="md:text-[55px] text-[40px] font-medium tracking-normal leading-[40px] md:leading-[60px]">
            If your business is on <br /> Instagram,
            <LinearGradient gradient={["to right", "#ffb701 ,#ff341e"]}>
              {" "}
              engage your followers daily.
            </LinearGradient>
          </h1>
          <p className="text-2xl my-2 font-light mt-5">
            Create end-to-end content for your Instagram. We will create Reels,
            Carousels, Memes & Daily Stories for your page. Grow your Instagram
            page organically and build a community of followers that convert to
            paid customers.
          </p>
          <button className="my-10 bg-gradient-to-br from-yellow-500 to-red-600 text-black font-semibold px-7 py-2.5 text-2xl rounded">
            Go Viral
          </button>
        </div>
      </div>
      <div>
        <TwoCardsEffect
          rotate1={"-rotate-[2deg]"}
          rotate2={"rotate-[2deg]"}
          children={
            <h1 className="text-xl md:text-5xl font-semibold text-center py-10 px-2 md:px-0 text-black">
              Full Refund If We Dont Beat Your Current Views
            </h1>
          }
        />
      </div>
    </div>
  );
}
