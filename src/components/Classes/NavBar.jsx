import React, { useState } from "react";
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";
import CategoricalSearch from "./CategoricalSearch";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [active, setActive] = useState("kelassaya");
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  const handleNavClick = (navTitle) => {
    setActive(navTitle);
  };

  const renderNavItems = () => {
    return navLinks.map((nav) => {
      const isActive = active === nav.title;
      const isLastItem = nav === navLinks[navLinks.length - 1];
      const itemClassName = `font-poppins cursor-pointer text-16px transition ease-in-out duration-100 ${
        isActive ? "text-dark" : "text-accent"
      } ${isLastItem ? "mr-0" : "mr-10"}`;
      
      return (
        <li
          key={nav.id}
          className={itemClassName}
          onClick={() => handleNavClick(nav.title)}
        >
          <a href={`#${nav.id}`}>
            {nav.text ? nav.title : (toggle ? nav.title : <img src={nav.img} alt={nav.title} />)}
          </a>
        </li>
      );
    });
  };

  const renderMobileMenu = () => {
    const mobileMenuClassName = toggle ? "flex" : "hidden";

    return (
      <div className={`${mobileMenuClassName} p-6 bg-white absolute top-20 right-0 mx-4 min-w-140px rounded sidebar shadow z-20`}>
        <ul className="list-none flex justify-end items-start flex-1 flex-col">
          {renderNavItems().map((item, index) => (
            <li key={index} className={index === navLinks.length - 1 ? "" : "mb-4"}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} className="mr-5" alt="Logo" />

      <div className="hidden sm:flex mr-5">
        <CategoricalSearch />
      </div>

      <div className="hidden sm:flex flex-grow relative">
        <SearchBar />
      </div>

      <ul className="hidden sm:flex list-none justify-end items-center ms-7">
        {renderNavItems()}
      </ul>
      

      <div className="flex sm:hidden justify-end items-center flex-1">
        <div className="flex-grow mr-5 relative">
          <SearchBar />
        </div>

        <button
          type="button"
          className="w-20px h-20px"
          onClick={handleToggle}
        >
          <img src={toggle ? close : menu} alt="Menu" className="object-contain invert" />
        </button>

        {renderMobileMenu()}
      </div>
    </nav>
  );
};

export default Navbar;
