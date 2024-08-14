import StackCard from "./StackCard";

export default function StackRow({ text, stack }) {
  return (
    <div className="flex flex-col items-center z-20 space-y-[20px]">
      <div className="font-robot font-semibold text-[30px] text-primary_green z-10">
        {text}
      </div>
      <div className="flex gap-10">
        {stack.map((el, index) => (
          <StackCard key={index} icon={el.icon} text={el.text} />
        ))}
      </div>
    </div>
  );
}
