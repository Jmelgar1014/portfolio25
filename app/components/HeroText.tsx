"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const HeroText = () => {
  return (
    <>
      <main className=" px-4 h-screen flex flex-col justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-semibold text-4xl sm:text-7xl text-white">
              Full-Stack Developer
            </h1>
            <br />
            <h1 className="text-center font-semibold text-4xl sm:text-7xl bg-gradient-to-br from-violet-600 to-blue-500 bg-clip-text text-transparent h-24">
              Building Production-Ready Applications
            </h1>
          </div>
          <div>
            <p className="font-semibold text-slate-400 text-center">
              I&apos;m Jose, a Fullstack Engineer building user friendly
              applications with NextJs, Typescript, and Tailwind.{" "}
            </p>
          </div>
          <div className="flex justify-center my-4">
            <Link href="https://github.com/Jmelgar1014" target="_blank">
              <motion.div whileHover={{ translateY: -3 }}>
                <Button className="cursor-pointer text-black bg-white rounded-2xl  font-semibold hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] ">
                  View my Work <ArrowRight />
                </Button>
              </motion.div>
            </Link>
            <Link
              href="https://linkedin.com/in/jose-melgar2019"
              target="_blank"
            >
              <motion.div whileHover={{ translateY: -3 }}>
                <Button className="cursor-pointer text-white bg-slate-800/40 border font-semibold border-white/5 ml-4 rounded-2xl hover:bg-slate-800/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:border hover:border-white/30 ">
                  Let&apos;s Connect
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default HeroText;
