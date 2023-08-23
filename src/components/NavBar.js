"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": {
    name: "Home",
  },
  "/projects": {
    name: "Projects",
  },
  "/links": {
    name: "Links",
  },
  "/contact": {
    name: "Contact",
  },
};
const NavBar = () => {
  const pathname = usePathname() || "/";

  return (
    <nav className="flex items-center justify-center w-full gap-10 flex-wrap px-4 py-4">
      {Object.entries(navItems).map(([path, { name }]) => {
        const isActive = pathname === path;
        return (
          <Link
            key={path}
            href={path}
            className={"" + (!isActive ? "text-neutral-500" : "")}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
