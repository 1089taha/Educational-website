"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:flex w-full h-14 items-center justify-between px-4 md:px-16 border-b border-black">
        <div className="flex items-center gap-4">
          <span className="text-sm font-roboto">
            Phone Number: 956 742 455 678
          </span>
          <div className="h-6 w-px bg-gray-400"></div>
          <span className="text-sm font-roboto">Email: info@ddsgnr.com</span>
        </div>
        <div className="flex items-center gap-3 text-black">
          <FaFacebook className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaLinkedin className="cursor-pointer" />
        </div>
      </div>

      {/* Navbar */}
      <div className="w-full h-[72px] flex items-center justify-between px-4 md:px-16 border-b border-[#676767]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="logo"
            width={32}
            height={30}
            className="h-auto"
          />
          <h2 className="text-xl md:text-2xl font-bold font-inter">Ddsgnr</h2>
        </div>

        {/* Desktop & Tablet Links */}
        <div className="hidden xl:flex items-center gap-6 xl:gap-10">
          <Link href="/" className="py-2 px-4 relative hover:text-black">
            Home
          </Link>
          <Link href="/" className="py-2 px-4 relative hover:text-black">
            Courses
          </Link>
          <Link href="/" className="py-2 px-4 relative hover:text-black">
            Services
          </Link>
          <Link href="/" className="py-2 px-4 relative hover:text-black">
            Achievement
          </Link>
          <Link href="/" className="py-2 px-4 relative hover:text-black">
            About Us
          </Link>
          <Link href="/" className="py-2 px-4 relative hover:text-black">
            Testimonial
          </Link>
        </div>

        {/* Tablet & Mobile Menu Icon */}
        <div className="flex xl:hidden">
          {isMenuOpen ? (
            <HiX
              className="w-8 h-8 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <HiOutlineMenu
              className="w-8 h-8 cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>

        {/* Buttons (Desktop & Tablet) */}
        <div className="hidden xl:flex gap-4">
          <Button className="px-6 py-2 border border-black rounded-md text-black bg-white">
            Login
          </Button>
          <Button className="px-6 py-2 bg-black text-white border border-black rounded-md ">
            Sign Up
          </Button>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      {isMenuOpen && (
        <div className="xl:hidden flex flex-col items-center bg-white border-b border-[#676767]">
          <Link href="/" className="py-2 px-4 hover:text-black">
            Home
          </Link>
          <Link href="/" className="py-2 px-4 hover:text-black">
            Courses
          </Link>
          <Link href="/" className="py-2 px-4 hover:text-black">
            Services
          </Link>
          <Link href="/" className="py-2 px-4 hover:text-black">
            Achievement
          </Link>
          <Link href="/" className="py-2 px-4 hover:text-black">
            About Us
          </Link>
          <Link href="/" className="py-2 px-4 hover:text-black">
            Testimonial
          </Link>
          <div className="flex flex-col gap-2 mt-4">
            <Button className="px-6 py-2 border border-black rounded-md hover:bg-gray-100">
              Login
            </Button>
            <Button className="px-6 py-2 bg-black text-white border border-black rounded-md hover:bg-gray-900">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

