import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { categoryData } from "@/constants";
import Categories from "./Categories";

export default function Category({ heading, categories }: any) {
  return (
    <div className="flex relative flex-col pb-[150px] px-4 lg:px-10 gap-10 items-start justify-center">
      <h1 className="text-[40px] font-bold ">Shop By Categories</h1>
      {/* <div className="flex flex-row flex-wrap gap-10 items-center justify-center"> */}
      <Carousel
        opts={{ loop: true, align: "start" }}
        className="max-w-[75vw]  sm:max-w-[90vw] sm:px-4"
      >
        <CarouselContent className="gap-5">
          {categoryData.map((category: any, index: any) => (
            <CarouselItem key={index} className="max-w-[424px] cursor-pointer">
              <Categories {...category} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext />
      </Carousel>
      {/* </div> */}
    </div>
  );
}
