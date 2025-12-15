import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Mail } from "lucide-react";
import { motion } from "motion/react";

import React from "react";

const EmailDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <motion.div
          whileHover={{ translateY: -3 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button className="cursor-pointer text-white bg-slate-800/40 border font-semibold border-white/5 ml-4 rounded-2xl hover:bg-slate-800/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:border hover:border-white/30 ">
            Let&apos;s Connect
          </Button>
        </motion.div>
      </DrawerTrigger>
      <DrawerContent className="bg-black">
        <DrawerHeader>
          <DrawerTitle className="text-slate-400">Get in Touch</DrawerTitle>
          {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
        </DrawerHeader>
        <div className="flex justify-center">
          <div className="w-96 h-28 rounded-xl border border-white/5 bg-slate-600/10 hover:border-white/20">
            <div className="flex flex-col m-4 items-center">
              <div className="rounded-full border border-white/5 flex justify-center items-center w-10 h-10 mb-4">
                <Mail className="text-white" size={16} />
              </div>
              <div className="flex justify-center">
                <p className="text-slate-300">Email Me</p>
              </div>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button className="cursor-pointer">Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline" className="cursor-pointer">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default EmailDrawer;
