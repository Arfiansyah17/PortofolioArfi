import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const projectData = [
    {
      src: "/nirma.png",
      title: "Website Nirmala Technology",
      description: "The company profile website that I created for my company Nirmala Technology.",
      link: "https://nirmatech.id/",
    },
    {
      src: "/Qtin.png",
      title: "Website Canteen UPNVJ",
      description: "Q-Tin is short for QR Canteen, a website offering canteen menus. I created this innovative solution to provide easy access to menus amidst busy times.",
      link: "https://q-tin.com/",
    },
    {
      src: "/BEM.png",
      title: "Website BEM UPNVJ",
      description: "The first project from Nirmatech was the company profile website from bem upnvj and we had the opportunity to create it, which is currently in the process of being created.",
      link: "https://www.figma.com/design/epguq9cNN6PbD0DwgEtVLg/Project--UI%2FUX-UPNVJ?node-id=0-1&t=hXynHnYmKO4CyDq3-1",
    },
    {
      src: "/P3M.png",
      title: "Website P3M",
      description: "The second project I created was a standby website for P3M, protection for the empowerment of female students, which is currently in the process of being created.",
      link: "https://www.figma.com/design/epguq9cNN6PbD0DwgEtVLg/Project--UI%2FUX-UPNVJ?node-id=35-2&t=hXynHnYmKO4CyDq3-1",
    },
    {
      src: "/Porto.png",
      title: "Website Portfolio",
      description: "This project was the best because I strive for totality in my website portfolio.",
      link: "https://www.myportfolio.com",
    },
    {
      src: "/Arfi.png",
      title: "RAS",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "https://percasbakery.my.canva.site/arfiiansyaah",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-5 mt-[-50px] mb-[50px] z-40" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 -z-40">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        {projectData.map((project, index) => (
          <div className="flex-1" key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
