import React, { useEffect, useState } from "react";
import {
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { FiCopy } from "react-icons/fi";

export default function Modal({ show, onClose, url, title }) {
  const [socialMedia, setSocialMedia] = useState("by copying link");

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) onClose();
  };

  useEffect(() => {
    console.log(show);
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-[#00000080] flex items-center justify-center ${
        show
          ? "z-10 opacity-100 pointer-events-auto"
          : "opacity-0 transition ease-in-out pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className="rounded-lg w-[500px] bg-[#222] h-48 flex flex-col justify-around items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={"text-2xl my-2 mt-4 mx-2"}>
          Share my {title} {socialMedia}!
        </div>
        <div className="w-full p-[10px] flex justify-around my-4">
          <span
            onMouseEnter={() => setSocialMedia("by copying link")}
            onClick={() => {
              navigator.clipboard.writeText(url).then(onClose);
            }}
            className={
              "my-auto cursor-pointer hover:bg-gray-400 p-2 rounded-full"
            }
          >
            <FiCopy />
          </span>

          <TwitterShareButton
            url={url}
            onClick={onClose}
            onMouseEnter={() => setSocialMedia("on Twitter")}
          >
            <TwitterIcon size={36} round />
          </TwitterShareButton>
          <TelegramShareButton
            url={url}
            onClick={onClose}
            onMouseEnter={() => setSocialMedia("on Telegram")}
          >
            <TelegramIcon size={36} round />
          </TelegramShareButton>
          <WhatsappShareButton
            url={url}
            onClick={onClose}
            onMouseEnter={() => setSocialMedia("on Whatsapp")}
          >
            <WhatsappIcon size={36} round />
          </WhatsappShareButton>
        </div>
        <div className="w-full mt-[-14px] cursor-pointer p-[10px] flex items-center justify-around">
          <span
            onClick={onClose}
            className={"block px-10 py-2 bg-red-500 rounded-lg text-white"}
          >
            Close
          </span>
        </div>
      </div>
    </div>
  );
}
