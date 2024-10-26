"use client";

import React from "react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

// Array of projects with types
const projects = [
  {
    id: 1,
    type: "Full Stack",
    title: "3D Solar System Planets to Explore",
    description:
      "Explore the wonders of our solar system with this captivating 3D simulation using Three.js.",
    image: "/p1.svg",
    techStack: [<FaReact />, <FaNodeJs />, <FaGithub />],
    liveLink: "#",
  },
  {
    id: 2,
    type: "Landing Pages",
    title: "Creative Portfolio Website",
    description: "A beautifully designed portfolio website for creatives.",
    image: "/p2.svg",
    techStack: [<FaReact />, <FaNodeJs />, <FaGithub />],
    liveLink: "#",
  },
  {
    id: 3,
    type: "Website with Animations",
    title: "Interactive Animation Showcase",
    description: "A modern website with smooth animations built with GSAP.",
    image: "/p3.svg",
    techStack: [<FaReact />, <FaNodeJs />, <FaGithub />],
    liveLink: "#",
  },
];

export default function RecentProjects() {
  // Group projects by type
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.type]) acc[project.type] = [];
    acc[project.type].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  return (
    <div className="relative p-8 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-b from-blue-500 to-blue-900 text-transparent bg-clip-text">
        Recent Projects
      </h2>

      {/* Render Grouped Projects with Spacing Between Categories */}
      <div className="space-y-20">
        {Object.entries(groupedProjects).map(([type, projects], index) => (
          <div key={index}>
            {/* Label Section */}
            <div
              className={`flex items-center mb-10 ${
                type === "Landing Pages" ? "justify-end" : "justify-start"
              }`}
            >
              {/* Circle + Fading Line Combination */}
              <div className="relative flex items-center">
                {type === "Landing Pages" && (
                  <>
                    <div className="w-[50vw] h-[1px] bg-gradient-to-l from-white to-transparent"></div>
                    <div className="w-2 h-2 rounded-full bg-white ml-2"></div>
                  </>
                )}
                {type !== "Landing Pages" && (
                  <>
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <div className="w-[50vw] h-[1px] bg-gradient-to-r from-white to-transparent ml-2"></div>
                  </>
                )}
              </div>
              <div className="ml-4 text-white text-lg font-medium">{type}</div>
            </div>

            {/* Project Cards */}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
                type === "Landing Pages"
                  ? "justify-items-end"
                  : "justify-items-start"
              }`}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="relative border border-white/30 rounded-lg overflow-hidden shadow-lg group bg-black/50"
                >
                  {/* Project Image */}
                  <div className="relative px-8 py-4 bg-gradient-to-b from-blue-900  mb-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-w-full max-h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 rounded-b-lg">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>

                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                      {/* Tech Stack Icons */}
                      <div className="flex space-x-4 text-2xl text-white">
                        {project.techStack.map((icon, index) => (
                          <span key={index}>{icon}</span>
                        ))}
                      </div>

                      {/* Live Site Button */}
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-400 hover:text-blue-500 font-medium"
                      >
                        Check Live Site <BsArrowRight className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
