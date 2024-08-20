import StackCard from "./StackCard";

export default function StackRow({ text, stack }) {
  return (
    <div className="flex flex-col items-center z-20 space-y-[20px]">
      <div className="font-robot font-semibold lg:text-[30px] md:text-[20px] text-primary_green">
        {text}
      </div>
      <div className="flex xl:gap-10 md:gap-6">
        {stack.map((el, index) => (
          <StackCard key={index} icon={el.icon} text={el.text} />
        ))}
      </div>
    </div>
  );
}
