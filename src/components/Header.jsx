import React, { useState } from "react";
import { CgShoppingBag } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai"; // Importing menu icon
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-4 px-2 container mx-auto sticky top-0 z-10 bg-white max-sm:overflow-hidden">
      <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
        <img
          className="cursor-pointer"
          src="/assets/imgs/logo.svg"
          alt="Logo"
        />
        <button
          className="md:hidden text-[#343d48] focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <AiOutlineMenu className="text-2xl" />
        </button>
      </div>
      <nav
        className={`flex-col md:flex-row gap-10 text-md text-[#343d48] font-medium mb-4 md:mb-0 md:py-5 ${
          isMobileMenuOpen ? "flex" : "hidden md:flex"
        }`}
      >
        <NavLink className="hover:text-[#212121]" to="/">
          Home
        </NavLink>
        <NavLink className="hover:text-[#212121]" to="/products">
          Products
        </NavLink>
        <NavLink className="hover:text-[#212121]" to="/women">
          Category
        </NavLink>
        <NavLink className="hover:text-[#212121]" to="/shops">
          Shops
        </NavLink>
        <FiSearch className="text-2xl hidden md:block" />
        <NavLink className="text-[#212121] font-semibold">Sign In</NavLink>
        <CgShoppingBag className="text-2xl" />
      </nav>
    </div>
  );
};

export default Header;
