function Icon({ icon, boxShadow, borderColour }) {
  return (
    <div
      className={`w-[100px] h-[100px] rounded-full border-2 ${borderColour} flex items-center justify-center`}
      style={{ boxShadow }}
    >
      <img className="size-[65px]" src={icon} alt="Icon" />
    </div>
  );
}

function TextWithShadow({ text, textShadow, textColour }) {
  return (
    <div
      className={`w-fit font-poppins font-black text-[60px] ${textColour}`}
      style={{ textShadow }}
    >
      {text}
    </div>
  );
}

export default function StackElement({ icon, text, colour }) {
  const isGreen = colour === "green";
  const borderColour = isGreen
    ? "border-primary_green"
    : "border-primary_purple";
  const iconBorderColour = isGreen
    ? "border-primary_purple"
    : "border-primary_green";
  const textColour = isGreen ? "text-primary_purple" : "text-primary_green";
  const boxShadow = isGreen
    ? "inset 4px 4px 4px #4CFFB4, 4px 4px 4px #9747FF"
    : "inset -4px 4px 4px #9747FF, -4px 4px 4px #4CFFB4";
  const textShadow = isGreen ? "3px 3px #4CFFB4" : "3px 3px #9747FF";

  return (
    <div
      className={`w-fit mx-[9px] px-[63px] h-[150px] border-2 ${borderColour} flex items-center justify-center bg-[#131010]`}
    >
      <div className="flex gap-[8px] items-center">
        <Icon
          icon={icon}
          boxShadow={boxShadow}
          borderColour={iconBorderColour}
        />
        <TextWithShadow
          text={text}
          textShadow={textShadow}
          textColour={textColour}
        />
      </div>
    </div>
  );
}
