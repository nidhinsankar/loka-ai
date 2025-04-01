"use client";
import { CREATE_LOGO_CONSTANTS } from "@/utils/constants";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import React, { useState } from "react";
import HeaderDescription from "./header-description";

interface IInput {
  title: string;
  description: string;
  handleStep: (next: number) => void;
  step: number;
}

const InputBox: React.FC<IInput> = ({
  title,
  description,
  handleStep,
  step,
}) => {
  return (
    <div className="p-10 border shadow-lg flex flex-col gap-4 rounded-md">
      <HeaderDescription title={title} description={description} />
      <Input placeholder="Enter the logo title" />
      <div className="flex justify-between">
        {step !== 1 && (
          <Button
            onClick={() => {
              handleStep(-1);
            }}
            variant={"outline"}
          >
            Previous
          </Button>
        )}
        <Button disabled={step === 6} onClick={() => handleStep(1)}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default InputBox;
