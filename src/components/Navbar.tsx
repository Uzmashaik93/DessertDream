import React, { useState, useEffect } from "react";
import logo from "/logo.png";
import { Facebook, FacebookIcon, Link, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to add 'scrolled' class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar fixed w-full p-4 transition-all z-50 flex justify-between align-middle duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      } ${isMenuOpen ? "bg-white shadow-md" : "bg:transparent"}`}
    >
      <div className="flex justify-between gap-7 items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-18" />
          <a href="#home" className="text-xl font-bold text-orange-300">
            Dessert Dream By Namita
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-3xl text-orange-300 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        }  md:flex md:space-x-6 space-y-4 md:space-y-0 text-center md:mt-0 absolute w-full top-22 left-0 bg-white shadow-lg md:relative md:top-5 md:w-auto md:bg-transparent md:shadow-none`}
      >
        <li>
          <a href="/" className="text-lg text-orange-300 hover:text-pink-600">
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="text-lg text-orange-300 hover:text-pink-600"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="text-lg text-orange-300 hover:text-pink-600"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="text-lg text-orange-300 hover:text-pink-600"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-lg text-orange-300 hover:text-pink-600"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
