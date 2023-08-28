import React, { useState, useEffect } from "react";
import Images from "../Assets/Images";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle toggling the mobile menu
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle scrolling behavior
  const handleScroll = () => {
    // Adjust the threshold value (e.g., 100) as needed for your specific case
    const threshold = 100;
    const scrolled = window.scrollY > threshold;
    setIsScrolled(scrolled);
  };

  // Attach scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`bg-transparent ${
        isScrolled
          ? "fixed top-0 left-0 right-0 bg-white shadow-xl pb-2 md:pb-5 z-10"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full lg:pt-6 ">
            <div className="flex items-center space-x-16 flex-shrink-0">
              <a
                href="#home"
                className=" text-[#EF443B] text-center font-rubik font-bold text-2xl leading-normal"
              >
                Krypto
              </a>
            </div>
            <div className="hidden lg:block pt-2 ">
              <div className=" flex items-baseline space-x-5 2xl:space-x-9">
                <a
                  href="#Howitworks"
                  className={`${
                    isScrolled ? "text-[#160E33]" : "text-white "
                  } font-rubik text-base font-normal leading-normal uppercase`}
                >
                  How it works
                </a>
                <a
                  href="#Cryptos"
                  className={`${
                    isScrolled ? "text-[#160E33]" : "text-white "
                  } font-rubik text-base font-normal leading-normal uppercase`}
                >
                  Cryptos
                </a>
                <a
                  href="#Features"
                  className={`${
                    isScrolled ? "text-[#160E33]" : "text-white "
                  } font-rubik text-base font-normal leading-normal uppercase`}
                >
                  Features
                </a>
                <a
                  href="#Testimonial"
                  className={`${
                    isScrolled ? "text-[#160E33]" : "text-white "
                  } font-rubik text-base font-normal leading-normal uppercase`}
                >
                  Testimonial
                </a>
                <a
                  href="#University"
                  className={`${
                    isScrolled ? "text-[#160E33]" : "text-white "
                  } font-rubik text-base font-normal leading-normal uppercase`}
                >
                  University
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center justify-center gap-x-3 border-2 border-red-500 rounded-[20px] py-2 px-3">
                <div>
                  <img src={Images.USAflag} alt="" width={18} height={18} />
                </div>
                <div>
                  <img
                    src={isScrolled ? Images.arrowdownblue : Images.arrowdown}
                    width={isScrolled ? 14 : 18}
                    height={isScrolled ? 14 : 18}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="text-[#EF443B]"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } lg:hidden fixed inset-y-0 z-50 w-64 md:h-[50%] bg-[#160E33] shadow-lg transition-transform duration-300 transform`}
        id="mobile-menu"
      >
        <div className="pt-2 pl-2">
          <button
            onClick={toggleNavbar}
            type="button"
            className="text-[#EF443B]"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <svg
              className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-center pb-6 py-3">
          <a
            href="#home"
            className=" text-[#EF443B] text-center font-rubik font-bold text-2xl leading-normal"
          >
            Krypto
          </a>
        </div>
        <div className="p-4  space-y-7">
          <a
            href="#Howitworks"
            className="block text-white font-rubik text-base font-normal leading-normal uppercase"
          >
            How it works
          </a>
          <a
            href="#Cryptos"
            className="block text-white font-rubik text-base font-normal leading-normal uppercase"
          >
            Cryptos
          </a>
          <a
            href="#Features"
            className="block text-white font-rubik text-base font-normal leading-normal uppercase"
          >
            Features
          </a>
          <a
            href="#Testimonial"
            className="block text-white font-rubik text-base font-normal leading-normal uppercase"
          >
            Testimonial
          </a>
          <a
            href="#University"
            className="block text-white font-rubik text-base font-normal leading-normal uppercase"
          >
            University
          </a>
        </div>
        <div className="flex flex-col pl-4 gap-y-3 pt-12 ">
          <div>
            <h4 className="text-white font-rubik text-sm font-normal">
              Copyright @ 2022 xpence
            </h4>
          </div>
          <div className="flex items-center gap-x-3">
            <img src={Images.youtube} alt="" width={18} height={18} />
            <img src={Images.linkedin} alt="" width={18} height={18} />
            <img src={Images.facebook} alt="" width={18} height={18} />
            <img src={Images.bitcoin} alt="" width={18} height={18} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
