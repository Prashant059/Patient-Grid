import React, { useState } from "react";
import Logo from '../../assets/images/logo.svg'

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-accent bg-opacity-50 px-4 md:px-10">
      <div className="max-w-[1200px] flex justify-between items-center h-[89px] mx-auto">
        {/* Logo */}
        <div>
          <img src={Logo} alt="logo" className="w-auto h-8" />
        </div>

        {/* Center Menu */}
        <ul className="hidden lg:flex gap-12 font-medium items-center">
          <li>
            <a href="#" className="hover:text-primary transition-colors">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition-colors">
              Plans
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition-colors">
              More
            </a>
          </li>
        </ul>

        {/* Right Menu */}
        <div className="hidden lg:flex gap-9 items-center">
          <a href="#" className="font-medium hover:text-primary transition-colors">
            Login
          </a>
          <button className="bg-primary hover:bg-primary/90 transition-colors text-white w-[196px] py-3.5 rounded-full">
            Request a demo
          </button>
        </div>

        {/* Mobile Menu Button (hamburger) */}
        <button className="lg:hidden" onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className={`lg:hidden px-4 pb-4 ${isMobileMenuOpen ? '' : 'hidden'}`}
      >
        <ul className="flex flex-col gap-4 font-medium">
          <li>
            <a href="#" className="hover:text-primary transition-colors">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition-colors">
              Plans
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition-colors">
              More
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition-colors">
              Login
            </a>
          </li>
          <li>
            <button className="bg-primary hover:bg-primary/90 transition-colors text-white w-full py-3.5 rounded-full">
              Request a demo
            </button>
          </li>
        </ul>
      </div>
    </header>
    </>
  );
};

export default Nav;
