import { CREATE_LOGO_CONSTANTS } from "@/utils/constants";
import HeaderDescription from "./header-description";
import { Input } from "../ui/input";
import React from "react";

interface ILogoDescription {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LogoDescription: React.FC<ILogoDescription> = ({ onChange }) => {
  return (
    <div>
      <HeaderDescription
        title={CREATE_LOGO_CONSTANTS?.LOGO_VISION}
        description={CREATE_LOGO_CONSTANTS?.LOGO_VISION_DESCRIPTION}
        key={"2"}
      />
      <Input
        placeholder="Enter Logo description"
        onChange={onChange}
        id="description"
      />
    </div>
  );
};

export default LogoDescription;
