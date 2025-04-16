import Image from "next/image";
import Link from "next/link";
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiGit,
  SiGithub,
  SiCplusplus,
  SiMongodb,
  SiPython,
  SiRust,
  SiPrisma,
  SiTypescript,
  SiMongoose,
  SiSocketdotio,
} from "react-icons/si";

import Arrow from "@/components/icons/Arrow";

const skills = [
  {
    name: "NextJS",
    icon: <SiNextdotjs size={25} />,
  },
  {
    name: "ReactJS",
    icon: <FaReact size={25} />,
  },
  {
    name: "NodeJS",
    icon: <FaNodeJs size={25} />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma size={25} />,
  },
  {
    name: "ExpressJS",
    icon: <SiExpress size={25} />,
  },
  {
    name: "Socket.io",
    icon: <SiSocketdotio size={25} />,
  },

  {
    name: "HTML",
    icon: <FaHtml5 size={25} />,
  },
  {
    name: "CSS",
    icon: <FaCss3 size={25} />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={25} />,
  },
  {
    name: "MySQL",
    icon: <SiMysql size={25} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={25} />,
  },
  {
    name: "Mongoose",
    icon: <SiMongoose size={25} />,
  },
  {
    name: "Git",
    icon: <SiGit size={25} />,
  },
  {
    name: "Github",
    icon: <SiGithub size={25} />,
  },
  {
    name: "JavaScript",
    icon: <FaJs size={25} />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript size={25} />,
  },
  {
    name: "C++",
    icon: <SiCplusplus size={25} />,
  },
  {
    name: "Python",
    icon: <SiPython size={25} />,
  },
  {
    name: "Rust",
    icon: <SiRust size={25} />,
  },
];

export default async function Home() {
  return (
    <main className="text-center flex flex-col gap-4 pt-10 text-xl text-neutral-300 w-11/12">
      <h1 className="text-4xl ml-2 font-bold text-neutral-200">
        Hey, I am{" "}
        <Link href={"mailto:sanketchoudhari1999@gmail.com"}> Sanket </Link> 👋
      </h1>
      <div className="">A FullStack Developer</div>
      <div className="flex-col flex sm:flex-row gap-2 items-center justify-between text-neutral-500">
        <div className="flex items-center">
          Mail:
          <Link
            href={"mailto:sanketchoudhari1999@gmail.com"}
            className="underline underline-offset-4"
            target="_blank"
            rel="noreferrer noopener"
          >
            sanketchoudhari1999@gmail.com
          </Link>
        </div>
        <Link
          href={
            "https://drive.google.com/file/d/1ZT1QpSLLDOvtKLSIEpZ4tjenNVeN4dnn/view?usp=sharing"
          }
          className="flex items-center gap-1 underline underline-offset-4 "
          target="_blank"
          rel="noreferrer noopener"
        >
          My Resume
          <Arrow />
        </Link>
      </div>
      <div className="text-justify">
        I am a passionate developer who loves to build things. I am learning new
        things everyday. I have good knowledge of technologies like NextJs,
        ReactJs, TailwindCSS, NodeJS, HTML/CSS. I also have good knowedge of
        programming languages like C++, Javascript, Typescript, Python and some
        Rust. I am also well versed with Databases like MySQL and MongoDb.
        <br /> Please checkout my projects
        <Link
          className="underline text-neutral-50 underline-offset-2 font-semibold ml-2"
          href="/projects"
        >
          here
          <Arrow className="inline-block" />
        </Link>
        .
      </div>

      <div className="text-3xl mt-4">Skills</div>
      <div className="flex flex-wrap justify-center gap-3 px-2 mt-4">
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center gap-3 px-3 py-4 bg-neutral-900 border border-neutral-700 hover:border-blue-900 text-neutral-400 hover:text-neutral-50 hover:bg-gray-800 rounded-lg "
            >
              <div className="text-2xl">{skill.icon}</div>
              <div>{skill.name}</div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col mt-8">
        <span>
          For projects that are built with above technologies please visit
        </span>
        <Link className="underline text-neutral-50" href="/projects">
          Projects page
        </Link>
      </div>
      <div className="flex flex-col mt-8">
        <span>
          For Links to my social media and other profiles please visit
        </span>
        <Link className="underline text-neutral-50" href="/links">
          Links page
        </Link>
      </div>
    </main>
  );
}
