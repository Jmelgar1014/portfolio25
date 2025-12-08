import React from "react";

interface propData {
  title: string;
  tech: string;
}

export const StackCards = ({ title, tech }: propData) => {
  return (
    <>
      <div className="relative w-full bg-slate-800/20 border border-white/15 rounded-xl p-4 mx-4 my-8 sm:my-4 md:w-84 lg:w-64 shadow-[0_0_30px_rgba(147,51,234,0.4)]">
        <h3 className="text-blue-500 font-semibold">{title}</h3>
        <p className="text-slate-500">{tech}</p>
      </div>
    </>
  );
};
