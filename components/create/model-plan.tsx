import { AI_MODEL_PLAN_DETAIL, CREATE_LOGO_CONSTANTS } from "@/utils/constants";
import HeaderDescription from "./header-description";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface IModelPlan {
  handleSelect: (id: string, value: string) => void;
  selectedPlan: string;
}

const ModelPlan: React.FC<IModelPlan> = ({ handleSelect, selectedPlan }) => {
  return (
    <div className="w-full">
      <HeaderDescription
        title={CREATE_LOGO_CONSTANTS?.AI_MODEL_PLAN}
        description={CREATE_LOGO_CONSTANTS?.AI_MODEL_PLAN_DESCRIPTION}
        key={"6"}
      />
      <div className="flex gap-4 w-full ">
        <ModelDetails
          plan_name="free"
          features={AI_MODEL_PLAN_DETAIL?.FREE?.FEATURES}
          handleSelect={handleSelect}
          selectedPlan={selectedPlan}
        />
        <ModelDetails
          plan_name="premium"
          features={AI_MODEL_PLAN_DETAIL?.PREMIUM?.FEATURES}
          handleSelect={handleSelect}
          selectedPlan={selectedPlan}
        />
      </div>
    </div>
  );
};

export default ModelPlan;

interface IModel {
  plan_name: string;
  features: string[];
  handleSelect: (id: string, value: string) => void;
  selectedPlan: string;
}
const ModelDetails: React.FC<IModel> = ({
  plan_name,
  features,
  handleSelect,
  selectedPlan,
}) => {
  return (
    <div
      onClick={() => handleSelect("model-plan", plan_name)}
      className={cn(
        "border rounded-xl shadow-md w-full p-6 py-12 flex flex-col items-center gap-4",
        selectedPlan === plan_name && "border border-primary"
      )}
    >
      <h2 className="font-bold text-2xl text-center capitalize">{plan_name}</h2>
      <div className="flex flex-col gap-2">
        {features.map((feature) => (
          <h2 className="font-semibold text-lg">⚫️ {feature}</h2>
        ))}
      </div>
      <Button>Generate Free</Button>
    </div>
  );
};
