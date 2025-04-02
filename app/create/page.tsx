"use client";
import ColorPalette from "@/components/create/color-palette";
import DesignIdea from "@/components/create/design-idea";
import LogoDescription from "@/components/create/logo-description";
import LogoStyle from "@/components/create/logo-style";
import Logotitle from "@/components/create/logo-title";
import ModelPlan from "@/components/create/model-plan";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
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
          <>
            <Logotitle />
          </>
        );
      case 2:
        return (
          <>
            <LogoDescription />
          </>
        );
      case 3:
        return (
          <>
            <ColorPalette />
          </>
        );
      case 4:
        return (
          <>
            <LogoStyle />
          </>
        );
      case 5:
        return (
          <>
            <DesignIdea />
          </>
        );
      case 6:
        return (
          <>
            <ModelPlan />
          </>
        );
      default:
        break;
    }
  };
  return (
    <div className="mt-24 p-10 border shadow-lg flex flex-col gap-4 rounded-md">
      {switchElement()}
      <div className="flex justify-between">
        {step !== 1 && (
          <Button
            onClick={() => {
              handleStep(-1);
            }}
            variant={"outline"}
          >
            <MoveLeft />
            Previous
          </Button>
        )}
        <Button disabled={step === 6} onClick={() => handleStep(1)}>
          <MoveRight />
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CreatePage;
