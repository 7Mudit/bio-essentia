import HeroSlider from "@/components/home/HeroSlider";
import NavMenu from "@/components/home/NavMenu";
import ScrollHero from "@/components/home/ScrollHero";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-full flex flex-col">
      {/* navigation menu for big screens only */}
      <div className="md:block w-full  py-[20px] min-h-[90px]  hidden">
        <NavMenu />
      </div>
      {/* Scroll hero */}
      <ScrollHero />
      {/* image slider compoenent */}
      <div className="px-2 ">
        <HeroSlider />
      </div>
    </div>
  );
};

export default Page;
