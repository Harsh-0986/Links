import React, { useState } from "react";
import linksData from "../links.js";
import DynamicIcon from "./DynamicIcon";
import ShareModal from "./ShareModal";

export const Links = () => {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");

  return (
    <>
      <ShareModal
        url={url}
        show={open}
        onClose={() => setOpen(!open)}
        title="Subscribe to our newsletter"
      />
      <div className="grid grid-row-1 w-8/12 gap-y-2 text-white">
        {linksData.map((value, index) => {
          return (
            <div
              key={index}
              className={
                "h-12 text-white w-full flex justify-around items-center bg-[#222] rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
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
              <span
                className={"flex w-1/5 items-center justify-center"}
                onClick={() => {
                  setOpen(!open);
                  setUrl(value.link);
                }}
              >
                <span className="material-icons w-1/5 hover:text-gray-400">
                  ios_share
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};
