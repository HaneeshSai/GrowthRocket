import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

export default function ServiceCard({ h, p }) {
  const [hovering, setHovering] = useState(false);
  return (
    <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20}>
      <div
        className={`group -rotate-[5deg] border-2 rounded-xl border-red-800 ${
          hovering ? `bg-black` : `bg-gradient-to-br from-yellow-500 to-red-600`
        }`}
      >
        <div
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className="p-8 hover:text-black border-2 bg-black hover:bg-gradient-to-br hover:from-yellow-500 hover:to-red-600 cursor-pointer border-red-800 rounded-xl rotate-[5deg] z-10 h-[400px] md:h-[400px]"
        >
          <h1 className="text-[40px] leading-[42px] md:text-[40px] font-medium tracking-tight md:leading-[38px] mb-5">
            {h}
          </h1>
          <p className="md:text-2xl text-xl font-light ">{p}</p>
        </div>
      </div>
    </Tilt>
  );
}
