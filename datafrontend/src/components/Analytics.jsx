/* eslint-disable no-unused-vars */
import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptopimg" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            ullam ut repellendus eveniet similique atque repudiandae fugiat
            incidunt hic cum consequatur maxime suscipit, totam laborum! Ipsam
            necessitatibus eligendi dignissimos recusandae!
          </p>
          <button className="bg-black w-[20dvh] rounded-lg font-medium mx-auto my-5 py-3 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
