import { COLOR_PALETTES, CREATE_LOGO_CONSTANTS } from "@/utils/constants";
import HeaderDescription from "./header-description";
import React from "react";

interface IColorPalette {
  handleSelect: (id: string, value: string) => void;
}

const ColorPalette: React.FC<IColorPalette> = ({ handleSelect }) => {
  return (
    <div>
      <HeaderDescription
        title={CREATE_LOGO_CONSTANTS?.COLOR_PALETTE}
        description={CREATE_LOGO_CONSTANTS?.COLOR_PALETTE_DESCRIPTION}
        key={"3"}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 justify-evenly">
        {COLOR_PALETTES.map((color) => (
          <div
            className="flex"
            onClick={() => handleSelect("color-palette", color.COLOR_1)}
          >
            <div
              className="w-12 h-28"
              style={{ backgroundColor: color.COLOR_1 }}
            ></div>
            <div
              className="w-12 h-28"
              style={{ backgroundColor: color.COLOR_2 }}
            ></div>
            <div
              className="w-12 h-28"
              style={{ backgroundColor: color.COLOR_3 }}
            ></div>
            <div
              className="w-12 h-28"
              style={{ backgroundColor: color.COLOR_4 }}
            ></div>
            <div
              className="w-12 h-28"
              style={{ backgroundColor: color.COLOR_5 }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
