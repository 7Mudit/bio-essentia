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
const Footer = () => {
  return (
    <>
      <div className="bg-black border-b-[1px] border-gray-600 p-10 md:p-20 flex flex-col lg:flex-row gap-10 items-start justify-between w-full h-full">
        {/* for large screens  */}
        <div className="hidden md:flex w-full  lg:w-[60%] h-full flex-row items-start justify-between">
          <div className="flex flex-col gap-2 items-start justify-center">
            <h3 className="base-bold mb-3 text-white">PRODUCTS</h3>
            {products.map((product, index) => (
              <p
                className="text-gray-300 font-medium text-md hover:underline underline-offset-4 cursor-pointer "
                key={product.id}
              >
                {product.name}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-2 items-start justify-start">
            <h3 className="base-bold mb-3  text-white">EXPLORE</h3>
            {explore.map((product, index) => (
              <p
                className="text-gray-300 font-medium text-md hover:underline underline-offset-4 cursor-pointer "
                key={product.id}
              >
                {product.name}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-2  items-start justify-start">
            <h3 className="base-bold mb-3 text-white">INFORMATION</h3>
            {information.map((product, index) => (
              <p
                className="text-gray-300 font-medium text-md hover:underline underline-offset-4 cursor-pointer "
                key={product.id}
              >
                {product.name}
              </p>
            ))}
          </div>
        </div>
        {/* for mobile screens accordian */}
        <div className="flex md:hidden text-white w-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="base-bold text-white">
                PRODUCTS
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 items-start justify-center">
                {products.map((product, index) => (
                  <p
                    className="text-gray-300 font-medium text-md hover:underline underline-offset-4 cursor-pointer "
                    key={product.id}
                  >
                    {product.name}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="base-bold text-white">
                EXPLORE
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 items-start justify-center">
                {explore.map((product, index) => (
                  <p
                    className="text-gray-300 font-medium text-md hover:underline underline-offset-4 cursor-pointer "
                    key={product.id}
                  >
                    {product.name}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="base-bold text-white">
                INFORMATION
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 items-start justify-center">
                {information.map((product, index) => (
                  <p
                    className="text-gray-300 font-medium text-md hover:underline underline-offset-4 cursor-pointer "
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
          <h3 className="base-bold lg:mb-3 text-white">NEWSLETTER</h3>
          <Input
            type="email"
            placeholder="Email address"
            className=" bg-black  placeholder:text-gray-300 text-white"
          />
          <div className="flex flex-row gap-5 items-start justify-center">
            <div className="border rounded-full p-2">
              <FaInstagram
                color="white"
                className="transition-all  border-white  cursor-pointer duration-300 hover:scale-90"
                size={20}
              />
            </div>
            <div className="border rounded-full p-2">
              <RiTwitterXFill
                color="white"
                className="transition-all cursor-pointer duration-300 hover:scale-90"
                size={20}
              />
            </div>
            <div className="border rounded-full p-2">
              <SlSocialLinkedin
                color="white"
                className="transition-all cursor-pointer duration-300 hover:scale-90"
                size={20}
              />
            </div>
            <div className="border rounded-full p-2">
              <FaFacebookF
                color="white"
                className="transition-all cursor-pointer duration-300 hover:scale-90"
                size={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 bg-black text-white">
        <p className="text-sm">Copyright© 2024 BioEssentia </p>
      </div>
    </>
  );
};

export default Footer;
