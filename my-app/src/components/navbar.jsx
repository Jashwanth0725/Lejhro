import React, { useState, useEffect } from "react";
import {
  FaTimes,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`p-6 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 right-0 z-50 bg-yellow-600 shadow-lg"
            : "bg-yellow-600"
        }`}
      >
        {/* Logo */}
        <a
          href="https://www.lejhro.com/"
          className="flex items-center space-x-2 text-white text-3xl font-bold"
        >
          <img
            src="https://res.cloudinary.com/dr1ktryw0/image/upload/v1751453843/logo_kcrxmy.png"
            alt="LEJHRO Logo"
            className="w-60 h-10"
          />
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 text-white text-lg">
          <a href="https://www.lejhro.com/innovations">Innovations</a>
          <a href="https://www.lejhro.com/business-services">
            Business Services
          </a>
          <a href="https://www.lejhro.com/financial-services">
            Financial Services
          </a>
          <a href="https://www.bootcamp.lejhro.com/" target="_blank">
            Bootcamp
          </a>
        </div>

        {/* Toggle Button for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 rounded-full bg-white flex items-center justify-center"
        >
          <div className="space-y-1">
            <div className="w-5 h-0.5 bg-orange-600"></div>
            <div className="w-5 h-0.5 bg-orange-600"></div>
          </div>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <div className="text-2xl font-bold text-blue-600">✈ LEJHRO</div>
          <button onClick={() => setIsOpen(false)}>
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col p-6 space-y-4 text-lg font-semibold">
          <a href="https://www.lejhro.com/innovations">Innovations</a>
          <a href="https://www.bootcamp.lejhro.com/" target="_blank">
            Bootcamp
          </a>
          <a href="https://www.lejhro.com/business-services">
            Business Services
          </a>
          <a href="https://www.lejhro.com/financial-services">
            Financial Services
          </a>
          <a href="https://www.lejhro.com/about">About</a>
          <a href="https://www.lejhro.com/contact-us">Contact Us</a>
          <a href="https://www.lejhro.com/blogs">Blogs</a>
        </div>
        <div className="flex space-x-4 p-6 mt-auto">
          <a href="https://twitter.com/lejhro" target="_blank">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="https://www.facebook.com/lejhro" target="_blank">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/company/lejhro" target="_blank">
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCN_okXQlwY7e26UJ8tJtCQQ"
            target="_blank"
          >
            <FaYoutube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
