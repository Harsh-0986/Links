import React from "react";

export const Header = () => {
  return (
    <div className="w-full flex items-center justify-center lg:grid lg:grid-cols-3 h-1/5">
      <div></div>
      <div className="overflow-hidden text-md lg:text-xl m-auto p-4 lg:p-8 rounded-full">
        <img
          src={"/favicon.webp"}
          className={"rounded-full w-32 lg:w-48 h-32 lg:h-48"}
          alt={"Harsh Shah"}
        />
        <span className="block w-full text-center mt-2">@Harsh Shah</span>
      </div>
      {/*<div>Subscribe</div>*/}
    </div>
  );
};
