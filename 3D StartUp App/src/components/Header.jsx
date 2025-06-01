import React from "react";
import 'boxicons/css/boxicons.min.css'

export default function Header() {
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById("mobile-menu");

        if (mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.remove("hidden");
        } else {
            mobileMenu.classList.add("hidden");
        }
    }
  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className="text-3xl md:text-4xl lg:text-5xl font-light m-0">MCODE</h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-12">
        <a
          href="#"
          data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
        >
          COMPANY
        </a>

        <a
          href="#"
          data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
        >
          FEATURES
        </a>

        <a
          href="#"
          data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
        >
          RESOURCES
        </a>

        <a
          href="#"
          data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
        >
          DOCS
        </a>
      </nav>

      <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
        SIGNIN
      </button>


      {/* Mobile Navigation */}

      <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
        <i className='bx bx-menu text-3xl'></i>
      </button>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md">
        <nav className="flex flex-col gap-6 items-center">
             <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
        >
          COMPANY
        </a>

        <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
        >
          FEATURES
        </a>

        <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
        >
          RESOURCES
        </a>

        <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
        >
          DOCS
        </a>
        </nav>
      </div>
    </header>
  );
}
