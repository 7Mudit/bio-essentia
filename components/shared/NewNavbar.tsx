import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavMenu from "../home/NavMenu";
import { SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { CiShoppingCart } from "react-icons/ci";
import { Button } from "../ui/button";
import Sidebar from "./Sidebar";
import { ShoppingBasket, ShoppingCart, User } from "lucide-react";

const NewNavbar = () => {
  return (
    <div className="flex sticky top-0 z-[50]  flex-row h-[72px] bg-white   shadow-lg items-center justify-between px-3 sm:px-10">
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
            <User color="black" size={24} />
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
  );
};

export default NewNavbar;
