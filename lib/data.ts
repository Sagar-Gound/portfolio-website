import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import africasiaImg from "@/public/africasia.png";
import unity from "@/public/unity.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Engineering",
    location: "Ghansoli, Navi Mumbai, India",
    description:
      "I completed my Engineering in Computer Science. After a year I found A job as a Frontend developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Front-End Developer",
    location: "Vashi, Navi Mumbai, India",
    description:
      "I working as a front-end developer for a year now. I also learned new technologys like React and Next.js.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Africasia Seeds",
    description:
      "I worked as a Frontend developer on this project for 6 months. The website was about seeds. It has features like adding seeds, displaying seeds and information.",
    tags: ["Html", "Css", "JavaScript", "Bootstrap"],
    imageUrl: africasiaImg,
  },
  {
    title: "Unity Engineers",
    description:
      "E-commerce platform for selling the electic products. I was the Frontend developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "JavaScript", "Next.js", "React Bootstrap",],
    imageUrl: unity,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Bootstrap",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;