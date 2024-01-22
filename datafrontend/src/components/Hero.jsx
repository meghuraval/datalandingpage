/* eslint-disable no-unused-vars */
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div>
      <div className="">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center items-center">
          <p className="uppercase text-[#00df9a] font-bold p-2">
            Growing with data analytics
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-white">
            Grow With Data.
          </h1>
          <div className="">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold text-white pt-1">
              Fast, Flexible financing for{" "}
              <TypeAnimation
                sequence={["SaaS", 1000, "B2B", 1000, "SEO", 1000]}
                speed={50}
                className="md:text-5xl sm:text-4xl text-xl font-bold text-white"
                repeat={Infinity}
              />
            </p>
          </div>
          <p className="md:text-xl lg:text-2xl font-bold text-gray-500 pt-5">
            Monitor your data analytics to increase for B2B, SaaS, & SEO
            platforms
          </p>
          <button className="bg-[#00df9a] w-[20dvh] rounded-lg font-medium mx-auto md: my-5 py-3 text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
