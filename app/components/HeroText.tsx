import { Button } from "@/components/ui/button";
import React from "react";

const HeroText = () => {
  return (
    <>
      <main className="mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-semibold text-7xl text-white">Building the</h1>
          <br />
          <h1 className="font-semibold text-7xl bg-gradient-to-br from-violet-600 to-blue-500 bg-clip-text text-transparent h-24">
            Digital Future
          </h1>
        </div>
        <div>
          <p className="font-semibold text-slate-400">
            I&apos;m Jose, a Frontend Engineer building user friendly
            applications with NextJs, Typescript, and Tailwind.{" "}
          </p>
        </div>
        <div className="flex justify-center my-4">
          <Button className="cursor-pointer text-black bg-white rounded-2xl hover:-translate-y-1 font-semibold hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
            View my Work
          </Button>
          <Button className="cursor-pointer text-white bg-slate-800/40 border border-white/5 ml-4 rounded-2xl hover:bg-slate-800/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:border hover:border-white/30 hover:-translate-y-1">
            Contact Me
          </Button>
        </div>
      </main>
    </>
  );
};

export default HeroText;
