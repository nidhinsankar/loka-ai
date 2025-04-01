"use client";
import InputBox from "@/components/create/input-box";
import { CREATE_LOGO_CONSTANTS } from "@/utils/constants";
import { useState } from "react";

const CreatePage = () => {
  const [step, setStep] = useState(1);

  const handleStep = (val: number) => {
    setStep((prev) => prev + val);
  };
  const switchElement = () => {
    switch (step) {
      case 1:
        return (
          <InputBox
            title={CREATE_LOGO_CONSTANTS?.LOGO_TITLE}
            description={CREATE_LOGO_CONSTANTS?.LOGO_TITLE_DESCRIPTION}
            step={step}
            handleStep={handleStep}
            key={"1"}
          />
        );
      case 2:
        return (
          <InputBox
            title={CREATE_LOGO_CONSTANTS?.LOGO_VISION}
            description={CREATE_LOGO_CONSTANTS?.LOGO_VISION_DESCRIPTION}
            step={step}
            handleStep={handleStep}
            key={"2"}
          />
        );
      case 3:
        return (
          <InputBox
            title={CREATE_LOGO_CONSTANTS?.COLOR_PALETTE}
            description={CREATE_LOGO_CONSTANTS?.COLOR_PALETTE_DESCRIPTION}
            step={step}
            handleStep={handleStep}
            key={"3"}
          />
        );
      case 4:
        return (
          <InputBox
            title={CREATE_LOGO_CONSTANTS?.LOGO_STYLE}
            description={CREATE_LOGO_CONSTANTS?.LOGO_STYLE_DESCRIPTION}
            step={step}
            handleStep={handleStep}
            key={"4"}
          />
        );
      case 5:
        return (
          <InputBox
            title={CREATE_LOGO_CONSTANTS?.DESIGN_IDEA}
            description={CREATE_LOGO_CONSTANTS?.DESIGN_IDEA_DESCRIPTION}
            step={step}
            handleStep={handleStep}
            key={"5"}
          />
        );
      case 6:
        return (
          <InputBox
            title={CREATE_LOGO_CONSTANTS?.AI_MODEL_PLAN}
            description={CREATE_LOGO_CONSTANTS?.AI_MODEL_PLAN_DESCRIPTION}
            step={step}
            handleStep={handleStep}
            key={"6"}
          />
        );
      default:
        break;
    }
  };
  return <div className="mt-24">{switchElement()}</div>;
};

export default CreatePage;
