import React from "react";
import linksData from "../links.js";
import DynamicIcon from "./DynamicIcon";

export const Links = () => {
  return (
    <div className="h-3/5 grid grid-row-1 w-8/12 gap-y-2 text-white">
      {linksData.map((value, index) => {
        return (
          <div
            key={index}
            className={
              "text-white w-full flex justify-around items-center bg-[#222]  h-12 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
            }
          >
            <span
              className={"w-1/5 text-center flex justify-center items-center"}
            >
              <DynamicIcon icon={value.icon} />
            </span>
            <a
              target={"_blank"}
              href={value.link}
              rel="noreferrer"
              className={"flex w-3/5 justify-center items-center"}
            >
              <span className={"w-3/5 text-center hover:text-gray-400"}>
                {value.title}
              </span>
            </a>
            <span className={"flex w-1/5 items-center justify-center"}>
              <span className="material-icons w-1/5 hover:text-gray-400 ">
                ios_share
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};
