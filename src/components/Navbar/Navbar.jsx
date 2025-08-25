// src/components/Navbar.jsx
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import Responsivemenu from "./ResponsiveMenu";
import SearchOverlay from "./SearchOverlay";
import { useTheme } from "../../theme/ThemeContext";
import { useNavigate } from "react-router-dom";
import { NavbarMenu } from "../../Data/data";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <nav
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
      }}
      className="w-full fixed top-0 left-0 z-50 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 flex justify-between items-center py-3">
        {/* Logo */}
        <div className="text-xl sm:text-2xl flex items-center gap-1 sm:gap-2 font-bold uppercase whitespace-nowrap">
          <FaDumbbell style={{ color: "var(--color-primary)" }} />
          <p>The Gym</p>
          <p style={{ color: "var(--color-primary)" }}>Way</p>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 items-center">
          {NavbarMenu.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="font-semibold hover:opacity-80"
              style={{ color: "var(--color-text)" }}
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search button */}
          {!searchOpen && (
            <button
              onClick={() => setSearchOpen(true)}
              className="text-xl sm:text-2xl hover:opacity-80 rounded-full p-2"
            >
              <CiSearch />
            </button>
          )}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-bg)",
            }}
            className="p-2 rounded-full"
          >
            {theme === "light" ? (
              <MdOutlineDarkMode className="text-xl sm:text-2xl" />
            ) : (
              <MdOutlineLightMode className="text-xl sm:text-2xl" />
            )}
          </button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <MdMenu
              className="text-3xl sm:text-4xl cursor-pointer"
              onClick={() => setOpen(!open)}
              style={{ color: "var(--color-text)" }}
            />
          </div>
        </div>
      </div>

      {/* Search overlay */}
      <SearchOverlay searchOpen={searchOpen} setSearchOpen={setSearchOpen} />

      {/* Mobile menu */}
      <Responsivemenu open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
