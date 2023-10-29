import React from "react";
// import { logo_gwf } from "../../assets/image";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const listMenu = [
  { name: "Beranda", content: [], path: "/" },
  { name: "Blog", content: [], path: "/blog" },
  { name: "Lokasi", content: [], path: "/lokasi" },
  { name: "Blog", content: [], path: "/blog" },
  { name: "Testimoni", content: [], path: "/testimoni" },
  { name: "Kontak", content: [], path: "/kontak" },
];

const Navbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul
      className={` items-center gap-4 justify-center flex-col absolute w-full h-screen  top-0 left-0 bg-white transition-opacity duration-500 ease-in-out lg:relative lg:h-auto lg:flex-row lg:translate-x-0 lg:opacity-100 lg:justify-center ${
        openNav ? "flex lg:hidden z-10 pointer-events-auto" : "hidden lg:flex"
      }`}
    >
      {listMenu.map((item, key) => (
        <li
          key={key}
          className="block antialiased text-sm font-light leading-normal text-blue-gray-900 p-1"
        >
          <a
            href={item.path}
            className="flex items-center duration-200 hover:text-[#6B6B0E] whitespace-nowrap"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="font-syne block w-full shadow-md backdrop-saturate-200 backdrop-blur-2xl border border-white/80 bg-white text-black sticky top-0 z-10 px-0 py-2 bg-opacity-100 rounded-none h-max">
      <div className="flex items-center justify-between text-blue-gray-900 px-14 relative w-full">
        <a
          href="/"
          className="block antialiased font-sans text-base leading-relaxed text-inherit cursor-pointer py-1.5 font-medium z-20"
        >
          Annisa
        </a>
        <button
          className="relative align-middle select-none text-center uppercase transition-all max-w-[40px] max-h-[40px] text-xs lg:hidden z-20"
          onClick={() => setOpenNav(!openNav)}
          type="button"
        >
          {openNav ? (
            <IoClose className="w-8 h-8" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
        {navList}
        <button>Tes</button>
      </div>
    </nav>
  );
};

export default Navbar;
