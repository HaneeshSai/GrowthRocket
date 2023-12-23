import React from "react";
import ServiceCard from "../components/ServiceCard";
import { LinearGradient } from "react-text-gradients";
import ClientCard from "../components/ClientCard";

const cards = [
  {
    h: "Content Production",
    p: "Our team will shoot high quality videos for your content.",
  },
  {
    h: "Video Editing",
    p: "We will create captivating videos using fast paced video editing.",
  },
  {
    h: "Research & Writing",
    p: "For each content, we will do the research and write compelling copies for you.",
  },
  {
    h: "Graphics Designing",
    p: "Our visual design experts will create aesthetic designs that stand out",
  },
  {
    h: "Meme Marketing",
    p: "Ideate and create relatable memes that resonated with the audience",
  },
  {
    h: "Social Media Management",
    p: "End-to-end social media management to optimize content and drive engagement",
  },
];

const clients = [
  {
    img: "https://growthrocket.media/_next/image?url=%2Ft111.jpg&w=384&q=75",
    p: "We partnered with Growth Rocket to create a new social media page about Poker education. They didn't just craft a comprehensive social media strategy for our Poker education page, but also flawlessly executed content from conception to delivery. An exemplary team that genuinely drives results!",
    name: "Varun Ganjoo",
    comp: "- Founder, Poker Baazi",
  },
  {
    img: "https://growthrocket.media/_next/image?url=%2Ft2.jpg&w=384&q=75",
    p: "Our vision was to share our brand's success stories through short engaging videos. Thanks to the incredibly innovative team at Growth Rocket, not only did we get a tailored social media strategy, but they also spearheaded the entire video creation process. I'm thrilled to share that our debut video skyrocketed with over 60,000 views! Truly an experience beyond our expectations.",
    name: "Ramakrishna NK",
    comp: "- Founder, Rang De",
  },
  {
    img: "https://growthrocket.media/_next/image?url=%2Ft3.jpeg&w=384&q=75",
    p: "Teaming up with Ayushman and Growth Rocket was a game changer for us. Their exceptional financial education videos for YouTube and Instagram not only showcased top-tier production but also drove virality, organically boosting our subscribers and followers. An outstanding collaboration!",
    name: "Shivani Muthanna",
    comp: "- Digital Content Head, Fisdom",
  },
];

export default function Services() {
  return (
    <div className="mt-56 mb-36">
      <h1 className="text-4xl md:text-[55px] font-medium tracking-tight leading-[35px] md:leading-[60px]">
        Here's what we will do for you
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-16 gap-x-36 gap-y-14 px-8 md:px-0">
        {cards.map((e, i) => (
          <ServiceCard key={i} h={e.h} p={e.p} />
        ))}
      </div>

      <div className="my-56">
        <h1 className="text-3xl md:text-[55px] font-medium tracking-tight  md:leading-[60px] mb-7 md:mb-20">
          Hear from our{" "}
          <LinearGradient gradient={["to right", "#ffb701 ,#ff341e"]}>
            Happy Clients
          </LinearGradient>{" "}
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-20">
          {clients.map((e, i) => (
            <ClientCard
              key={i}
              img={e.img}
              p={e.p}
              name={e.name}
              comp={e.comp}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
