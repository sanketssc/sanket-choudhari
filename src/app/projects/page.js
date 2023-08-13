import ProjectCard from "@/components/ProjectCard";
import React from "react";

export const metadata = {
  title: "Sanket Choudhari - Projects",
  description:
    "I am Sanket Choudhari, a full stack developer from India. I work in technologies like React, NextJS, NodeJS, ExpressJS, MongoDB, MySQL, TailwindCSS, etc.",
  openGraph: {
    title: "description",
    description:
      "I am Sanket Choudhari, a full stack developer from India. I work in technologies like React, NextJS, NodeJS, ExpressJS, MongoDB, MySQL, TailwindCSS, etc.",
  },
};

const projects = [
  {
    name: "Twitter Clone",
    description:
      "Created a clone of twitter app where user can login with Google account using next-auth and can perform activities like create, like, bookmark, comment and retweet",
    tools:
      "Next JS, Tailwind CSS, Prisma, JavaScript, NodeJS, MongoDB, Next-Auth",
    url: "https://twitter-clone-one-alpha.vercel.app/",
    repo: [
      {
        name: "Live",
        link: "https://twitter-clone-one-alpha.vercel.app/",
      },
      {
        name: "Github",
        link: "https://github.com/sanketssc/twitter-clone",
      },
    ],
  },
  {
    name: "Chat App",
    description:
      "Create a real-time chat app where users can create and join rooms to chat with othersin the room.",
    tools:
      "Next JS, Tailwind CSS, JavaScript, NodeJS, Express, Socket-io, http-server",
    url: "https://chat-app-rho-dusky.vercel.app/",
    repo: [
      {
        name: "Live",
        link: "https://chat-app-rho-dusky.vercel.app/",
      },
      {
        name: "Backend",
        link: "https://www.github.com/sanketssc/chat-backend",
      },
      {
        name: "Frontend",
        link: "https://www.github.com/sanketssc/chat-frontend",
      },
    ],
  },
  {
    name: "GranthAi",
    description:
      "Created a express middleware that generates API documentation on the go. Keeping the documentation up to date without developer need to worry about it",
    tools: "NodeJS, Express, JavaScript",
    url: "https://www.granthai.com/",
    repo: [
      {
        name: "HomePage",
        link: "https://www.granthai.com/",
      },
      {
        name: "Package",
        link: "https://www.npmjs.com/package/granthai",
      },
    ],
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col gap-4 w-full px-10 py-5">
      {projects.map((project, index) => {
        return <ProjectCard project={project} key={index} />;
      })}
    </div>
  );
};

export default Projects;
