import React from "react";
import { Button } from "./ui/button";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full relative p-10 lg:p-20 bg-white">
      {/* Newsletter Section */}
      <div className="flex flex-col xs:items-center lg:flex-row lg:justify-between items-center pb-8 lg:pb-12">
        <div className="text-center xs:text-center lg:text-left mb-8 lg:mb-0">
          <p className="font-roboto font-semibold text-[18px]">
            Subscribe to our newsletter
          </p>
          <p className="font-roboto font-normal text-[16px] text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col xs:items-center lg:flex-row items-center gap-4 w-full lg:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full xs:w-[300px] p-3 border border-black rounded-md focus:outline-none"
          />
          <Button className="bg-white text-black border border-black px-6 py-3 rounded-md h-[48px]">
            Subscribe
          </Button>
        </div>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-1 xs:items-center xs:text-center lg:grid-cols-4 gap-8 mt-8 lg:mt-12">
        {/* Logo Section */}
        <div className="">
          <div className="flex xs:justify-center lg:justify-start items-center">
            <Image src="/logo.svg" alt="logo" width={25} height={25} />
            <h3 className="font-bold text-[25px] font-inter ml-2">Ddsgnr</h3>
          </div>
        </div>

        {/* Courses Links */}
        <div className="font-roboto">
          <h4 className="font-semibold text-lg mb-4">Courses</h4>
          <ul className="space-y-2">
            <li>Business</li>
            <li>Development</li>
            <li>Technology</li>
            <li>Design</li>
            <li>Programming</li>
          </ul>
        </div>

        {/* Resources Links */}
        <div className="font-roboto">
          <h4 className="font-semibold text-lg mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>Career</li>
            <li>Resume</li>
            <li>Learning</li>
            <li>Interview Preparation</li>
            <li>Jobs</li>
          </ul>
        </div>

        {/* About Us Links */}
        <div className="font-roboto">
          <h4 className="font-semibold text-lg mb-4">About Us</h4>
          <ul className="space-y-2">
            <li>Contact</li>
            <li>Help/Support</li>
            <li>FAQ</li>
            <li>Terms and Conditions</li>
            <li>Partners</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col xs:items-center xs:text-center lg:flex-row lg:justify-between items-center border-t border-black mt-8 lg:mt-12 pt-6 text-sm text-gray-600">
        <div className="flex flex-col xs:items-center xs:gap-2 lg:flex-row lg:gap-4 font-roboto">
          <p className="font-normal text-[14px]">2023 Ddsgnr. All rights reserved.</p>
          <a href="#" className="font-normal text-[14px]">
            Privacy Policy
          </a>
          <a href="#" className="font-normal text-[14px]">
            Terms of Service
          </a>
          <a href="#" className="font-normal text-[14px]">
            Cookies Settings
          </a>
        </div>
        <div className="flex gap-4 mt-4 lg:mt-0 text-black">
          <FaFacebook className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaLinkedin className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;


