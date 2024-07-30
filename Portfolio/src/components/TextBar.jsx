import { useEffect, useRef } from "react";

import "./utils/textbar.css";

const backgroundClasses = {
  purple: "bg-primary_purple text-white",
  green: "bg-primary_green",
};

const shadowClasses = {
  top_left_purple: "shadow-top_left_purple",
  top_right_purple: "shadow-top_right_purple",
  bottom_left_purple: "shadow-bottom_left_purple",
  bottom_right_purple: "shadow-bottom_right_purple",
  top_left_green: "shadow-top_left_green",
  top_right_green: "shadow-top_right_green",
  bottom_left_green: "shadow-bottom_left_green",
  bottom_right_green: "shadow-bottom_right_green",
};

export default function TextBar({ text, shadow, direction, extra }) {
  const textBarRef = useRef(null);

  useEffect(() => {
    const element = textBarRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target } = entry;

        if (entry.isIntersecting) {
          switch (direction) {
            case "left":
              target.classList.add("animate_text_left");
              target.classList.remove("animate_text_right");
              break;
            case "right":
              target.classList.add("animate_text_right");
              target.classList.remove("animate_text_left");
              break;
          }
        }
      });
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [direction]);

  const shadowClass = shadowClasses[shadow];
  const bgColorClass = shadow.includes("purple")
    ? backgroundClasses.green
    : backgroundClasses.purple;

  return (
    <div
      ref={textBarRef}
      className={`${bgColorClass} ${shadowClass} h-[125px] items-center w-fit font-black text-[60px] py-27 px-14 font-poppins tracking-[20px] ${extra}`}
    >
      <p className="h-full flex items-center">{text}</p>
    </div>
  );
}
