import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo_me}
          alt=""
          className="w-36 mx-auto mb-2"
        />
      </div>
      <div className="w-max flex items-center gap-2 mx-auto">
        <Image
          src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
          alt=""
          className="w-6"
        />
        binaridissanayake@gmail.com
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; 2025 Binari Dissanayake. All rights reserved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/BinuMDX">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/BinuMDX">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/BinuMDX">
              Medium
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
