import React from "react";

export default function TwoCardsEffect({
  children,
  width,
  bg,
  rotate1,
  rotate2,
}) {
  return (
    <>
      <div
        className={`h-full w-${width}  my-14 mx-2 border border-red-600  ${bg} rounded-[10px] transform ${rotate1}`}
      >
        <div
          className={`bg-gradient-to-r from-yellow-500 to-red-600 h-full transform ${rotate2} w-full rounded-[10px] `}
        >
          {children}
        </div>
      </div>
    </>
  );
}
