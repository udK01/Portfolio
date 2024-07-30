function Icon({ icon, boxShadow }) {
  return (
    <div
      className="w-[100px] h-[100px] rounded-full border-2 border-primary_green flex items-center justify-center"
      style={{ boxShadow }}
    >
      <img className="size-[65px]" src={icon} alt="Icon" />
    </div>
  );
}

function GreenIcon({ icon }) {
  return (
    <div className="flex gap-[8px]">
      <Icon
        icon={icon}
        boxShadow="inset 4px 4px 4px #4CFFB4, 4px 4px 4px #9747FF"
      />
      <Text text={"React"} />
    </div>
  );
}

function PurpleIcon({ icon }) {
  return (
    <Icon
      icon={icon}
      boxShadow="inset -4px 4px 4px #9747FF, -4px 4px 4px #4CFFB4"
    />
  );
}

function Text({ text }) {
  return (
    <div className="w-fit font-poppins font-black text-[60px] text-primary_green">
      {text}
    </div>
  );
}

export default function StackElement({ icon, text }) {
  return (
    <div className="w-[400px] h-[150px] border-2 border-primary_green">
      <GreenIcon icon={icon} />
      <p>{text}</p>
    </div>
  );
}
