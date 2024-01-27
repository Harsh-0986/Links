import React, { useState } from "react";
import linksData from "../links.js";
import DynamicIcon from "./DynamicIcon";
import ShareModal from "./ShareModal";
import { IoShareOutline } from "react-icons/io5";

export const Links = () => {
	const [open, setOpen] = useState(false);
	const [url, setUrl] = useState("");
	const [title, setTitle] = useState("");

	return (
		<>
			<ShareModal
				url={url}
				show={open}
				onClose={() => setOpen(!open)}
				title={title}
			/>
			<div className="grid grid-row-1 w-4/5 md:w-1/3 gap-y-2 text-white">
				{linksData.map((value, index) => {
					return (
						<div
							key={index}
							className={
								"h-12 hover:bg-zinc-800/60 text-white w-full flex justify-around items-center bg-zinc-800 rounded-lg cursor-pointer"
							}
						>
							<span
								className={
									"w-1/5 text-center flex justify-center items-center"
								}
							>
								<DynamicIcon icon={value.icon} />
							</span>
							<a
								target={"_blank"}
								href={value.link}
								rel="noreferrer"
								className={
									"flex w-3/5 justify-center items-center"
								}
							>
								<span
									className={
										"w-3/5 text-center hover:text-gray-400"
									}
								>
									{value.title}
								</span>
							</a>
							<span
								className={
									"flex w-1/5 items-center justify-center hover:text-gray-400 text-center"
								}
								onClick={() => {
									setTitle(value.title);
									setOpen(!open);
									setUrl(value.link);
								}}
							>
								<IoShareOutline size={24} />
							</span>
						</div>
					);
				})}
			</div>
		</>
	);
};
