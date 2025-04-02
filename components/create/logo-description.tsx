import { CREATE_LOGO_CONSTANTS } from "@/utils/constants";
import HeaderDescription from "./header-description";
import { Input } from "../ui/input";

const LogoDescription = () => {
  return (
    <div>
      <HeaderDescription
        title={CREATE_LOGO_CONSTANTS?.LOGO_VISION}
        description={CREATE_LOGO_CONSTANTS?.LOGO_VISION_DESCRIPTION}
        key={"2"}
      />
      <Input placeholder="Enter Logo description" />
    </div>
  );
};

export default LogoDescription;
