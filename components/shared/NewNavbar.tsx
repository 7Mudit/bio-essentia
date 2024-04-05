// "use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavMenu from "../home/NavMenu";
import { SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Sidebar from "./Sidebar";
import { ShoppingCart, User } from "lucide-react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";

const NewNavbar = () => {
  // const { scrollYProgress } = useScroll();

  // const [visible, setVisible] = useState(true);

  // useMotionValueEvent(scrollYProgress, "change", (current) => {
  //   // Check if current is not undefined and is a number
  //   if (typeof current === "number") {
  //     let direction = current! - scrollYProgress.getPrevious()!;
  //     const nearTop = scrollYProgress.get() < 0.05;
  //     if (nearTop || direction < 0) {
  //       setVisible(true);
  //     } else {
  //       setVisible(false);
  //     }
  //   }
  // });
  return (
    // <AnimatePresence mode="wait">
    //   <motion.div
    //     className="flex sticky top-0 z-[50]  flex-row h-[72px] bg-white   shadow-lg items-center  justify-between px-3 sm:px-10"
    //     initial={{
    //       opacity: 1,
    //       y: -100,
    //     }}
    //     animate={{
    //       y: visible ? 0 : -100,
    //       opacity: visible ? 1 : 0,
    //     }}
    //     transition={{
    //       duration: 0.2,
    //     }}
    // >
    <div className="flex relative top-0  flex-row h-[72px] bg-white   shadow-lg items-center  justify-between px-3 sm:px-10">
      <div className="flex items-center justify-center  flex-row gap-2">
        <div className="lg:hidden">
          <Sidebar />
        </div>

        <Link href="/">
          <Image
            src="/assets/icons/new-logo.svg"
            alt="new logo"
            width={200}
            height={200}
            className="w-24 h-24 md:w-48 md:h-48"
          />
        </Link>
      </div>
      <div className="hidden lg:block">
        <NavMenu />
      </div>
      <div className="flex flex-row gap-5 items-center justify-center">
        <div className="relative duration-300 hover:scale-105 transition-all cursor-pointer">
          <ShoppingCart color="black" size={24} />
        </div>
        {/* button */}
        <SignedOut>
          <SignUpButton mode="modal">
            <div className="relative duration-300 hover:scale-105 transition-all cursor-pointer">
              <User color="black" size={24} />
            </div>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#3b82f6",
              },
            }}
            afterSignOutUrl="/"
          />
        </SignedIn>
      </div>
    </div>
    // </motion.div>
    // </AnimatePresence>
  );
};

export default NewNavbar;
