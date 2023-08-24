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
} from "react-icons/si";
import va from "@vercel/analytics";

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
  va.track("home");

  return (
    <main className="text-center flex flex-col gap-4 pt-10 text-xl text-neutral-300">
      <h1 className="text-4xl ml-2 font-bold text-neutral-200">
        Hey, I am{" "}
        <Link href={"mailto:sanketchoudhari1999@gmail.com"}> Sanket </Link> 👋
      </h1>
      <div className="">A FullStack Developer</div>
      <div className="text-justify">
        I am a passionate developer who loves to build things. I am learning new
        things everyday. I am a self taught developer. Please checkout my
        projects{" "}
        <Link
          className="underline text-neutral-50 font-semibold"
          href="/projects"
        >
          here
        </Link>
        .
      </div>

      <div className="text-3xl mt-4">Skills</div>
      <div className="flex flex-wrap justify-center gap-3 px-4 mt-4">
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
          For projects that are built with above technolofies please visit
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
