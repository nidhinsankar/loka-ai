"use client";
import ColorPalette from "@/components/create/color-palette";
import DesignIdea from "@/components/create/design-idea";
import LogoDescription from "@/components/create/logo-description";
import LogoStyle from "@/components/create/logo-style";
import Logotitle from "@/components/create/logo-title";
import ModelPlan from "@/components/create/model-plan";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import React, { useState } from "react";

const CreatePage = () => {
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState({
    title: "",
    description: "",
    "color-palette": "",
    "logo-style": "",
    "design-idea": "",
    "model-plan": "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = () => {
    console.log("submit", details);
  };

  const handleSelect = (id: string, value: string) => {
    setDetails((prev) => ({ ...prev, [id]: value }));
  };
  const handleStep = (val: number) => {
    setStep((prev) => prev + val);
  };
  const switchElement = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Logotitle onChange={handleChange} />
          </>
        );
      case 2:
        return (
          <>
            <LogoDescription onChange={handleChange} />
          </>
        );
      case 3:
        return (
          <>
            <ColorPalette handleSelect={handleSelect} />
          </>
        );
      case 4:
        return (
          <>
            <LogoStyle handleSelect={handleSelect} />
          </>
        );
      case 5:
        return (
          <>
            <DesignIdea handleSelect={handleSelect} />
          </>
        );
      case 6:
        return (
          <>
            <ModelPlan handleSelect={handleSelect} />
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
        {step != 6 ? (
          <Button disabled={step === 6} onClick={() => handleStep(1)}>
            <MoveRight />
            Continue
          </Button>
        ) : (
          <Button onClick={handleSubmit}>Submit</Button>
        )}
      </div>
    </div>
  );
};

export default CreatePage;
