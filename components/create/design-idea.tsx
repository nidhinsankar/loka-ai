import { CREATE_LOGO_CONSTANTS } from "@/utils/constants";
import HeaderDescription from "./header-description";
import React from "react";
import { cn } from "@/lib/utils";

const Design_list = [
  "Antique Apple Press",
  "Hand-drawn apple tree",
  "Vintage Apple orchard label",
  "Apple with gear symbol",
  "Old-fashioned Apple icon",
  "Let AI Select the best idea",
];
interface IDesignList {
  handleSelect: (id: string, value: string) => void;
  selectedDesign: string;
}
const DesignIdea: React.FC<IDesignList> = ({
  handleSelect,
  selectedDesign,
}) => {
  return (
    <div>
      <HeaderDescription
        title={CREATE_LOGO_CONSTANTS?.DESIGN_IDEA}
        description={CREATE_LOGO_CONSTANTS?.DESIGN_IDEA_DESCRIPTION}
        key={"5"}
      />
      <div className="flex flex-wrap gap-4">
        {Design_list.map((design) => (
          <div
            className={cn(
              "border px-3 py-1 rounded-full ",
              selectedDesign == design && "border border-primary p-1 "
            )}
            onClick={() => handleSelect("design-idea", design)}
          >
            <h4 className="text-gray-800 text-lg">{design}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignIdea;
