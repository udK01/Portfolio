import "../utils/projects.css";

export default function ProjectSlider({ items, width, height }) {
  const sliderStyle = {
    "--width": width,
    "--height": height,
    "--quantity": items.length,
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
            <img src={item.src} alt={`Item ${item.position}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
