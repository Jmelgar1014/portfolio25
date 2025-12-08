import React from "react";
import Image, { StaticImageData } from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import GithubIcon from "./icons/GithubIcon";
import CustomBage from "./CustomBage";
import { motion } from "motion/react";

interface projectDetails {
  ImagePath: StaticImageData;
  Title: string;
  Description: string;
  LiveDemo: string;
  GithubLink: string;
  Tech: string[];
}

export const ProjectItem = ({
  ImagePath,
  Title,
  Description,
  LiveDemo,
  GithubLink,
  Tech,
}: projectDetails) => {
  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="border border-white/5 sm:min-h-[600px] bg-slate-800/20 rounded-2xl m-8 ">
          <div className="flex flex-col h-full">
            <div className="text-white h-[300px] w-full overflow-hidden rounded-t-2xl">
              <div className="h-full w-full hover:scale-125 transition-transform duration-300 rounded-t-2xl cursor-pointer">
                <Image
                  className="h-full w-full object-cover"
                  src={ImagePath}
                  width={500}
                  height={250}
                  alt={Title}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="text-white flex-1 w-full px-8 py-4">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <h1 className="text-4xl text-white font-semibold mb-4">
                  {Title}
                </h1>
                <div className="flex items-center justify-center">
                  <Link
                    href={LiveDemo}
                    target="_blank"
                    className="p-2 hover:bg-white/10 hover:rounded-lg"
                  >
                    <ExternalLink size={20} className="" />
                  </Link>
                  {GithubLink && (
                    <Link
                      href={GithubLink}
                      target="_blank"
                      className="hover:bg-white/10 p-2 hover:rounded-2xl"
                    >
                      <GithubIcon size={20} />
                    </Link>
                  )}
                </div>
              </div>
              <p className="text-slate-500 font-medium">{Description}</p>
              <div className="my-4">
                {Tech.map((item, index) => {
                  return <CustomBage key={index} tech={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
