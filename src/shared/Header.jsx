import React from "react";
//import { Link } from "react-router-dom";
import "./shared.css";
import logo from '../Pages/Home/images/logo-png.png';

const Header = () => {
  return (
    <div>
    {/* Navigation bar */}
    <nav className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700  md:flex-wrap md:justify-start">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="flex items-center">
          {/* Hamburger menu button */}
          <button
            className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700  lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContentX"
            aria-controls="navbarSupportedContentX"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* Hamburger menu icon */}
            <span className="[&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
          </button>
        </div>


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
                className="headerLink block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  lg:p-2 [&.active]:text-black/90"
                href="/"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Home
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