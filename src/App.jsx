import React from "react";
import FirstSection from "./sections/FirstSection";
import Portfolio from "./sections/Portfolio";
import Results from "./sections/Results";
import Price from "./sections/Price";
import Faq from "./sections/Faq";

export default function App() {
  return (
    <div className="mx-40 my-8 font-sans text-white">
      <nav className="flex w-full justify-between items-center">
        <img
          src="https://growthrocket.media/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1a5c9263.png&w=3840&q=75"
          alt="GrowthRocketLogo"
          className="h-10"
        />
        <ul className="flex justify-between gap-10 text-[22px] items-center">
          <li>Portfolio</li>
          <li>Results</li>
          <li>Pricing</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      <FirstSection />
      <Portfolio />
      <Results />
      <Price />
      <Faq />
    </div>
  );
}
