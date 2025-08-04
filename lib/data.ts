import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import africasiaImg from "@/public/africasia.png";
import unity from "@/public/unity.png";
import besocial from "@/public/besocial.png";

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
      "I working as a front-end developer for 2 years now. I also learned new technologys like React.js and Next.js.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "BeSocial",
    description:
      "I built a MERN stack project with a social media-like UI, enabling users to perform CRUD operations on users and posts, follow/unfollow users, and connect frontend with backend via a server.",
    tags: ["React.js", "MongoDB", "Node.js", "Express.js"],
    imageUrl: besocial,
  },
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
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "JavaScript",
  "Redux Toolkit",
  "Express",
  "HTML",
  "CSS",
  "Bootstrap 5",
  "Framer Motion",
  "GSAP",
  "TypeScript",
  "Git",
  "GitHub",
] as const;