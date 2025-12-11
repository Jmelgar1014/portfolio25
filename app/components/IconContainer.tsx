import { motion } from "motion/react";
import React from "react";

interface IconProps {
  Icon: React.ComponentType<{ size?: number }>;
}
const IconContainer = ({ Icon }: IconProps) => {
  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.3 }}
        className="h-14 w-14 border border-white/5 bg-slate-800/40 rounded-md m-2"
      >
        <div className="flex justify-center items-center h-full w-full ">
          <Icon size={32} />
        </div>
      </motion.div>
    </>
  );
};

export default IconContainer;
