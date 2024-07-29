import React, { useState } from "react";

import "./utils/navbar.css";

export default function Navbar() {
  const menuItems = ["About Me", "Stack", "Projects", "Experiences", "Contact"];
  const [highlight, setHighlight] = useState(0);

  return (
    <div className="flex fixed bg-primary_gray h-[117px] items-center w-full navbar-move z-10">
      <img src="./logo.png" className="absolute w-[108px] h-[64px] ml-[32px]" />
      <div className="flex text-[#7E7E7E] font-medium space-x-[60px] font-poppins text-[25px] mx-auto">
        {menuItems.map((item, index) => (
          <p
            key={index}
            className={`hover:cursor-pointer hover:text-primary_green  transition-all duration-300 ${
              highlight === index && `text-primary_green`
            }`}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
