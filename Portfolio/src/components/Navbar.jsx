import React, { useEffect, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";

import "./utils/navbar.css";

export default function Navbar() {
  const menuItems = ["About Me", "Projects", "Contact"];
  const items = ["Hero", "About Me", "Projects", "Contact"];
  const [highlight, setHighlight] = useState(-1);
  const [showMenu, setShowMenu] = useState(false);

  // useEffect(() => {
  //   const elements = items.map((item) =>
  //     document.getElementById(item.toUpperCase())
  //   );

  //   const observerCallback = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         switch (entry.target.id) {
  //           case "ABOUT ME":
  //             setHighlight(0);
  //             break;
  //           case "PROJECTS":
  //             setHighlight(1);
  //             break;
  //           case "CONTACT":
  //             setHighlight(2);
  //             break;
  //           default:
  //             setHighlight(-1);
  //         }
  //       }
  //     });
  //   };

  //   const observerOptions = {
  //     rootMargin: "-500px 0px -500px 0px",
  //   };

  //   const observer = new IntersectionObserver(
  //     observerCallback,
  //     observerOptions
  //   );

  //   elements.forEach((el) => observer.observe(el));

  //   return () => {
  //     elements.forEach((el) => observer.unobserve(el));
  //   };
  // }, [menuItems]);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId.toUpperCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex items-center bg-primary_gray h-[117px] navbar-move z-40">
      {/* Laptop & Desktop */}
      <div className="justify-between w-full items-center 2xs:hidden lg:flex">
        <img src="./logo.png" className="w-[108px] h-[64px] ml-[32px]" />
        <div className="flex text-[#7E7E7E] font-medium gap-20 font-poppins text-[25px]">
          {menuItems.map((item, index) => (
            <p
              key={index}
              onClick={() => handleScroll(item)}
              className={`hover:cursor-pointer hover:text-primary_green transition-all duration-300 ${
                highlight === index ? "text-primary_green" : ""
              }`}
            >
              {item}
            </p>
          ))}
        </div>
        <div
          className={`resume-border font-robot font-black hover:cursor-pointer text-[20px] hover:text-primary_green transition-colors duration-300 mr-[32px]`}
        >
          Resume.
        </div>
      </div>
      {/* Phone & Tablet */}
      <div className="justify-between w-full items-center 2xs:flex lg:hidden">
        <img src="./logo.png" className="w-[108px] h-[64px] mx-[32px]" />
        <div className="flex flex-col">
          <FiAlignJustify
            size={48}
            color="white"
            className="mx-[32px]"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && (
            <div className="absolute flex flex-col font-poppins p-5 text-[20px] space-y-10 text-white items-center right-0 z-20 bg-primary_gray">
              {menuItems.map((item, index) => (
                <p
                  key={index}
                  onClick={() => handleScroll(item)}
                  className={`hover:cursor-pointer hover:text-primary_green transition-all duration-300 ${
                    highlight === index ? "text-primary_green" : ""
                  }`}
                >
                  {item}
                </p>
              ))}
              <p>Resume.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
