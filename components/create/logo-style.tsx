import { CREATE_LOGO_CONSTANTS } from "@/utils/constants";
import HeaderDescription from "./header-description";

const LogoStyle = () => {
  return (
    <div>
      <HeaderDescription
        title={CREATE_LOGO_CONSTANTS?.LOGO_STYLE}
        description={CREATE_LOGO_CONSTANTS?.LOGO_STYLE_DESCRIPTION}
        key={"4"}
      />
      <h2>Logo style</h2>
    </div>
  );
};

export default LogoStyle;
