import HeadContent from "./HeadContent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard, Navigation } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "./about.css";
import assets from "../store/asstets";

export default function About() {
  return (
    <section className="about mt-12">
      <div className="container mx-auto">
        <HeadContent
          HeadText="We are in a good company"
          paraText="Our partnerships have delivered great value to our projects and we’re happy to share some of their feedback below"
        />

        <div className="controler flex justify-center gap-8 mb-4">
          <button className="prev-button text-2xl ">
            <FaArrowLeft />
          </button>

          <button className="next-button text-2xl">
            <FaArrowRight />
          </button>
        </div>

        <div className="md:w-[70%] lg:w-[60%] mx-auto ">
          <Swiper
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: ".prev-button", // Use your custom button classes
              nextEl: ".next-button",
            }}
            mousewheel={true}
            keyboard={true}
            modules={[Pagination, Mousewheel, Keyboard, Navigation]}
            spaceBetween="30"
            initialSlide={1} // Set the default active slide (index starts from 0)
            loop="true"
            className="mySwiper"
          >
            <SwiperSlide className="text-white">
              <p className="text-sm leading-6">
                Since 2019, Gravity team has been an astounding market maker for
                Bitkub. They have proven themselves to be one of the most
                consistent, committed and driven market makers on our exchange.
                Gravity Team has contributed high-quality volume and has proven
                to be very reliable and trustworthy partner. We strongly
                advocate Gravity Team as they have been an indispensable part of
                our market-making team.
              </p>

              <h4 className="mt-6 mb-4 font-bold text-sm">
                Atthakrit Chimplapibul
              </h4>

              <div className="flex items-center justify-center gap-4">
                <span className="text-xs">Co-founder & CEO of Bitkub</span>

                <div className="w-[100px]">
                  <img loading="lazy" src={assets.bitkub} alt="Bitkub Image" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-white">
              <p className="text-sm leading-6">
                Since 2019, Gravity team has been an astounding market maker for
                Bitkub. They have proven themselves to be one of the most
                consistent, committed and driven market makers on our exchange.
                Gravity Team has contributed high-quality volume and has proven
                to be very reliable and trustworthy partner. We strongly
                advocate Gravity Team as they have been an indispensable part of
                our market-making team.
              </p>

              <h4 className="mt-6 mb-4 font-bold text-sm">
                Atthakrit Chimplapibul
              </h4>

              <div className="flex items-center justify-center gap-4">
                <span className="text-xs">Co-founder & CEO of Bitkub</span>

                <div className="w-[100px]">
                  <img loading="lazy" src={assets.bitkub} alt="Bitkub Image" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-white">
              <p className="text-sm leading-6">
                Since 2019, Gravity team has been an astounding market maker for
                Bitkub. They have proven themselves to be one of the most
                consistent, committed and driven market makers on our exchange.
                Gravity Team has contributed high-quality volume and has proven
                to be very reliable and trustworthy partner. We strongly
                advocate Gravity Team as they have been an indispensable part of
                our market-making team.
              </p>

              <h4 className="mt-6 mb-4 font-bold text-sm">
                Atthakrit Chimplapibul
              </h4>

              <div className="flex items-center justify-center gap-4">
                <span className="text-xs">Co-founder & CEO of Bitkub</span>

                <div className="w-[100px]">
                  <img loading="lazy" src={assets.bitkub} alt="Bitkub Image" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
