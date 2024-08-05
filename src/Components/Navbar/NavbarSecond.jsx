import React, { useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";

const NavbarSecond = () => {
  // for home
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const toggleHomeDropdownOpen = () => {
    setHomeDropdownOpen(!homeDropdownOpen);
  };
  //   for page
  const [pageDropdownOpen, setPageDropdownOpen] = useState(false);
  const togglePageDropdownOpen = () => {
    setPageDropdownOpen(!pageDropdownOpen);
  };
  //   for blog
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const toggleBlogDropdownOpen = () => {
    setBlogDropdownOpen(!blogDropdownOpen);
  };
  //   for language
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const toggleLanguageDropdownOpen = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  return (
    <>
      {/* left side */}
      <div className="relative hidden text-blue-30-0 xl:flex justify-between items-center px-10 h-14 border-t border-b border-blue-200">
        <div className="flex justify-center items-center gap-10 ">
          <div
            className="h-14 text-lg  border-4 border-transparent flex justify-center items-center hover:border-b-4 hover:border-b-blue-300 cursor-pointer"
            onMouseOver={toggleHomeDropdownOpen}
          >
            Home
          </div>
          {/* Home Dropdown */}
          <div
            className={`bg-white font-gabarito absolute top-14 left-10 w-[20%] flex flex-col gap-2 p-4
            ${homeDropdownOpen ? "block" : "hidden"}
            `}
          >
            <div className="text-lg cursor-pointer hover:underline decoration-2  decoration-blue-20-0 hover:underline-offset-4">
              Main Home
            </div>
            <div className="text-lg cursor-pointer hover:underline decoration-2  decoration-blue-20-0 hover:underline-offset-4">
              Orthodontic Clinic
            </div>
            <div className="text-lg cursor-pointer hover:underline decoration-2  decoration-blue-20-0 hover:underline-offset-4">
              Dental Tourism
            </div>
            <div className="text-lg cursor-pointer hover:underline decoration-2  decoration-blue-20-0 hover:underline-offset-4">
              General Dentist
            </div>
            <div className="text-lg cursor-pointer hover:underline decoration-2  decoration-blue-20-0 hover:underline-offset-4">
              Cosmetic Dentistry
            </div>
            <div className="text-lg cursor-pointer hover:underline decoration-2  decoration-blue-20-0 hover:underline-offset-4">
              Dental Shop
            </div>
          </div>
          {/* Home Dropdown End */}
          <div
            className="h-14 text-lg border-4 border-transparent flex justify-center items-center hover:border-b-4 hover:border-b-blue-300 cursor-pointer"
            onMouseOver={togglePageDropdownOpen}
          >
            Pages
          </div>
          {/* Pages Dropdown */}
          <div
            className={`bg-white absolute top-14 left-30 w-[20%] flex flex-col gap-2 p-4
            ${pageDropdownOpen ? "block" : "hidden"}
            `}
          >
            <div className="text-lg cursor-pointer hover:underline decoration-2  decoration-blue-20-0 hover:underline-offset-4">
              About Us
            </div>
            <div className="text-lg cursor-pointer hover:underline decoration-2  decoration-blue-20-0 hover:underline-offset-4">
              Our Services
            </div>
            <div className="text-lg cursor-pointer hover:underline decoration-2  decoration-blue-20-0 hover:underline-offset-4">
              Our Staff ...
            </div>
            <div className="text-lg cursor-pointer hover:underline decoration-2  decoration-blue-20-0 hover:underline-offset-4">
              Pricing Plans
            </div>
            <div className="text-lg cursor-pointer hover:underline decoration-2  decoration-blue-20-0 hover:underline-offset-4">
              Pricing Packages
            </div>
            <div className="text-lg cursor-pointer hover:underline decoration-2  decoration-blue-20-0 hover:underline-offset-4">
              Comparing Prices
            </div>
            <div className="text-lg cursor-pointer hover:underline decoration-2  decoration-blue-20-0 hover:underline-offset-4">
              Book Appointment
            </div>
            <div className="text-lg cursor-pointer hover:underline decoration-2  decoration-blue-20-0 hover:underline-offset-4">
              FAQ Page
            </div>
            <div className="text-lg cursor-pointer hover:underline decoration-2  decoration-blue-20-0 hover:underline-offset-4">
              Comming Soon
            </div>
            <div className="text-lg cursor-pointer hover:underline decoration-2  decoration-blue-20-0 hover:underline-offset-4">
              Contact Us
            </div>
          </div>
          {/* pages Dropdown End */}
          <div
            className="h-14 text-lg border-4 border-transparent flex justify-center items-center hover:border-b-4 hover:border-b-blue-300 cursor-pointer"
            onMouseOver={toggleBlogDropdownOpen}
          >
            Blog
          </div>
          {/* Blog Dropdown */}
          <div
            className={`bg-white font-gabarito absolute top-14 left-52 w-[20%] flex flex-col gap-2 p-4
            ${blogDropdownOpen ? "block" : "hidden"}
            `}
          >
            <div className="text-lg cursor-pointer hover:underline decoration-2  decoration-blue-20-0 hover:underline-offset-4">
              Right Slider
            </div>
            <div className="text-lg cursor-pointer hover:underline decoration-2  decoration-blue-20-0 hover:underline-offset-4">
              Left Slider
            </div>
            <div className="text-lg cursor-pointer hover:underline decoration-2  decoration-blue-20-0 hover:underline-offset-4">
              No Slider
            </div>
            <div className="text-lg cursor-pointer hover:underline decoration-2  decoration-blue-20-0 hover:underline-offset-4">
              Post Format
            </div>
          </div>
          {/* Blog Dropdown End */}
          <div className="h-14 text-lg border-4 border-transparent flex justify-center items-center hover:border-b-4 hover:border-b-blue-300 cursor-pointer">
            Shop
          </div>
          <div className="h-14 text-lg border-4 border-transparent flex justify-center items-center hover:border-b-4 hover:border-b-blue-300 cursor-pointer">
            Landing
          </div>
        </div>

        {/* right side */}
        <div className="flex justify-center items-center gap-10">
          <div
            className="flex justify-center items-center  gap-2 cursor-pointer"
            onMouseOver={toggleLanguageDropdownOpen}
          >
            <BsGlobe className="text-xl " />
            <span>English</span>
          </div>
          {/* Home Dropdown */}
          <div
            className={`bg-white font-gabarito absolute top-14 right-28 w-[20%] flex flex-col gap-2 p-4
            ${languageDropdownOpen ? "block" : "hidden"}
            `}
          >
            <div className="text-lg cursor-pointer hover:underline decoration-2  decoration-blue-20-0 hover:underline-offset-4">
              French
            </div>
            <div className="text-lg cursor-pointer hover:underline decoration-2  decoration-blue-20-0 hover:underline-offset-4">
              German
            </div>
          </div>
          {/* Language Dropdown End */}
          <div className="relative cursor-pointer">
            <IoBagOutline className=" text-xl" />
            <span className="h-5 w-5 rounded-full bg-blue-20-0 absolute top-[-6px] right-[-10px] text-white flexCenter text-[15px]">
              0
            </span>
          </div>
          <div className="underline cursor-pointer">Book free appointment</div>
        </div>
      </div>
    </>
  );
};

export default NavbarSecond;
