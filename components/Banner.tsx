import React from "react";

const ConstructionBanner: React.FC = () => {
  return (
    <div className="bg-yellow-300 text-black py-4 px-6 md:px-12 lg:px-24 xl:px-48 2xl:px-72 shadow-md sticky top-0 left-0 right-0 z-50">
      <div className="flex flex-col xl:flex-row items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold">
          🚧 Our website is currently under construction! 🚧
        </h1>
        <p className="text-sm md:text-base mt-2 md:mt-0">
          Stay tuned for updates. Thank you for your patience.
        </p>
      </div>
    </div>
  );
};

export default ConstructionBanner;
