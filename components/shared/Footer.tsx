import React from "react";
import { products, explore, information } from "@/constants";
import { Input } from "../ui/input";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LucideMails } from "lucide-react";
const Footer = () => {
  return (
    <>
      <div className="bg-white  border-b-[1px] border-gray-600 p-10 md:p-20 flex flex-col lg:flex-row gap-10 items-start justify-between w-full h-full">
        {/* for large screens  */}
        <div className="hidden md:flex w-full  lg:w-[60%] h-full flex-row items-start justify-between">
          <div className="flex flex-col gap-2 items-start justify-center">
            <h3 className="base-bold mb-3 text-black">PRODUCTS</h3>
            {products.map((product, index) => (
              <p
                className="text-gray-500 font-medium text-md hover:underline underline-offset-4 cursor-pointer "
                key={product.id}
              >
                {product.name}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-2 items-start justify-start">
            <h3 className="base-bold mb-3  text-black">EXPLORE</h3>
            {explore.map((product, index) => (
              <p
                className="text-gray-500 font-medium text-md hover:underline underline-offset-4 cursor-pointer "
                key={product.id}
              >
                {product.name}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-2  items-start justify-start">
            <h3 className="base-bold mb-3 text-black">INFORMATION</h3>
            {information.map((product, index) => (
              <p
                className="text-gray-500 font-medium text-md hover:underline underline-offset-4 cursor-pointer "
                key={product.id}
              >
                {product.name}
              </p>
            ))}
          </div>
        </div>
        {/* for mobile screens accordian */}
        <div className="flex md:hidden text-black w-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="base-bold text-black">
                PRODUCTS
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 items-start justify-center">
                {products.map((product, index) => (
                  <p
                    className="text-gray-500 font-medium text-md hover:underline underline-offset-4 cursor-pointer "
                    key={product.id}
                  >
                    {product.name}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="base-bold text-black">
                EXPLORE
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 items-start justify-center">
                {explore.map((product, index) => (
                  <p
                    className="text-gray-500 font-medium text-md hover:underline underline-offset-4 cursor-pointer "
                    key={product.id}
                  >
                    {product.name}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="base-bold text-black">
                INFORMATION
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 items-start justify-center">
                {information.map((product, index) => (
                  <p
                    className="text-gray-500 font-medium text-md hover:underline underline-offset-4 cursor-pointer "
                    key={product.id}
                  >
                    {product.name}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex w-full lg:w-[30%] flex-col gap-5 items-start justify-start">
          <h3 className="base-bold lg:mb-3 text-black">NEWSLETTER</h3>
          <div className="relative w-full">
            <LucideMails className="absolute left-2 -translate-y-[50%] top-[50%]" />
            <Input
              type="email"
              placeholder="Email address"
              className=" bg-white pl-9 border-black  placeholder:text-gray-600 text-black"
            />
          </div>

          <div className="flex flex-row gap-5 items-start justify-center">
            <div className="border border-gray-500 rounded-full p-2">
              <FaInstagram
                color="black"
                className="transition-all    cursor-pointer duration-300 hover:scale-90"
                size={20}
              />
            </div>
            <div className="border border-gray-500 rounded-full p-2">
              <RiTwitterXFill
                color="black"
                className="transition-all cursor-pointer duration-300 hover:scale-90"
                size={20}
              />
            </div>
            <div className="border border-gray-500 rounded-full p-2">
              <SlSocialLinkedin
                color="black"
                className="transition-all cursor-pointer duration-300 hover:scale-90"
                size={20}
              />
            </div>
            <div className="border border-gray-500 rounded-full p-2">
              <FaFacebookF
                color="black"
                className="transition-all cursor-pointer duration-300 hover:scale-90"
                size={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-3 bg-white text-black">
        <p className="text-sm text-center">Copyright© 2024 BioEssentia </p>
        <p className="text-sm text-center">All rights reserved. </p>
      </div>
    </>
  );
};

export default Footer;
