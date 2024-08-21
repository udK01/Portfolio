import React, { useEffect, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";

import "./utils/navbar.css";

export default function Navbar() {
  const menuItems = ["About Me", "Projects", "Contact"];
  const items = ["Hero", "About Me", "Projects", "Contact"];
  const [highlight, setHighlight] = useState(-1);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const elements = items.map((item) =>
      document.getElementById(item.toUpperCase())
    );

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target.id) {
            case "ABOUT ME":
              setHighlight(0);
              break;
            case "PROJECTS":
              setHighlight(1);
              break;
            case "CONTACT":
              setHighlight(2);
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
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="w-full fixed flex items-center bg-primary_gray h-[117px] navbar-move z-40">
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
            <a href="./DominikMuranyiCV.pdf" download>
              Resume.
            </a>
          </div>
        </div>
        {/* Phone & Tablet */}
        <div className="justify-between w-full items-center 2xs:flex lg:hidden">
          <img src="./logo.png" className="w-[108px] h-[64px] mx-[32px]" />
          <div className="flex flex-col items-center">
            <FiAlignJustify
              size={48}
              color="white"
              className="mx-[32px]"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="fixed h-screen w-full flex flex-col font-poppins p-5 text-[40px] space-y-20 pt-40 text-white font-black items-center right-0 bg-primary_gray z-30">
          {menuItems.map((item, index) => (
            <p
              key={index}
              onClick={() => {
                handleScroll(item);
                setShowMenu(false);
              }}
              className={`${highlight === index && "text-primary_green"}`}
            >
              {item}
            </p>
          ))}
          <a
            href="./DominikMuranyiCV.pdf"
            download
            className="resume-border px-20 bg-primary_gray"
            onClick={() => setShowMenu(false)}
          >
            Resume.
          </a>
        </div>
      )}
    </div>
  );
}
