import Image from "next/image";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="px-10 xl:px-32 2xl:px-40 py-3 shadow-md flex justify-between items-center">
      <Image src={"/logo.svg"} width={200} height={200} alt="logo" />
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
