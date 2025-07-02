import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white border-t-15 border-blue-700 ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://www.lejhro.com/innovations">Innovations</a>
            </li>
            <li>
              <a href="https://www.lejhro.com/business-services">
                Business Services
              </a>
            </li>
            <li>
              <a
                href="https://www.lejhro.com/financial-services"
                target="_blank"
              >
                Financial Services
              </a>
            </li>
            <li>
              <a href="https://www.recruit.lejhro.com/">Lejhro Recruiter</a>
            </li>
            <li>
              <a href="https://www.lejhro.com/about">About</a>
            </li>
            <li>
              <a href="https://www.lejhro.com/blogs">Blogs</a>
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="font-bold mb-4">Programs</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://www.bootcamp.lejhro.com/" target="_blank">
                Lejhro Bootcamp
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://www.lejhro.com/contact-us">Contact</a>
            </li>
            <li>
              <a href="https://www.lejhro.com/terms-of-use">Terms of Use</a>
            </li>
            <li>
              <a href="https://www.lejhro.com/privacy-statement">
                Privacy Statement
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-bold mb-4">Connect with us</h3>
          <div className="flex space-x-4 mt-2">
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
      </div>

      <div className="text-center py-6 text-sm text-gray-600">
        © 2025 LEJHRO. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
