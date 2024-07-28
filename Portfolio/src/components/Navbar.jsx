import React from "react";

export default function Navbar() {
  const menuItems = ["About Me", "Stack", "Projects", "Experiences", "Contact"];

  return (
    <div className="flex fixed bg-primary_gray h-[117px] items-center w-full">
      <img src="./logo.png" className="absolute w-[108px] h-[64px] ml-[32px]" />
      <div className="flex text-[#7E7E7E] font-medium space-x-[60px] font-poppins text-[25px] mx-auto">
        {menuItems.map((item, index) => (
          <p
            key={index}
            className="hover:cursor-pointer hover:text-primary_green transition-all duration-300"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
