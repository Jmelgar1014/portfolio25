import React from "react";
import { ProjectItem } from "../ProjectItem";
import ImageTest from "../../assets/test.png";

const Projects = () => {
  const projectItems = [
    {
      ImagePath: ImageTest,
      Title: "BudgetWise",
      Desc: "Spend Tracker that allows users to enter all of their spending with receipts and create budgets to help them view their spending habits",
      LiveLink: "https://budgetflow-nine.vercel.app/",
      GithubLink: "https://github.com/Jmelgar1014/budget-dash",
    },
    {
      ImagePath: ImageTest,
      Title: "JobTracker",
      Desc: "Tracker that allows users to enter all job information and able to update their application from applied to, interview, offer, or rejected.",
      LiveLink: "https://budgetflow-nine.vercel.app/",
      GithubLink: "https://github.com/Jmelgar1014/budget-dash",
    },
  ];
  return (
    <>
      <main className="px-32" id="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 my-8">
          <div>
            <h1 className="text-7xl text-white font-semibold ">
              Featured Projects
            </h1>
            <p className="text-lg text-slate-500 mt-4 font-semibold">
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
