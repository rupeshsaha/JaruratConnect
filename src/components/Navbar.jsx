import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const menuItems = ["Mission","Resources", "Seek Help", "Volunteer"];

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
    setIsActive(false); 

    const section = document.getElementById(item);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // window.location.href(`${item}`)
  };

  return (
    <nav id="navbar" className="fixed w-full z-50 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
             <Link to="/"> <span className="text-2xl font-bold">JaruratConnect</span></Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  onClick={() => handleMenuItemClick(item.toLowerCase().trim().replace(" ","-"))}
                  className={`hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium ${
                    activeItem === item.toLowerCase() ? "text-blue-500" : ""
                  }`}
                >
                  {item}
                </Link>
              ))}
              <Link to = "/donate">
              <button
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium">
                Donate
              </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              onClick={() => setIsActive((prev) => !prev)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-700 focus:outline-none"
              aria-expanded={isActive}
            >
              <svg
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
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${isActive ? "block" : "hidden"} md:hidden bg-neutral-900`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <Link
              key={item}
              onClick={() => handleMenuItemClick(item.toLowerCase().trim().replace(" ","-"))}
              className={`block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium ${
                activeItem === item ? "text-blue-500" : ""
              }`}
            >
              {item}
            </Link>
          ))}
          <button 
          onClick={()=> handleMenuItemClick('donate')}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 w-full rounded-md text-sm font-medium">
            Donate
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
