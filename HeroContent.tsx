"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  // Fungsi untuk men-download CV
  const downloadCV = () => {
    // Ganti URL dengan URL tempat CV Anda di-host
    const cvUrl = "https://drive.google.com/file/d/17eD0hMDDCkPz7rWVEXa-WpqRAMEw4aUR/view?usp=drive_link";
    // Buka link CV di tab baru
    window.open(cvUrl, "_blank");
  };

  // Fungsi untuk membuka Portfolio Creative
  const openPortfolioCreative = () => {
    // Ganti URL dengan URL tempat Portfolio Creative Anda di-host
    const portfolioUrl = "https://percasbakery.my.canva.site/arfiiansyaah";
    // Buka link Portfolio Creative di tab baru
    window.open(portfolioUrl, "_blank");
  };

  return (
    <motion.div initial="hidden" animate="visible" className="flex flex-row items-center justify-center px-20 mt-28 mr-20 w-full z-[30]">
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div variants={slideInFromTop} className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Junior Web Programming</h1>
        </motion.div>

        <motion.div variants={slideInFromLeft(0.5)} className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
          <span>
            Hello, Welcome To
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Rifki Arfiansyah Shalahan </span>
            Portfolio
          </span>
        </motion.div>

        <motion.p variants={slideInFromLeft(0.8)} className="text-lg text-gray-400 my-5 max-w-[600px]">
          I am a student at the UPNVJ, passionate about information technology, business leadership, and marketing. With a background in <b>Information Systems.</b>
        </motion.p>

        <motion.div variants={slideInFromLeft(1)} className="flex gap-4">
          <button onClick={downloadCV} className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[200px]">
            My CV
          </button>
          <button onClick={openPortfolioCreative} className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[200px]">
            Portfolio Creative
          </button>
        </motion.div>
      </div>

      <motion.div variants={slideInFromRight(0.8)} className="w-full h-full flex justify-center items-center">
        <Image src="/RAS.png" alt="work icons" height={600} width={600} />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
