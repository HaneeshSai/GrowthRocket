import React from "react";

export default function TwoCardsEffect({ children }) {
  return (
    <>
      <div className="h-full w-full my-14 mx-2 border border-red-600 rounded-[10px] transform -rotate-[2deg]">
        <div className="bg-gradient-to-r from-yellow-500 to-red-600 h-full transform rotate-[2deg] w-full rounded-[10px] ">
          {children}
        </div>
      </div>
    </>
  );
}
