"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center mt-20">
      <motion.div variants={slideInFromTop} className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-9 w-9" />
        <h1 className="Welcome-text text-[20px]">My Skills</h1>
      </motion.div>
      <motion.div variants={slideInFromLeft(2)} className="text-[25px] text-white font-medium mt-[90px] text-center mb-[15px]">
        Skilled in full-stack web development with expertise in HTML, CSS, JavaScript, React, and Node.js. Able to create user-friendly web applications
      </motion.div>
      <motion.div variants={slideInFromRight(0.8)} className="cursive text-[30px] text-gray-200 mb-10 mt-[20px] text-center">
        Work Hard, Lead Harder
      </motion.div>
    </div>
  );
};

export default SkillText;
