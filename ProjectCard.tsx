import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]" style={{ height: "400px" }}>
      <a href={link}>
        <div style={{ height: "60%", position: "relative" }}>
          <Image src={src} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
        </div>
        <div className="relative p-4" style={{ height: "40%" }}>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
