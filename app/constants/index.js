import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiGraphql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript, SiGo } from "react-icons/si";
import { FaShieldAlt } from "react-icons/fa";

export const SKILLS = [
  {
    icon: (
      <span className="text-4xl text-cyan-400 lg:text-5xl">
        <RiReactjsLine />
      </span>
    ),
    name: "React",
    experience: "5+ years",
  },
  {
    icon: (
      <span className="text-4xl text-white lg:text-5xl">
        <TbBrandNextjs />
      </span>
    ),
    name: "Next.js",
    experience: "2+ year",
  },
  {
    icon: (
      <span className="text-4xl text-green-600 lg:text-5xl">
        <SiMongodb />
      </span>
    ),
    name: "MongoDB",
    experience: "3+ years",
  },

  {
    icon: (
      <span className="text-4xl text-green-600 lg:text-5xl">
        <FaNodeJs />
      </span>
    ),
    name: "Node.js",
    experience: "4+ years",
  },
  {
    icon: (
      <span className="text-4xl text-sky-700 lg:text-5xl">
        <BiLogoPostgresql />
      </span>
    ),
    name: "PostgreSQL",
    experience: "2.5+ year",
  },
  {
    icon: (
      <span className="text-4xl text-pink-500 lg:text-5xl">
        <SiGraphql />
      </span>
    ),
    name: "GraphQL",
    experience: "2+ years",
  },
  {
    icon: (
      <span className="text-4xl text-orange-600 lg:text-5xl">
        <FaGitAlt />
      </span>
    ),
    name: "Git",
    experience: "2+ years",
  },
  {
    icon: (
      <span className="text-4xl text-blue-400 lg:text-5xl">
        <SiTailwindcss />
      </span>
    ),
    name: "Tailwind CSS",
    experience: "1.5+ years",
  },
  {
    icon: (
      <span className="text-4xl text-blue-500 lg:text-5xl">
        <SiTypescript />
      </span>
    ),
    name: "TypeScript",
    experience: "1+ years",
  },
  {
    icon: (
      <span className="text-4xl text-red-600 lg:text-5xl">
        <FaShieldAlt />
      </span>
    ),
    name: "Web Security",
    experience: "2+ year",
  },
  {
    icon: <SiGo className="text-4xl text-cyan-500" />,
    name: "Golang",
    experience: "9 months",
  },
];

export const EXPERIENCES = [
  {
    title: "Full Stack Web Developer",
    company: "Humani Tech",
    duration: "July 2023 - May 2024",
    description:
      "Developed a supply trail system for the United Nations Food Program to track supplies and manage donations efficiently. GitHub - humanitech-net/supply-trail.",
  },
  {
    title: "Full Stack Engineer",
    company: "Imperial Produce",
    duration: "Jan, 2023 - July 2024",
    description:
      "Developed and maintained company websites and mobile apps using modern technologies, with a focus on secure coding practices. Integrated third-party APIs such as Google Maps for delivery tracking and Stripe for payment processing to enhance functionality.",
  },
  {
    title: "FreeLancer",
    company: "Worked in 10+ Freelance Projects",
    duration: "August 2023 - Present",
    description:
      "I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing Mern Stack to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
  {
    title: "Cyber Security Engineer",
    company: "Zergaw Cloud Service Provider",
    duration: "July 2024 - Present",
    description:
      "Implemented and managed security protocols, conducted vulnerability assessments, and led incident response to safeguard cloud infrastructure and customer data.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Electrical and Computer Engineering",
    institution: "Addis Ababa Institue of Technology, Addis Ababa",
    duration: "Oct 2019 - Jul 2024",
    description:
      " I gained deep expertise in software development, focusing on algorithms, data structures, full-stack development, and system design. I developed strong skills in problem-solving, software architecture, and cybersecurity, preparing me to build scalable and secure applications Graduated with a high GPA.",
  },
];
