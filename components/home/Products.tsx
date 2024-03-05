"use client";
import React from "react";
import Product from "./Product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    id: 1,
    img: "/assets/images/jordans.webp",
    name: "1 Air Jordan 4 Retro Reimagined",
    desc: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday,February 17, 2024. Your best opportunity to get these right now is byentering raffles and waiting for the official releases.",
    prize: "₹100",
    prizeStrike: "₹150",
    discountPrize: "₹50",
  },
  {
    id: 2,
    img: "/assets/images/jordans.webp",
    name: "2 Air Jordan 4 Retro Reimagined",
    desc: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday,February 17, 2024. Your best opportunity to get these right now is byentering raffles and waiting for the official releases.",
    prize: "₹100",
    prizeStrike: "₹150",
    discountPrize: "₹50",
  },
  {
    id: 3,
    img: "/assets/images/jordans.webp",
    name: "3 Air Jordan 4 Retro Reimagined",
    desc: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday,February 17, 2024. Your best opportunity to get these right now is byentering raffles and waiting for the official releases.",
    prize: "₹100",
    prizeStrike: "₹150",
    discountPrize: "₹50",
  },
  {
    id: 4,
    img: "/assets/images/jordans.webp",
    name: "4 Air Jordan 4 Retro Reimagined",
    desc: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday,February 17, 2024. Your best opportunity to get these right now is byentering raffles and waiting for the official releases.",
    prize: "₹100",
    prizeStrike: "₹150",
    discountPrize: "₹50",
  },
  {
    id: 5,
    img: "/assets/images/jordans.webp",
    name: "5 Air Jordan 4 Retro Reimagined",
    desc: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday,February 17, 2024. Your best opportunity to get these right now is byentering raffles and waiting for the official releases.",
    prize: "₹100",
    prizeStrike: "₹150",
    discountPrize: "₹50",
  },
];

export default function Products() {
  return (
    <div className="flex relative flex-col py-[150px] sm:px-10 px-4  gap-10 items-start justify-center">
      <h1 className="text-[40px] font-bold ">Products</h1>
      {/* <div className="flex flex-row flex-wrap gap-10 items-center justify-center"> */}
      <Carousel
        opts={{ loop: true, align: "start" }}
        className="max-w-[78vw]  sm:max-w-[90vw] sm:px-4"
      >
        <CarouselContent className="-ml-1  gap-10">
          {products.map((product, index) => (
            <CarouselItem key={index} className="max-w-[384px] cursor-pointer">
              <Product {...product} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext />
      </Carousel>
      {/* </div> */}
    </div>
  );
}
