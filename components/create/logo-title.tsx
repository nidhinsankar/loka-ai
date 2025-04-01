import { CREATE_LOGO_CONSTANTS } from "@/utils/constants";
import HeaderDescription from "./header-description";

const Logotitle = () => {
  return (
    <div>
      <HeaderDescription
        title={CREATE_LOGO_CONSTANTS?.LOGO_TITLE}
        description={CREATE_LOGO_CONSTANTS?.LOGO_TITLE_DESCRIPTION}
        key={"1"}
      />
      <h2>Logo title</h2>
    </div>
  );
};

export default Logotitle;
