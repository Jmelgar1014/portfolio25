import React from "react";
import { ProjectItem } from "../ProjectItem";
import ImageTest from "../../assets/test.png";
import BudgetWise from "../../assets/BudgetWiseScreenshot.png";
import Landscape from "../../assets/MannysLawn Screenshot.png";
import JobTracker from "../../assets/JobTracker Screenshot.png";
import { Teachers } from "next/font/google";

const Projects = () => {
  const projectItems = [
    {
      ImagePath: BudgetWise,
      Title: "BudgetWise",
      Desc: "Spend Tracker that allows users to enter all of their spending with receipts and create budgets to help them view their spending habits",
      LiveLink: "https://budgetflow-nine.vercel.app/",
      GithubLink: "https://github.com/Jmelgar1014/budget-dash",
      Tech: [
        "NextJs",
        "Typescript",
        "Convex",
        "Upstash",
        "TanStack",
        "Clerk",
        "Zod",
      ],
    },
    {
      ImagePath: JobTracker,
      Title: "JobTracker",
      Desc: "Tracker that allows users to enter all job information and able to update their application from applied to, interview, offer, or rejected.",
      LiveLink: "https://budgetflow-nine.vercel.app/",
      GithubLink: "https://github.com/Jmelgar1014/budget-dash",
      Tech: ["ReactJs", "Javascript", "C#", "Supabase", "Tanstack"],
    },
    {
      ImagePath: Landscape,
      Title: "Local Business Website",
      Desc: "Build local business website for client to provide online presence.",
      LiveLink: "https://mannyslawnandlandscape.com/",
      GithubLink: "",
      Tech: ["NextJs", "Javascript", "Resend"],
    },
  ];
  return (
    <>
      <main className="sm:px-32" id="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 my-8">
          <div className="px-4">
            <h1 className="text-7xl text-white font-semibold text-center sm:text-left">
              Featured Projects
            </h1>
            <p className="text-lg text-slate-500 mt-4 font-semibold text-center sm:text-left">
              A selection of projects that demonstrate my passion for building
              complex, user-centric web applications.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {projectItems.map((project, index) => {
            return (
              <ProjectItem
                key={index}
                ImagePath={project.ImagePath}
                Title={project.Title}
                Description={project.Desc}
                LiveDemo={project.LiveLink}
                GithubLink={project.GithubLink}
                Tech={project.Tech}
              />
            );
          })}
          {/* <ProjectItem /> */}
        </div>
      </main>
    </>
  );
};

export default Projects;
