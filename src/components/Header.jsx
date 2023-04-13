import React from "react";

export const Header = () => {
  return (
    <div className="w-full flex items-center justify-center lg:grid lg:grid-cols-3 h-1/5">
      <div className="hidden lg:inline-block text-md m-auto p-4 rounded-full text-black bg-white hover:text-white hover:bg-gray-700 cursor-pointer">
        <span className="material-icons ">ios_share</span>
      </div>
      <div className="text-md lg:text-xl m-auto p-4 lg:p-8 rounded-full">
        <img
          src={"https://media.graphassets.com/Zh6xzCOnQmCxpXFeRaPj"}
          className={" w-32 lg:w-48 h-32 lg:h-48"}
          alt={"Harsh Shah"}
        />
        <span className="block w-full text-center mt-2">@Harsh Shah</span>
      </div>
      {/*<div>Subscribe</div>*/}
    </div>
  );
};
