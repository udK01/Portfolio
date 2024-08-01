import React, { useEffect, useState } from "react";

import "./utils/navbar.css";

export default function Navbar() {
  const menuItems = ["About Me", "Stack", "Projects", "Experiences", "Contact"];
  const [highlight, setHighlight] = useState(-1);

  useEffect(() => {
    const aboutMeEl = document.getElementById("ABOUT ME");
    const stackEl = document.getElementById("STACK");
    const projectEl = document.getElementById("PROJECTS");

    const elements = [aboutMeEl, stackEl, projectEl];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target.id) {
            case "ABOUT ME":
              setHighlight(0);
              break;
            case "STACK":
              setHighlight(1);
              break;
            case "PROJECTS":
              setHighlight(2);
              break;
            case "EXPERIENCES":
              setHighlight(3);
              break;
            case "CONTACT":
              setHighlight(4);
              break;
            default:
              setHighlight(0);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback);

    elements.map((el) => observer.observe(el));

    return () => {
      elements.map((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex fixed bg-primary_gray h-[117px] items-center w-full navbar-move z-40">
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
