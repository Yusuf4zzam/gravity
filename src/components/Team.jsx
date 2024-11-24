import assets from "../store/asstets";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Team() {
  return (
    <div className="team my-12">
      <div className="container mx-auto px-2 flex justify-between flex-wrap gap-8">
        <div className="left-box relative md:w-[40%] w-full">
          <h2 className="lg:text-5xl md:text-4xl text-2xl font-bold text-white relative z-10">
            Join&nbsp;
            <br className="md:block hidden" />
            Gravity Team
          </h2>

          <img
            className="absolute top-[-150%] left-[-20%] rotate-[200deg]"
            loading="lazy"
            src={assets.marketShadow}
            alt="Background Shadow Image"
          />
        </div>

        <div className="right-box md:w-[50%]">
          <p className="leading-[1.5] text-white text-sm">
            Join our community of innovators, problem solvers and owners who
            apply scientific discovery techniques to make crypto markets a
            better place for everyone.
          </p>

          <p className="leading-[1.5] text-white text-sm my-6">
            As we emphasize it in our name – Gravity Team, we are a team. A team
            of bright, talented people, each masters of their specialty, curious
            about the world and eager to solve the new exciting cryptocurrency
            market problems, build cool stuff and have fun whilst doing so!
          </p>

          <a
            className="text-white text-sm underline flex items-center gap-2"
            href="#"
          >
            Learn more about working with us
            <FaLongArrowAltRight />
          </a>
        </div>
      </div>
    </div>
  );
}
