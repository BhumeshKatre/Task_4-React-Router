import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '/imgs/logo1.jpg'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const handleHamburderMenuBtn = () => {
    setShowMenu(!showMenu);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/user", label: "User Info" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About us" },
  ];

  const handleMenu = () => {
    navigate(menubar.path);
    setShowMenu(!showMenu);
  }

  return (
    <>
      <header className="flex bg-blue-300 px-4 py-2 rounded-2xl w-[80vw] mx-auto shadow-lg justify-between items-center">
        <img
          className="w-10 h-10 rounded-full"
          src={Logo}
          alt=""
        />
        <nav className="hidden md:flex gap-4">
          <NavLink to={"/"}> Home </NavLink>
          <NavLink to={"/user"}> User Info </NavLink>
          <NavLink to={"/contact"}> Contact </NavLink>
          <NavLink to={"/about"}> About us </NavLink>
        </nav>

        <GiHamburgerMenu
          onClick={handleHamburderMenuBtn}
          className="md:hidden text-blue-50 text-3xl font-bold "
        />
      </header>

      {showMenu && (
        <div
          style={{
            top: showMenu ? '0px' : '-100px'
          }}
          className="absolute left-0 w-100 h-50 px-10 py-8 text-blue bg-white duration-500 ">
          <nav className="flex flex-col gap-4">
            <NavLink
              onClick={handleHamburderMenuBtn} to={"/"}> Home </NavLink>
            <NavLink onClick={handleHamburderMenuBtn} to={"/user"}> User Info </NavLink>
            <NavLink onClick={handleHamburderMenuBtn} to={"/contact"}> Contact </NavLink>
            <NavLink onClick={handleHamburderMenuBtn} to={"/about"}> About us </NavLink>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
