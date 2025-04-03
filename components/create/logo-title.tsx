import { CREATE_LOGO_CONSTANTS } from "@/utils/constants";
import HeaderDescription from "./header-description";
import { Input } from "../ui/input";
import React from "react";

interface ILogoTitle {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Logotitle: React.FC<ILogoTitle> = ({ onChange }) => {
  return (
    <div>
      <HeaderDescription
        title={CREATE_LOGO_CONSTANTS?.LOGO_TITLE}
        description={CREATE_LOGO_CONSTANTS?.LOGO_TITLE_DESCRIPTION}
        key={"1"}
      />
      <Input
        placeholder="Enter the Logo title"
        onChange={onChange}
        id="title"
      />
    </div>
  );
};

export default Logotitle;
