import React from "react";
import FirstSection from "./sections/FirstSection";
import Portfolio from "./sections/Portfolio";
import Results from "./sections/Results";
import Price from "./sections/Price";
import Faq from "./sections/Faq";
import Services from "./sections/Services";
import ContactPage from "./sections/ContactPage";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="md:mx-40 mx-4 my-8 font-sans text-white">
      <nav className="flex w-full justify-between items-center">
        <img
          src="https://growthrocket.media/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1a5c9263.png&w=3840&q=75"
          alt="GrowthRocketLogo"
          className="h-10"
        />
        <div className="flex justify-between gap-10 text-[22px] items-center">
          <a href="/#portfolio">Portfolio</a>
          <a>Results</a>
          <a>Pricing</a>
          <a>Services</a>
          <a>Contact</a>
        </div>
      </nav>
      <FirstSection />
      <Portfolio />
      <Results />
      <Price />
      <Faq />
      <Services />
      <ContactPage />
      <Footer />
    </div>
  );
}
