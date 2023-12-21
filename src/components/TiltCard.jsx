import React from "react";
import Tilt from "react-parallax-tilt";
import { LinearGradient } from "react-text-gradients";

export default function TiltCard({
  image,
  title,
  para,
  imgStyle,
  imgContainerStyle,
}) {
  return (
    <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20}>
      <div className="my-8 p-[2px] custom-shadow bg-gradient-to-br cursor-pointer from-yellow-500 to-red-600 rounded-[10px] mb-12">
        <div className="flex p-8 bg-black rounded-[10px] items-center">
          <div className={imgContainerStyle}>
            <img src={image} className={imgStyle} alt="" />
          </div>

          <div className="mx-10">
            <h1 className="text-[35px] font-medium mb-2 leading-[40px]">
              <LinearGradient gradient={["to right", "#ffb701 ,#ff341e"]}>
                {title}
              </LinearGradient>
            </h1>
            <p className="text-xl">{para}</p>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
