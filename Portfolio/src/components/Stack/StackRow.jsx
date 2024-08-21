import StackCard from "./StackCard";

export default function StackRow({ text, stack }) {
  return (
    <div className="flex flex-col items-center z-20 space-y-[20px]">
      <div className="font-robot font-semibold lg:text-[30px] md:text-[20px] text-primary_green">
        {text}
      </div>
      <div className="flex flex-wrap justify-center 2xs:w-[80%] md:w-full xl:gap-10 md:gap-6 2xs:gap-4">
        {stack.map((el, index) => (
          <StackCard key={index} icon={el.icon} text={el.text} />
        ))}
      </div>
    </div>
  );
}
