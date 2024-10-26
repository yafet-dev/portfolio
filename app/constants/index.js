import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiGraphql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaShieldAlt } from "react-icons/fa";

export const SKILLS = [
  {
    icon: (
      <span className="text-4xl text-cyan-400 lg:text-5xl">
        <RiReactjsLine />
      </span>
    ),
    name: "React",
    experience: "2+ years",
  },
  {
    icon: (
      <span className="text-4xl text-white lg:text-5xl">
        <TbBrandNextjs />
      </span>
    ),
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: (
      <span className="text-4xl text-green-600 lg:text-5xl">
        <SiMongodb />
      </span>
    ),
    name: "MongoDB",
    experience: "1.5+ years",
  },

  {
    icon: (
      <span className="text-4xl text-green-600 lg:text-5xl">
        <FaNodeJs />
      </span>
    ),
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: (
      <span className="text-4xl text-sky-700 lg:text-5xl">
        <BiLogoPostgresql />
      </span>
    ),
    name: "PostgreSQL",
    experience: "1+ year",
  },
  {
    icon: (
      <span className="text-4xl text-pink-500 lg:text-5xl">
        <SiGraphql />
      </span>
    ),
    name: "GraphQL",
    experience: "1+ years",
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
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Cyber Security Engineer",
    company: "Zergaw Cloud Service Provider",
    duration: "July 2020 - Present",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Full Stack Engineer",
    company: "Imperial Produce",
    duration: "Jan, 2023 - July 2024",
    description:
      "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "FreeLancer",
    company: "Worked in 12+ Freelance Projects",
    duration: "August 2023 - Present",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
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
