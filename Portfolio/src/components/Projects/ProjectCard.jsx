export default function ProjectCard({ src }) {
  return (
    <div className="w-[200px] h-[300px] filter grayscale transition-all duration-500 ease-in-out hover:w-[400px] hover:grayscale-0 hover:filter-none hover:cursor-pointer">
      <img
        src={src}
        className="relative w-full h-full object-cover border-2 border-primary_purple"
      />
    </div>
  );
}
