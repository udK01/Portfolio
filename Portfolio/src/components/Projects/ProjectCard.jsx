export default function ProjectCard({ src }) {
  return (
    <div className="xl:w-[200px] xl:h-[300px] lg:w-[150px] lg:h-[250px] md:w-[200px] md:h-[300px] 2xs:w-[150px] 2xs:h-[250px]  filter grayscale transition-all duration-500 ease-in-out xl:hover:w-[400px] lg:hover:w-[250px] md:hover:w-[300px] 2xs:hover:w-[225px] hover:grayscale-0 hover:filter-none hover:cursor-pointer">
      <img
        src={src}
        className="relative w-full h-full object-cover border-2 border-primary_purple"
      />
    </div>
  );
}
