import { CREATE_LOGO_CONSTANTS } from "@/utils/constants";
import HeaderDescription from "./header-description";

const ColorPalette = () => {
  return (
    <div>
      <HeaderDescription
        title={CREATE_LOGO_CONSTANTS?.COLOR_PALETTE}
        description={CREATE_LOGO_CONSTANTS?.COLOR_PALETTE_DESCRIPTION}
        key={"3"}
      />
      <h2>color palette</h2>
    </div>
  );
};

export default ColorPalette;
