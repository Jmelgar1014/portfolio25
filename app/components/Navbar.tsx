import { CircleUser, FolderGit, House } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className=" fixed top-0 left-0 flex justify-center px-4 z-50 w-full">
        <nav className=" bg-slate-300/5 backdrop-blur-md border border-white/5 rounded-3xl sm:w-96  w-full my-4 shadow-lg sm:h-12 flex items-center justify-center">
          <ul className="flex flex-col sm:flex-row sm:justify-center">
            <li className="m-2  hover:border-white/25 rounded-xl px-4 py-1 hover:bg-slate-200/15 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <Link href="/" className="flex text-white">
                <div className="flex items-center mr-2">
                  <House size={16} />
                </div>
                Home
              </Link>
            </li>
            <li className="m-2  hover:border-white/25 rounded-xl px-4 py-1 hover:bg-slate-200/15 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <Link href="#about" className="flex text-white">
                <div className="flex items-center mr-2">
                  <CircleUser size={16} />
                </div>
                About
              </Link>
            </li>
            <li className="m-2  hover:border-white/25 rounded-xl px-4 py-1 hover:bg-slate-200/15 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <Link href="#Projects" className="flex text-white">
                <div className="flex items-center mr-2">
                  <FolderGit size={16} />
                </div>
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
