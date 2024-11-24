import assets from "../store/asstets";

export default function Footer() {
  return (
    <footer className="pt-12 mt-12 mb-4 border-t border-[#BCBCBC]">
      <div className="container mx-auto px-2 flex justify-between flex-wrap gap-4 ">
        <div className="left-box">
          <h3 className="mb-4 text-2xl font-bold text-white">Gravity Team</h3>
          <ul className="flex flex-col gap-2 text-sm text-[#BCBCBC]">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Work with Us</a>
            </li>
          </ul>
        </div>

        <div className="right-box">
          <a href="#">
            <img
              className="max-w-[120px]"
              loading="lazy"
              src={assets.logo}
              alt="Logo Image"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
