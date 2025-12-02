import React from "react";
import { StackCards } from "../StackCards";

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
      <main className="grid grid-cols-1 lg:grid-cols-2 px-32 my-32" id="about">
        <div className="">
          <div className="">
            <h1 className="text-7xl font-semibold text-white mb-4">
              Technological Mastery
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center mx-10 sm:mx-2 ">
            {techStack.map((stack, index) => {
              return (
                <StackCards key={index} title={stack.Title} tech={stack.Tech} />
              );
            })}
          </div>
        </div>
        <div className="px-4">test image</div>
      </main>
    </>
  );
};

export default About;
