import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

const NavbarBtn = () => {
  return (
    <div className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 cursor-pointer hover:shadow-cyanShadow">
      Hire Me
      <div className="sm:hidden md:block">
        <FiArrowDownRight />
      </div>
    </div>
  );
};

export default NavbarBtn;
// 22:29pm
