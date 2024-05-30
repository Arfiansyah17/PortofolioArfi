"use client";
import React, { useState, useEffect } from "react";

// Interface for TypingEffectProps
interface TypingEffectProps {
  text: string;
}

// TypingEffect component
const TypingEffect: React.FC<TypingEffectProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.substring(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, [currentIndex, text]);

  return <span>{displayedText}</span>;
};

// ExperienceItem component
interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  isLeft: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, period, description, isLeft }) => {
  return (
    <div className={`flex ${isLeft ? "justify-end" : "justify-start"} w-full mb-8`}>
      <div className={`w-[45%] p-4 bg-gray-800 rounded-lg shadow-md text-center ${isLeft ? "mr-8" : "ml-8"}`}>
        <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{title}</h3>
        <p className="text-md text-gray-400">
          {company} | {period}
        </p>
        <p className="text-white mt-2">{description}</p>
      </div>
    </div>
  );
};

// About component
const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-5 mt-[-100px] mb-[-70px]" id="about">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-17 mt-[80px]">About Me</h1>
      <img src="/KIMAMA.png" alt="Your Photo" className="rounded-full w-60 h-60 md:ml-10 mr-10 mb-10 mt-[15px]" />
      <div className="h-full w-full px-10 flex flex-col md:flex-row items-center justify-center mb-10">
        <div className="flex flex-col">
          <p className="text-lg mb-5 mt-5 text-white text-[25px] text-justify mr-10 ml-10">
            <TypingEffect text="Hello everyone, my name is Rifki Arfiansyah Shalahan or you can call me Arfi. I am a UPNVJ student who has a leadership spirit and never gives up. I have great enthusiasm for the Information Systems Major, because I know that in my major I will not only focus on being a programmer but also doing business, therefore I want to become a technopreneur. Not just a technopreneur, I also act as a Web Programmer, UI/UX designer, and graphic designer, I have quite mastered several tools such as VSCode, Figma, Canva, Adobe Illustrator. Now I have the opportunity to realize my desire as a technopreneur, I am the CEO of Nirmala Technology, which is a company in the technology sector, especially one that sells website creation services." />
          </p>
        </div>
      </div>
      <div className="w-full px-10 mt-10">
        <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5 text-center">Experience</h2>
        <div className="relative">
          <div className="border-r-2 border-gray-400 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
          <div className="mt-10">
            <ExperienceItem
              title="CEO"
              company="Nirmala Technology"
              period="September 2023 - Present"
              description="This is where I started my business, Nirmala Technology or abbreviated as Nirmatech which operates in the technology sector, especially website creation, let's discuss everything from the start."
              isLeft={true}
            />
            <ExperienceItem
              title="UI/UX Designer"
              company="Nirmala Technology"
              period="September 2023 - Present"
              description="Designed user interfaces and experiences for various clients using Figma and Adobe Illustrator."
              isLeft={false}
            />
            <ExperienceItem title="Head Of Division Media Creative " company="BEM UPNVJ" period="December 2023-March 2024" description="Developed websites for work program BEM UPNVJ " isLeft={true} />

            <ExperienceItem title="Graphic Designer" company="Freelance" period="May 2024" description="Created visual content for social media, marketing materials, and websites using Adobe Illustrator and Canva." isLeft={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
