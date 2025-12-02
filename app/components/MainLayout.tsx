import React from "react";
import HeroText from "./HeroText";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* Fixed background blurs - always visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full">
        <div className="fixed top-0 left-1/4 w-full sm:w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
        <div className="fixed bottom-0 right-1/4 w-full sm:w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] bg-indigo-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </>
  );
};

export default MainLayout;
