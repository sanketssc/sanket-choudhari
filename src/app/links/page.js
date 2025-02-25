import Link from "next/link";
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaDiscord,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { PiCubeTransparentBold } from "react-icons/pi";

export const metadata = {
  title: "Sanket Choudhari - Links",
  description:
    "I am Sanket Choudhari, a full stack developer from India. I work in technologies like React, NextJS, NodeJS, ExpressJS, MongoDB, MySQL, TailwindCSS, etc.",
  openGraph: {
    url: "https://sanket-choudhari.vercel.app/links",
    title: "Sanket Choudhari - Links",
    description:
      "I am Sanket Choudhari, a full stack developer from India. I work in technologies like React, NextJS, NodeJS, ExpressJS, MongoDB, MySQL, TailwindCSS, etc.",
    site_name: "Sanket Choudhari - Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    title: "Sanket Choudhari - Links",
    site: "https://sanket-choudhari.vercel.app/links",
    cardType: "summary_large_image",
    type: "website",
    locale: "en_US",
  },
};

const links = [
  {
    name: "GitHub",
    url: "https://github.com/sanketssc",
    icon: <FaGithubSquare size={25} />,
    username: "sanketssc",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sanket-choudhari/",
    icon: <FaLinkedin size={25} />,
    username: "sanket-choudhari",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/sanketssc",
    icon: <FaTwitterSquare size={25} />,
    username: "sanketssc",
  },
  {
    name: "Discord",
    url: "https://discordapp.com/users/381798111586156545",
    icon: <FaDiscord size={25} />,
    username: "invok3r",
  },
  {
    name: "Leetcode",
    url: "https://leetcode.com/sanketssc/",
    icon: <SiLeetcode size={25} />,
    username: "sanketssc",
  },
  {
    name: "Scaler",
    url: "https://www.scaler.com/academy/profile/2600d5a7c591/",
    icon: <PiCubeTransparentBold transform="rotate(90)" size={25} />,
    username: "Sanket",
  },
  {
    name: "Mail",
    url: "mailto:sanketchoudhari1999@gmail.com",
    icon: <AiOutlineMail size={25} />,
    username: "sanketchoudhari1999",
  },
];

export const revalidate = 0;
const Links = async () => {
  // const getDiscordStatus = async () => {
  //   const discord = await fetch(
  //     "https://api.lanyard.rest/v1/users/381798111586156545"
  //   );
  //   const data = await discord.json();
  //   return data.data;
  // };
  // const data = await getDiscordStatus();

  return (
    <div className="flex flex-col gap-5 w-full px-10 py-5">
      {links.map((link, index) => {
        return (
          <Link
            className={
              "flex w-full justify-between gap-1 px-3 py-3 bg-neutral-900 border border-neutral-700 hover:border-blue-900 text-neutral-400 hover:text-neutral-50 hover:bg-gray-800 rounded-lg "
            }
            key={index}
            href={link.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="flex items-center">{link.icon}</span>
            <span className="basis-1/3 sm:ml-28 text-center">
              {link.name}{" "}
              {/*link.name === "Discord"
                ? data.discord_status === "online"
                  ? "- online"
                  : "- offline"
                : ""*/}
            </span>
            <span className="basis-1/3 text-xs sm:text-base sm:basis-1/4 text-right">
              {link.username}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Links;
