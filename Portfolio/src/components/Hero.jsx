import TextBar from "./TextBar";

import "./utils/hero.css";

import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="absolute z-10 w-full h-screen circular-reveal opacity-0 mt-10">
          <Spline scene="https://prod.spline.design/Tr9fJ1rZOicDY-Y1/scene.splinecode" />
        </div>
        <div className="absolute w-full h-full flex items-center justify-center mt-[140px] opacity-0 circular-reveal">
          <img
            src="./squarebackground.png"
            className="w-[85%] h-[85%] absolute"
          />
        </div>
        <div>
          <TextBar
            text={"DOMINIK"}
            shadow={"bottom_right_purple"}
            direction={"left"}
            extra={"-translate-x-[50px]"}
          />
        </div>
        <div>
          <TextBar
            text={"MURANYI"}
            shadow={"bottom_right_green"}
            direction={"right"}
            extra={"translate-x-[25px]"}
          />
        </div>
        <div>
          <TextBar
            text={"DEVELOPER"}
            shadow={"bottom_left_purple"}
            direction={"left"}
            extra={"-translate-x-[50px]"}
          />
        </div>
      </div>
    </section>
  );
}
