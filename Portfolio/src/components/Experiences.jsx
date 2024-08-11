import StackCard from "./Stack/StackCard";

export default function Experiences() {
  const Stack = [
    { icon: "./Icons/React.png", text: "React" },
    { icon: "./Icons/Docker.png", text: "Docker" },
    { icon: "./Icons/Figma.png", text: "Figma" },
    { icon: "./Icons/Github.png", text: "GitHub" },
    { icon: "./Icons/Js.png", text: "JavaScript" },
    { icon: "./Icons/Html.png", text: "HTML" },
    { icon: "./Icons/Laravel.png", text: "Laravel" },
    { icon: "./Icons/MySQL.png", text: "MySQL" },
    { icon: "./Icons/Node.png", text: "Node" },
    { icon: "./Icons/Php.png", text: "Php" },
    { icon: "./Icons/Tailwind.png", text: "Tailwind" },
    { icon: "./Icons/Trello.png", text: "Trello" },
    { icon: "./Icons/Unity.png", text: "Unity" },
    { icon: "./Icons/VsCode.png", text: "VsCode" },
  ];

  return (
    <section
      id="EXPERIENCES"
      className="h-screen flex flex-col justify-center items-center"
    >
      <div className="flex flex-wrap w-[50%] justify-center gap-10">
        {Stack.map((el, index) => (
          <StackCard key={index} icon={el.icon} text={el.text} />
        ))}
      </div>
    </section>
  );
}
