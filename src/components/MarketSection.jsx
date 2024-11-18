import HeadContent from "./HeadContent";
import { MdArrowRightAlt } from "react-icons/md";
import assets from "../store/asstets";

export default function MarketSection() {
  return (
    <>
      <section className="market-sction">
        <div className="container mx-auto px-2">
          <HeadContent
            HeadText="Crypto Market Making"
            paraText="We are a global crypto liquidity provider and algorithmic market maker. We trade digital assets listed on Centralized Exchanges in over 15 countries worldwide."
          />

          <div className="content flex flex-col gap-12 ">
            <div className="box relative flex items-center justify-between flex-wrap gap-4">
              <div className="text-box md:w-[40%] text-white">
                <h3 className="md:text-[36px] text-xl leading-10 mb-4">
                  Market Making for Crypto Projects
                </h3>
                <span className="text-sm font-bold">
                  Accelerate your token’s journey by boosting its liquidity
                </span>
                <p className="text-sm my-4">
                  We invest in building long-term, sustainable relationships and
                  support our projects in their growth journey with our
                  services, industry expertise and network.
                </p>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm w-[fit-content]"
                >
                  Learn More
                  <MdArrowRightAlt className="text-2xl" />
                </a>
              </div>

              <div className="img-box md:w-[50%] relative z-10">
                <img loading="lazy" src={assets.market1} alt="Market Image" />
              </div>

              <img
                className="absolute md:top-[-50%] md:left-[-40%] top-[-20%] left-[-20%]"
                loading="lazy"
                src={assets.marketShadow}
                alt="Shadow Image"
              />
            </div>

            <div className="box relative flex items-center justify-between flex-wrap gap-4">
              <div className="img-box md:w-[50%] relative z-10">
                <img loading="lazy" src={assets.market2} alt="Market Image" />
              </div>

              <div className="text-box md:w-[40%] text-white">
                <h3 className="md:text-[36px] text-xl leading-10 mb-4">
                  Market Making for Crypto Exchanges
                </h3>
                <span className="text-sm font-bold">
                  Attract more traders and projects with deep order books &
                  liquidity
                </span>
                <p className="text-sm my-4">
                  Our world-class market making services are proven to help
                  local and emerging exchanges win traders and gain
                  market-leading positions of up to 90% market dominance.
                </p>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm w-[fit-content]"
                >
                  Learn More
                  <MdArrowRightAlt className="text-2xl" />
                </a>
              </div>

              <img
                className="absolute md:top-[-50%] md:left-[-40%] top-[-20%] left-[-20%]"
                loading="lazy"
                src={assets.marketShadow}
                alt="Shadow Image"
              />
            </div>

            <div className="box relative flex items-center justify-between flex-wrap gap-4">
              <div className="text-box md:w-[40%] text-white relative z-10">
                <h3 className="md:text-[70px] text-4xl leading-[1.2] mb-4">
                  Our Partners <br />& Friends
                </h3>
              </div>

              <div className="img-box md:w-[50%]">
                <img loading="lazy" src={assets.market3} alt="Market Image" />
              </div>

              <img
                className="absolute md:top-[0%] md:left-[-40%] top-[-20%] left-[-20%]"
                loading="lazy"
                src={assets.marketShadow}
                alt="Shadow Image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
