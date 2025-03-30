import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HOME_PAGE_CONSTANTS } from "@/utils/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-28 text-center flex flex-col  gap-4 justify-center mx-auto">
      <div>
        <h2 className="font-bold text-5xl text-primary mb-6">
          {HOME_PAGE_CONSTANTS.TITLE}
        </h2>
        <h4 className="font-semibold text-5xl mb-6">
          {HOME_PAGE_CONSTANTS.UNIQUE_DESC}
        </h4>
        <p className="text-lg ">{HOME_PAGE_CONSTANTS.DESCRIPTION}</p>
      </div>
      <div className="flex justify-center gap-3 w-full max-w-2xl mx-auto">
        <Input
          placeholder={HOME_PAGE_CONSTANTS.PLACEHOLDER}
          className="p-6"
          size={100}
        />
        <Button className="p-6">Get Started</Button>
      </div>
      <div>
        <Image
          src={"/landing.webp"}
          width={200}
          height={200}
          alt="hero-image"
          className="w-full"
        />
      </div>
    </div>
  );
}
