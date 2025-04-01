import { CREATE_LOGO_CONSTANTS } from "@/utils/constants";
import HeaderDescription from "./header-description";

const ModelPlan = () => {
  return (
    <div>
      <HeaderDescription
        title={CREATE_LOGO_CONSTANTS?.AI_MODEL_PLAN}
        description={CREATE_LOGO_CONSTANTS?.AI_MODEL_PLAN_DESCRIPTION}
        key={"6"}
      />
      <h2>Model plan</h2>
    </div>
  );
};

export default ModelPlan;
