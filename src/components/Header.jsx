import { CgShoppingBag } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex items-center justify-between py-8 container mx-auto sticky top-0 z-10 bg-white">
      <div className="flex gap-12 text-md text-[#343d48] font-mediumx ">
        <img className=" cursor-pointer" src="/assets/imgs/logo.svg" alt="" />
        <NavLink>Demos</NavLink>
        <NavLink>Men Wear</NavLink>
        <NavLink>Women Wear</NavLink>
        <NavLink>Search</NavLink>
        <NavLink>Shops</NavLink>
        <NavLink>Pages</NavLink>
      </div>
      <div className="flex gap-10 items-center text-lg text-[#343d48]">
        <FiSearch className="text-2xl" />

        <NavLink className="text-[#212121] font-semibold">Sign In</NavLink>
        <CgShoppingBag className="text-2xl" />
      </div>
    </div>
  );
};

export default Header;
