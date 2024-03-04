import NavMenu from "@/components/home/NavMenu";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-full flex flex-col">
      {/* navigation menu for big screens only */}
      <div className="md:block w-full  py-[20px] min-h-[90px]  hidden">
        <NavMenu />
      </div>
    </div>
  );
};

export default Page;
