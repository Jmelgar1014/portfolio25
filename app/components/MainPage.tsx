import React from "react";
import HeroText from "./HeroText";

const MainPage = () => {
  return (
    <>
      <main className="h-screen bg-black">
        <div className="flex h-screen justify-center items-center bg-black overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-blob mix-blend-screen" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-blob animation-delay-2000 mix-blend-screen" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] bg-indigo-500/10 rounded-full blur-[100px]" />
          <div className="z-50">
            <HeroText />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
