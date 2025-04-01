import { CREATE_LOGO_CONSTANTS } from "@/utils/constants";
import HeaderDescription from "./header-description";

const DesignIdea = () => {
  return (
    <div>
      <HeaderDescription
        title={CREATE_LOGO_CONSTANTS?.DESIGN_IDEA}
        description={CREATE_LOGO_CONSTANTS?.DESIGN_IDEA_DESCRIPTION}
        key={"5"}
      />
      <h2>design idea</h2>
    </div>
  );
};

export default DesignIdea;
