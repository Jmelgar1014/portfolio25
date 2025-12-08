import React from "react";

interface IconProps {
  Icon: React.ComponentType<{ size?: number }>;
}
const IconContainer = ({ Icon }: IconProps) => {
  return (
    <>
      <div className="h-14 w-14 border border-white/5 bg-slate-800/40 rounded-md m-2">
        <div className="flex justify-center items-center h-full w-full ">
          <Icon size={32} />
        </div>
      </div>
    </>
  );
};

export default IconContainer;
