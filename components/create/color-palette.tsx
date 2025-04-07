import { COLOR_PALETTES, CREATE_LOGO_CONSTANTS } from "@/utils/constants";
import HeaderDescription from "./header-description";
import React from "react";
import { cn } from "@/lib/utils";

interface IColorPalette {
  handleSelect: (id: string, value: string) => void;
  selectedPalette: string;
}

const ColorPalette: React.FC<IColorPalette> = ({
  handleSelect,
  selectedPalette,
}) => {
  return (
    <div>
      <HeaderDescription
        title={CREATE_LOGO_CONSTANTS?.COLOR_PALETTE}
        description={CREATE_LOGO_CONSTANTS?.COLOR_PALETTE_DESCRIPTION}
        key={"3"}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 justify-evenly">
        {COLOR_PALETTES.map((palette) => (
          <div
            className={cn(
              "flex w-full rounded-md",
              selectedPalette === palette?.name && "border-2 p-1 border-primary"
            )}
            onClick={() => handleSelect("color-palette", palette.name)}
          >
            {palette.colors.map((color) => (
              <div
                className="w-full h-36"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
