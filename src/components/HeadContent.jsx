export default function HeadContent({ HeadText, paraText }) {
  return (
    <div className="head-content">
      <h2 className="text-center md:text-7xl sm:text-3xl text-2xl font-bold text-white">
        {HeadText}
      </h2>

      <p className="sm:text-sm text-xs my-8 text-[#E5E5E5] text-center md:w-[40%] md:mx-auto">
        {paraText}
      </p>
    </div>
  );
}
