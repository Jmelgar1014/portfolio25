import { Badge } from "@/components/ui/badge";
import React from "react";

interface techStackInfo {
  tech: string;
}

const CustomBage = ({ tech }: techStackInfo) => {
  return (
    <Badge className="border border-blue-300/20 bg-blue-300/20 mr-2 text-blue-300 ">
      {tech}
    </Badge>
  );
};

export default CustomBage;
