"use client";
import React from "react";
import { StackCards } from "../StackCards";
import { motion } from "motion/react";
import IconContainer from "../IconContainer";
import { iconList } from "../icons/iconList";

const About = () => {
  const techStack = [
    {
      Title: "Frontend",
      Tech: "NextJs,ReactJs,Tailwind CSS",
    },
    {
      Title: "Backend",
      Tech: "NextJs, Convex, ASP.Net Core, Supabase,Upstash",
    },
    { Title: "Cloud", Tech: "AWS, Vercel, Netlify, Fly.io" },
  ];
  return (
    <>
      <main
        className="grid grid-cols-1 lg:grid-cols-2 sm:px-32 my-32"
        id="about"
      >
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h1 className="text-4xl font-semibold text-white mb-4 text-center sm:text-left sm:text-7xl">
              Technical Skills
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center mx-10 sm:mx-2 ">
              {techStack.map((stack, index) => {
                return (
                  <StackCards
                    key={index}
                    title={stack.Title}
                    tech={stack.Tech}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
        <div className="px-4">
          <div className="grid grid-cols-5 place-content-center h-full w-full">
            {iconList.map((icon, index) => {
              return <IconContainer key={index} Icon={icon.IconName} />;
            })}
          </div>
        </div>
        {/* <div className="px-4">test image</div> */}
      </main>
    </>
  );
};

export default About;
