import SliderCard from "./SliderCard";

import "../utils/projects.css";

export default function ProjectSlider({ items, width, height }) {
  const sliderStyle = {
    "--width": width,
    "--height": height,
    "--quantity": items.length,
    "--offset": items.length > 4 ? items.length - 4 : 0,
  };

  return (
    <div className="slider" style={sliderStyle}>
      <div className="list">
        {items.map((item) => (
          <div
            key={item.position}
            className="item"
            style={{ "--position": item.position }}
          >
            <SliderCard
              icon={item.icon}
              text={item.text}
              colour={item.colour}
            />
            {/* <img src={item.src} alt={`Item ${item.position}`} /> */}
          </div>
        ))}
      </div>
    </div>
  );
}
