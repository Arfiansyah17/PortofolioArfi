import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#home" className="h-auto w-auto flex flex-row items-center">
          <Image src="/LOGORAS.webp" alt="logo" width={70} height={70} className="cursor-pointer hover:animate-slowspin" />
        </a>

        <div className="w-[460px] h-full flex flex-row items-center justify-between md:mr-[-40px]">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#home" className="cursor-pointer hover:text-blue-500">
              Home
            </a>
            <a href="#about" className="cursor-pointer hover:text-blue-500">
              About
            </a>
            <a href="#skills" className="cursor-pointer hover:text-blue-500">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:text-blue-500">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
              <div className="social-icon hover:text-blue-900">
                <Image src={social.src} alt={social.name} width={29} height={29} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
