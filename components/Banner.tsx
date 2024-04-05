import React from "react";

const FullPageConstructionBanner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-yellow-300 text-black">
      <div className="text-center p-4 md:p-8 lg:p-16">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          🚧 Our website is currently under construction! 🚧
        </h1>
        <p className="text-md md:text-xl">
          Stay tuned for updates. Thank you for your patience.
        </p>
      </div>
    </div>
  );
};

export default FullPageConstructionBanner;
