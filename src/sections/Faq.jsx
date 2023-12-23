import React from "react";
import up from "../assets/arrows/up.png";
import FaqCard from "../components/FaqCard";

const FAqs = [
  {
    q: "What is the 100% refund policy exactly?",
    a: "a. If we are not able to outperform the number of views that your content is getting right now, we will give you a 100% refund. No questions asked. No hidden terms. Only performance shall speak.",
  },
  {
    q: "Who will create this content exactly?",
    a: "a. We have an in-house team of social media experts who will create your content end to end. Right from research & scripting all the way to shooting and editing the content we will do it all.",
  },
  {
    q: "How long will it take to start posting content on my page?",
    a: "a. Once we finalize our partnership, we will start posting content on your Instagram within 7-10 days.",
  },
  {
    q: "Can I post this content on other social media platforms like Youtube & Facebook?",
    a: "a. Yes! You can create the content created by us on any platform of your choice.",
  },
  {
    q: "Who will be my point of contact and how do I communicate with them?",
    a: "a. Each partner will get a dedicated content manager and a content team. We prefer creating WhatsApp groups with our partners for faster communications.",
  },
  {
    q: "My requirements are different from the listed package. Can you help me with that too?",
    a: "a. Yes. We do provide customized social media services to our brands. Book a call and let’s discuss!",
  },
];

export default function Faq() {
  return (
    <div className="mt-[120px]">
      <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-8">
        FAQs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-0">
        {FAqs.map((e, i) => (
          <FaqCard question={e.q} answer={e.a} />
        ))}
      </div>
    </div>
  );
}
