import React, { useEffect, useState } from "react";
import "./utils/navbar.css";

export default function Navbar() {
  const menuItems = ["About Me", "Stack", "Projects", "Experiences", "Contact"];
  const [highlight, setHighlight] = useState(-1);

  useEffect(() => {
    const elements = menuItems.map((item) =>
      document.getElementById(item.toUpperCase())
    );

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
              setHighlight(-1);
          }
        }
      });
    };

    const observerOptions = {
      rootMargin: "-500px 0px -500px 0px",
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [menuItems]);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId.toUpperCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex fixed bg-primary_gray h-[117px] items-center w-full navbar-move z-40">
      <img src="./logo.png" className="absolute w-[108px] h-[64px] ml-[32px]" />
      <div className="flex text-[#7E7E7E] font-medium space-x-[60px] font-poppins text-[25px] mx-auto">
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
    </div>
  );
}
