import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const BIO = [
  "Carl Frank studied computer science at the University of Technology,from which he graduated in 2010. Following his education, he honed his craft and expertise over the course of 10 years at Tech Innovations Inc., where he immersed himself in the world of frontend development.",
  "In 2021, driven by a shared vision for innovative web solutions and a passion for creating extraordinary user experiences Carl Frank co-founded WebArtistry alongside his creative partner, Jane Doe. Together, they set out to redefine frontend development, infusing their projects with creativity and cutting-edge technology.",
  "As a multi-disciplinary frontend developer, Carl Frank brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React and Vue.js, Carl Frank possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
];
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
      <span className="text-4xl text-red-600 lg:text-5xl">
        <DiRedis />
      </span>
    ),
    name: "Redis",
    experience: "1+ year",
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
    duration: "February 2016 - June 2020",
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

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
