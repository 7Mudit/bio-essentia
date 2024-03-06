import { categoryData } from "@/constants";
import Image from "next/image";
import React from "react";

interface CategoryProps {
  title: string;
  img: string;
}

const Categories = ({ title, img }: CategoryProps) => {
  return (
    <div className="container mx-auto py-16 px-6 lg:px-10">
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> */}
      <div className="rounded-[22px] border-[2px]  flex flex-col gap-3 max-w-sm p-4 items-start justify-between sm:p-10 relative bg-white dark:bg-zinc-900 group cursor-pointer overflow-hidden  shadow-lg transition duration-300 hover:shadow-xl">
        <Image
          src={img}
          alt="jordans"
          height="400"
          width="400"
          className="transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <p className="text-base  sm:text-xl text-black  dark:text-neutral-200 font-extrabold">
          {title}
        </p>
      </div>
    </div>
    // </div>
  );
};

export default Categories;
