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
        className="grid grid-cols-1 lg:grid-cols-2 sm:px-32 mb-64 mt-auto "
        id="about"
      >
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <h1 className="text-4xl font-semibold text-white mb-4 text-center sm:text-left sm:text-7xl">
              Technical Skills
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="grid grid-cols-1 xl:grid-cols-2 place-items-center mx-10 sm:mx-2 ">
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
        <div className="px-4 mx-4 ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-3 place-items-center w-full sm:grid-cols-4 h-full gap-y-7"
          >
            {iconList.map((icon, index) => {
              return <IconContainer key={index} Icon={icon.IconName} />;
            })}
          </motion.div>
        </div>
        {/* <div className="px-4">test image</div> */}
      </main>
    </>
  );
};

export default About;
