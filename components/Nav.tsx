import React from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          WEB
          <span className="text-yellow-300">DEV</span>
        </h1>
        <div className="nav-link" onClick={() => scrollToSection("home")}>
          Home
        </div>
        <div className="nav-link" onClick={() => scrollToSection("about")}>
          ABOUT
        </div>
        <div className="nav-link" onClick={() => scrollToSection("services")}>
          SERVICES
        </div>
        <div className="nav-link" onClick={() => scrollToSection("skills")}>
          SKILLS
        </div>
        <div className="nav-link" onClick={() => scrollToSection("projects")}>
          PROJECTS
        </div>
        <div className="nav-link" onClick={() => scrollToSection("blog")}>
          BLOG
        </div>
        <div className="nav-link" onClick={() => scrollToSection("contact")}>
          CONTACT
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
