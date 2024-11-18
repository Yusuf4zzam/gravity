import NavItems from "./NavItems";
import assets from "../store/asstets";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { useCallback, useState } from "react";

export default function Header() {
  const [IsExapnding, setIsExpanding] = useState(false);

  const HandleToggleNav = useCallback(() => {
    setIsExpanding(!IsExapnding);
  }, [IsExapnding]);

  const HandleLogoClickFunc = useCallback(() => {
    window.scrollY(0, 0);
  }, []);
  return (
    <header className="py-6 sticky top-0 bg-[#141619]/50 backdrop-blur-lg z-50">
      <div className="container flex justify-between items-center gap-2 mx-auto px-2">
        <div
          className="logo-box md:w-48 w-24 cursor-pointer"
          onClick={() => HandleLogoClickFunc()}
        >
          <img loading="lazy" src={assets.logo} alt="Logo" />
        </div>

        <nav
          className={`flex justify-center items-center  md:relative absolute left-0 top-[100%] md:shadow-none shadow-lg md:w-[fit-content] w-full md:h-full transition-all duration-300 ease-in-out ${
            IsExapnding ? "h-[50vh] py-4" : "h-0 py-0"
          } overflow-hidden md:bg-[transparent] bg-[#141619] md:backdrop-blur-none backdrop-blur-lg`}
        >
          <ul className="flex md:flex-row flex-col items-center gap-4 text-white text-sm">
            <NavItems>Home</NavItems>
            <NavItems className="flex items-center gap-1">
              Our Services
              <MdKeyboardArrowRight className="text-lg" />
            </NavItems>
            <NavItems>Work with Us</NavItems>
            <NavItems>Blog</NavItems>
          </ul>
        </nav>

        <div className="flex items-center gap-4 ">
          <div className="flex items-center gap-2 text-xs text-white">
            <img
              className="w-5"
              loading="lazy"
              src={assets.gravityIcon}
              alt="Get In Touch"
            />
            <p>Get In Touch</p>
          </div>

          <div
            className="text-lg md:hidden text-white cursor-pointer"
            onClick={() => HandleToggleNav()}
          >
            <FaBarsStaggered />
          </div>
        </div>
      </div>
    </header>
  );
}
