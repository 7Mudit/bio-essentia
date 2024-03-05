import React from "react";
// import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import { Button } from "../ui/button";

interface ProductProps {
  id: number;
  img: string;
  name: string;
  desc: string;
  prize: string;
  prizeStrike: string;
  discountPrize: string;
}

const Product = ({
  id,
  img,
  name,
  desc,
  prize,
  prizeStrike,
  discountPrize,
}: ProductProps) => {
  return (
    <div className="rounded-[22px] border-[2px] duration-300 transition-all hover:scale-95 flex flex-col gap-3 max-w-sm p-4 min-h-[550px] items-start justify-between sm:p-10 bg-white dark:bg-zinc-900">
      <Image
        src={img}
        alt="jordans"
        height="400"
        width="400"
        className="object-contain"
      />
      <p className="text-base sm:text-xl text-black  dark:text-neutral-200 font-extrabold">
        {name}
      </p>

      <p className="text-sm text-neutral-600 text-justify dark:text-neutral-400">
        {desc}
      </p>

      <div className="flex items-center justify-center flex-row gap-2">
        <p className="font-extrabold text-xl">{prize}</p>
        <p className="font-extralight line-through text-lg">{prizeStrike}</p>
        <p className="text-[#51b279] text-base">Save {discountPrize}</p>
      </div>

      <div className="flex flex-col gap-5 sm:flex-row sm:gap-2">
        <Button className="rounded-lg duration-300 transition-all hover:scale-105">
          Buy Now
        </Button>
        <Button
          className="rounded-lg duration-300 transition-all hover:scale-105 bg-white text-black border border-black"
          variant={"secondary"}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default Product;
