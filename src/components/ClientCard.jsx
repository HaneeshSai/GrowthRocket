import React from "react";
import { LinearGradient } from "react-text-gradients";

export default function ClientCard({ img, p, name, comp }) {
  return (
    <div className="flex flex-col items-center border-2 border-orange-700 gap-4 custom-shadow p-6 md:p-12">
      <img src={img} alt="" className="h-36 rounded-full" />
      <img src="https://growthrocket.media/inv.png" className="" alt="" />
      <div className=" pb-10 border-b border-white">
        <p className="text-[17px] md:text-[15px] md:overflow-auto scrollable-div md:px-2 md:h-48 tracking-wide font-light">
          {p}
        </p>
      </div>
      <div className="w-full text-right">
        <h1 className="text-2xl md:text-2xl font-medium">
          <LinearGradient gradient={["to bottom", "#ffb701 ,#ff341e"]}>
            {name}
          </LinearGradient>
        </h1>
        <p className="text-xl md:text-[15px] text-red-500">{comp}</p>
      </div>
    </div>
  );
}
