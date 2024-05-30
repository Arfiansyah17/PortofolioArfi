import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="home">
      {/* Tambahkan tag video dan audio di sini */}
      <video autoPlay muted loop className="rotate-180 absolute top-[-360px]  h-full w-full left-0 z-[1] object-cover ">
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <audio autoPlay loop className="hidden">
        <source src="/Taylor.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Konten utama Hero */}
      <HeroContent />
    </div>
  );
};

export default Hero;
