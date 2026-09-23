import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [closing, setClosing] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "services" },
    { id: 3, link: "about" },
    { id: 4, link: "projects" },
    { id: 5, link: "skills" },
    { id: 6, link: "contact" },
  ];

  const openMenu = () => {
    setClosing(false);
    setNav(true);
  };

  const closeMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setNav(false);
      setClosing(false);
    }, 400);
  };

  const toggleMenu = () => {
    if (nav) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-100%); }
        }
        .menu-open {
          animation: slideDown 0.4s ease forwards;
        }
        .menu-close {
          animation: slideUp 0.4s ease forwards;
        }
      `}</style>

      {/* Navbar */}
      <div className="flex justify-between items-center w-full h-16 md:h-20 px-6 sm:px-10 lg:px-20 text-white fixed z-50 border-b border-white/5"
        style={{ background: "rgba(0,0,0,0.95)", backdropFilter: "blur(12px)" }}
      >

        {/* Logo */}
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bangers">
            Rita <span className="text-cyan-300">Dev</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ id, link }) => (
            <li key={id}>
              <Link
                to={link}
                smooth
                duration={500}
                className="cursor-pointer capitalize font-medium text-sm text-gray-400 hover:text-cyan-400 px-3 py-2 rounded-full hover:bg-cyan-500/10 transition-all duration-200 block"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div
          onClick={toggleMenu}
          className="cursor-pointer z-50 text-gray-400 hover:text-cyan-400 transition-colors duration-200 md:hidden"
        >
          {nav && !closing ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div
          className={`fixed top-16 left-0 w-full z-40 md:hidden ${closing ? "menu-close" : "menu-open"}`}
          style={{ background: "rgba(0,0,0,0.97)", backdropFilter: "blur(16px)" }}
        >
          <ul className="flex flex-col border-b border-white/10">
            {links.map(({ id, link }) => (
              <li key={id} className="border-b border-white/5 last:border-none">
                <Link
                  onClick={closeMenu}
                  to={link}
                  smooth
                  duration={500}
                  className="cursor-pointer capitalize text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 text-lg font-medium px-8 py-4 flex items-center gap-3"
                >
                  <span className="text-cyan-500 text-sm">#</span>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;