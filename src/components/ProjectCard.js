import Link from "next/link";
import React from "react";
import HiOutlineArrowTopRightOnSquare from "./icons/Arrow";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full">
      <div className="group flex flex-col w-full gap-4 px-3 py-3 bg-neutral-900 border border-neutral-700 hover:border-gray-700 hover:bg-[rgb(20,24,25,1)] rounded-lg">
        <Link
          className="flex items-center text-2xl text-neutral-400 group-hover:text-neutral-200"
          href={project.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {project.name}
          <HiOutlineArrowTopRightOnSquare className="inline ml-1 mb-1" />
        </Link>
        <span className="text-sm -mt-4 pl-0.5 text-neutral-400 ">
          {project.tools}
        </span>
        <span className="text-base text-neutral-400 group-hover:text-neutral-200">
          {project.description}
        </span>
        <span className="flex justify-around underline-offset-4 underline text-neutral-400 ">
          {project.repo.map((repo, index) => {
            return (
              <Link
                key={index}
                href={repo.link}
                rel="noopener norefferer"
                target="_blank"
                className="hover:text-neutral-200"
              >
                <HiOutlineArrowTopRightOnSquare className="inline mr-1 mb-0.5" />
                {repo.name}
              </Link>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
