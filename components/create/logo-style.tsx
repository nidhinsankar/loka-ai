import { CREATE_LOGO_CONSTANTS, LOGO_STYLE_DETAILS } from "@/utils/constants";
import HeaderDescription from "./header-description";
import Image from "next/image";
import React from "react";

interface ILogoStyle {
  handleSelect: (id: string, value: string) => void;
}
const LogoStyle: React.FC<ILogoStyle> = ({ handleSelect }) => {
  return (
    <div>
      <HeaderDescription
        title={CREATE_LOGO_CONSTANTS?.LOGO_STYLE}
        description={CREATE_LOGO_CONSTANTS?.LOGO_STYLE_DESCRIPTION}
        key={"4"}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {LOGO_STYLE_DETAILS.map((style) => (
          <div
            className="border rounded-xl shadow-md w-full"
            key={style?.STYLE_NAME}
            onClick={() => handleSelect("logo-style", style?.STYLE_NAME)}
          >
            <Image
              src={style?.STYLE_IMG}
              className="w-full h-52 object-cover "
              width={100}
              height={50}
              alt={style?.STYLE_NAME}
            />
            <div className="p-4 text-center">
              <h2 className="capitalize text-lg font-bold">
                {style?.STYLE_NAME}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoStyle;
