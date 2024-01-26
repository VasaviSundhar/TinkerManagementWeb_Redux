import React from "react";
import "./Home.css";
//import logo from "./images/logo-png.png";
import { Collapse, Ripple, initTE } from 'tw-elements';

const HomeHeader = () => {
    initTE({ Collapse, Ripple });
  return (
    
    <div>
            
            {/* <!-- Navigation bar --> */}
            <nav
                className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700  md:flex-wrap md:justify-start"
                data-te-navbar-ref>
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                <div className="flex items-center">
                    {/* <!-- Hamburger menu button --> */}
                    <button
                    className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700  lg:hidden"
                    type="button"
                    data-te-collapse-init
                    data-te-target="#navbarSupportedContentX"
                    aria-controls="navbarSupportedContentX"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    {/* <!-- Hamburger menu icon --> */}
                    <span className="[&>svg]:w-5">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-7 w-7">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </span>
                    </button>
                </div>

                {/* <!-- Navigation links --> */}
                <div
                    className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
                    id="navbarSupportedContentX"
                    data-te-collapse-item>
                    <ul
                    className="mr-auto flex flex-col lg:flex-row"
                    data-te-navbar-nav-ref>
                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <a
                        className="headerLink block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  lg:p-2 [&.active]:text-black/90"
                        href="/"
                        data-te-nav-link-ref
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        >Home
                        {/* <img className="block h-12 w-auto cursor-pointer"
                        src={logo}
                        alt="Tinker Services Logo"></img> */}
                        </a>
                    </li>
                   
                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <a
                        className="headerLink block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  lg:p-2 [&.active]:text-black/90"
                        href="/booking"
                        data-te-nav-link-ref
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        >Book a Service</a>
                    </li>
                    
                    </ul>
                    <ul className="ml-auto flex flex-col lg:flex-row" data-te-navbar-nav-ref>
                    {/* <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <a
                        className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  lg:p-2 [&.active]:text-black/90"
                        href="/clientRegistration"
                        data-te-nav-link-ref
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        >Register As a Tinker</a>
                    </li> */}
                        <li className="mb-4 lg:mb-2 lg:pr-2" data-te-nav-item-ref>
                            Are you a Tinker? 
                        <a
                            className="loginButton block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  lg:p-1 mt-2 pl-2[&.active]:text-black/90"
                            href="/login"
                            data-te-nav-link-ref
                            data-te-ripple-init
                            data-te-ripple-color="light"
                        >
                            Login Here!!!
                        </a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>

            {/* <!-- Hero section with background image, heading, subheading and button --> */}
            <div
                className="relative overflow-hidden bg-cover bg-no-repeat imageCss"
                >
                    
                <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}>
                <div className="flex h-full items-center justify-center">
                    <div className="px-6 text-center text-white md:px-12">
                    <h1 className="mb-6 text-5xl font-bold">Tinker Services</h1>
                    <h3 className="mb-8 text-3xl font-bold">Your Trusted Handyman for Every Task!!!</h3>
                    {/* <button
                        type="button"
                        className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 "
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Get started
                    </button> */}
                    </div>
                </div>
                </div>
            </div>
           
    </div>
      
    );
  };
  
export default HomeHeader;