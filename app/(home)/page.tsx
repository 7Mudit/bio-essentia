import HeroSlider from "@/components/home/HeroSlider";
import NavMenu from "@/components/home/NavMenu";
import { InfoCards } from "@/components/home/InfoCards";
import Products from "@/components/home/Products";
import ScrollHero from "@/components/home/ScrollHero";
import React from "react";

// constant data
import {
  fitnessBudgetStacks,
  popularProducts,
  trendingProducts,
} from "@/constants";
import NewsLetter from "@/components/home/NewsLetter";

const Page = () => {
  return (
    <div className="w-full  h-full flex flex-col">
      {/* navigation menu for big screens only */}
      <div className="md:block w-full  py-[20px] min-h-[90px]  hidden">
        <NavMenu />
      </div>

      {/* <TryHero /> */}
      {/* Scroll hero */}
      <ScrollHero />

      <div className="-mt-40">
        <Products products={popularProducts} heading="Popular Products" />
      </div>
      <div className="">
        <Products products={trendingProducts} heading="Trending" />
      </div>
      <div className="">
        <Products
          products={fitnessBudgetStacks}
          heading="Fitness Budget Stacks"
        />
      </div>

      {/* info cards */}
      <InfoCards />

      {/* products slider */}
      <div>
        <HeroSlider />
      </div>

      {/* subscribe to newsletter */}
      <div className="">
        <NewsLetter />
      </div>
    </div>
  );
};

export default Page;
