import React from "react";
import "./TryHero.css";

const TryHero = () => {
  //   return (
  //     <div className="bg-blue-500 text-white text-center p-20">
  //       <h1 className="text-5xl font-bold mb-4">Welcome to BioEssentia</h1>
  //       <p className="text-xl mb-8">Discover the Essence of Natural Health</p>
  //       <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-300">
  //         Explore Now
  //       </button>
  //     </div>
  //   );
  // };
  return (
    <div
      className="relative  bg-cover bg-center text-white p-2 sm:p-4 md:p-10 lg:p-20 h-screen w-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('/assets/images/hero.webp')`,
      }}
    >
      <div className="bg-black bg-opacity-60 p-4 sm:p-5 md:p-8 lg:p-10 rounded-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
          Welcome to BioEssentia
        </h1>
        <p className="text-sm sm:text-md md:text-lg lg:text-xl mb-4 sm:mb-8">
          Discover the Essence of Natural Health
        </p>
        <button className="bg-white text-blue-500 font-semibold py-1 sm:py-2 px-2 sm:px-4 rounded hover:bg-gray-100 transition duration-300 text-xs sm:text-sm md:text-base">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default TryHero;
