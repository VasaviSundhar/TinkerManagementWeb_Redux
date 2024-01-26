import React from "react";
//import { Link } from "react-router-dom";

import logo from '../Home/images/logo-png.png';

const Header = () => {
  return (
    <div>
    {/* Navigation bar */}
    <nav className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700  md:flex-wrap md:justify-start">
      <div className="flex w-full flex-wrap items-center justify-between px-3">

        <img
            className="block h-12 w-auto cursor-pointer"
            src={logo}
            alt="Tinker Services Logo"
          />


        {/* Navigation links */}
        <div
          className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContentX"
          data-te-collapse-item
        >
          <ul className="ml-auto flex flex-col lg:flex-row" data-te-navbar-nav-ref>
            
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a
                className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:p-2 [&.active]:text-black/90"
                href="/"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
    
  );
};

export default Header;