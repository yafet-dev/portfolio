"use client";

import React from "react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiFramer,
  SiCss3,
  SiGooglemaps,
  SiFirebase,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

// Array of projects
const projects = [
  {
    id: 1,
    title: "Imperial Produce",
    description:
      "Built a platform for customers to order, track deliveries, and pay securely, while the company manages sales and tracks orders efficiently.",
    image: "/p1.png",
    techStack: [
      <SiMongodb className="text-4xl text-green-600" />,
      <SiExpress className="text-4xl text-gray-500" />,
      <FaNodeJs className="text-4xl text-green-600" />,
      <SiTailwindcss className="text-4xl text-blue-400" />,
      <FaReact className="text-4xl text-cyan-400" />,
    ],
    liveLink: "https://www.imperialproduce.us",
  },
  {
    id: 2,
    title: "Brain Wave",
    description:
      "Developed Brain Wave, a website featuring a beautiful UI, parallax effects, and eye-catching components for an engaging user experience.",
    image: "/p2.png",
    techStack: [
      <SiFramer className="text-4xl text-pink-500" />,
      <FaReact className="text-4xl text-cyan-400" />,
      <SiTailwindcss className="text-4xl text-blue-400" />,
    ],
    liveLink: "https://brainwave-sigma-three.vercel.app/",
  },
  {
    id: 3,
    title: "Virtual-Reality",
    description:
      "Created Virtual-R, a simple and clean landing page designed for Tailwind CSS training.",
    image: "/p4.png",
    techStack: [
      <FaReact className="text-4xl text-cyan-400" />,
      <SiTailwindcss className="text-4xl text-blue-400" />,
    ],
    liveLink: "https://virtual-reality-gray.vercel.app/",
  },
  {
    id: 4,
    title: "Web Weave",
    description:
      "A landing page for a software company that develops software solutions.",
    image: "/p3.png",
    techStack: [
      <SiFramer className="text-4xl text-pink-500" />,
      <TbBrandNextjs className="text-4xl text-white" />,
      <SiTailwindcss className="text-4xl text-blue-400" />,
    ],
    liveLink: "https://startup-mu-five.vercel.app/",
  },
  {
    id: 5,
    title: "World Tour",
    description:
      "World tour website keeps track of users' adventures. A world map that tracks users' footsteps into every city they can think of.",
    image: "/p5.png",
    techStack: [
      <FaReact className="text-4xl text-cyan-400" />,
      <SiCss3 className="text-4xl text-blue-500" />,
      <SiGooglemaps className="text-4xl text-red-500" />,
    ],
    liveLink: "https://world-tour-chi.vercel.app/",
  },
  {
    id: 6,
    title: "The Wild Oasis",
    description:
      "The Wild Oasis website is a hotel management platform that helps employers manage bookings, customers, and cabins.",
    image: "/p6.png",
    techStack: [
      <FaReact className="text-4xl text-cyan-400" />,
      <SiFirebase className="text-4xl text-yellow-500" />,
      <SiTailwindcss className="text-4xl text-blue-400" />,
    ],
    liveLink: "https://the-wild-oasis-4kd3.vercel.app/",
  },
];

export default function RecentProjects() {
  return (
    <div className="relative p-8 min-h-screen" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-b from-blue-500 to-blue-900 text-transparent bg-clip-text">
        Recent Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative border border-white/30 rounded-lg overflow-hidden shadow-lg group bg-black/50 transition-all duration-300 hover:shadow-[0_-10px_20px_rgba(59,130,246,0.8)]"
          >
            {/* Project Image */}
            <div className="relative px-8 py-4 bg-gradient-to-b from-blue-900 mb-2">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="object-cover"
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

              {/* Tech Stack and Live Link */}
              <div className="flex flex-col gap-4 justify-between mb-4 space-y-4 md:space-y-0">
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
  );
}
