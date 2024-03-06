import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { Button } from "../ui/button";
import { LuMails } from "react-icons/lu";
const NewsLetter = () => {
  return (
    <>
      <div className="px-4 py-20  md:px-20 bg-white   flex flex-col md:flex-row gap-5 items-center justify-between">
        <div className="flex flex-col gap-5 items-start justify-center">
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl leading-normal font-bold">
            Subscribe to our NewsLetter
          </h1>
          <div className="pl-2 xs:pl-4 space-y-4">
            <p className="text-sm  leading-normal">
              Start your Daily Shopping with{" "}
              <span className="text-green-600  font-extrabold">
                BioEssentia
              </span>{" "}
            </p>
            <div className="flex flex-col gap-5 items-start justify-center sm:flex-row ">
              <div className="relative">
                <LuMails className="absolute left-2 -translate-y-[50%] top-[50%]" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1  min-w-[280px] pl-9   border rounded-md shadow-sm  focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <Button
                variant={"outline"}
                className="px-6 py-2  border border-blue-500 text-blue-500 rounded-md shadow-sm hover:bg-blue-500 hover:text-white transition-colors duration-300"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <Image
          alt="Supplement"
          src="/assets/images/supplement.webp"
          width="500"
          height="500"
        />
      </div>
    </>
  );
};

export default NewsLetter;
