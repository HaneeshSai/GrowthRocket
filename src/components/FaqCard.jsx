import React, { useState } from "react";
import up from "../assets/arrows/up.png";
import down from "../assets/arrows/down.png";
import { Collapse } from "@mui/material";

export default function FaqCard({ question, answer }) {
  const [showAns, setShowAns] = useState(false);
  return (
    <div className="flex-1 my-3  mb-6">
      <div
        onClick={() => setShowAns(!showAns)}
        className="border-2 border-red-700 h-fit cursor-pointer rounded-[10px] custom-shadow p-6"
      >
        <div className="flex items-center justify-between gap-5">
          <h1 className="text-xl md:text-[23px] ">{question}</h1>
          <img className="h-5" src={showAns ? up : down} alt="" />
        </div>

        <Collapse in={showAns}>
          <div className={`mt-8 mb-0 text-xl font-light overflow-hidden`}>
            <p>{answer}</p>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
