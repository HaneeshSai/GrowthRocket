import React from "react";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-start md:items-center">
      <p className="text-3xl font-medium text-red-500">CONTACT US</p>
      <h1 className="text-[55px] font-medium tracking-tight leading-[60px] my-4">
        Let's connect
      </h1>
      <div className="flex md:flex-row flex-col items-start md:gap-10">
        <button className="md:my-10 bg-gradient-to-br from-yellow-500 to-red-600 text-black font-semibold px-7 py-2.5 md:text-2xl text-xl rounded">
          Book Call
        </button>
        <button className="my-10 bg-gradient-to-br from-yellow-500 to-red-600 text-black font-semibold px-7 py-2.5 md:text-2xl text-xl rounded">
          Chat On Whatsapp
        </button>
      </div>
      <div className="w-screen relative right- bg-gradient-to-br from-yellow-500 to-red-600 flex py-8 items-center h-16 md:h-full justify-center gap-20 ">
        <img
          src="https://growthrocket.media/_next/image?url=%2Flinkedin.png&w=48&q=75"
          alt=""
        />
        <img
          src="https://growthrocket.media/_next/image?url=%2Fyoutube.png&w=48&q=75"
          alt=""
        />
        <img
          src="https://growthrocket.media/_next/image?url=%2Finstagram.png&w=48&q=75"
          alt=""
        />
      </div>
      <p className="my-2">Growth Rocket &copy; 2023. All Rights Reserved</p>
    </div>
  );
}
