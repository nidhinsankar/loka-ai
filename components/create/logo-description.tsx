import { CREATE_LOGO_CONSTANTS } from "@/utils/constants";
import HeaderDescription from "./header-description";

const LogoDescription = () => {
  return (
    <div>
      <HeaderDescription
        title={CREATE_LOGO_CONSTANTS?.LOGO_VISION}
        description={CREATE_LOGO_CONSTANTS?.LOGO_VISION_DESCRIPTION}
        key={"2"}
      />
      <h2>Logo description</h2>
    </div>
  );
};

export default LogoDescription;
