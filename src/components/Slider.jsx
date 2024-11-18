import "./slider.css";

export default function Slider() {
  return (
    <section className="slider flex items-center">
      <div className="container mx-auto px-2">
        <div className="text-center md:text-7xl sm:text-3xl text-2xl font-bold text-white">
          <h2 className="md:mb-8 mb-4">Balancing</h2>
          <h2>Crypto Markets</h2>
        </div>

        <p className="sm:text-sm text-xs my-8 text-[#E5E5E5] text-center md:w-[40%] md:mx-auto">
          Our fully automated proprietary quantitative trading software provides
          24/7 liquidity to 170+ crypto assets across 25+ centralized spot and
          derivative crypto exchanges.
        </p>

        <div className="flex justify-center">
          <a
            className="uppercase font-semibold tracking-wide sm:text text-xs-sm py-4 px-8 text-white"
            href="#"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
