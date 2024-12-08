import React from 'react';
import { Orbitron, Hanken_Grotesk } from 'next/font/google';
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BiPurchaseTag } from "react-icons/bi";
import { LuSprout } from "react-icons/lu";

const orbitron = Orbitron({
  weight: '400',
  subsets: ['latin'],
});
const hostgrotesk = Hanken_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

const Feature = () => {
  return (
    <div className="h-[355px]">
      <h3 className={`${orbitron.className} text-center text-3xl p-5`}>What makes our brand different</h3>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="flex items-center">
            <TbTruckDelivery className="w-10 h-10  mr-4" />
            <div>
              <h4 className={`${hostgrotesk.className} text-lg font-bold mb-2`}>Next day as standard</h4>
              <p className={`${hostgrotesk.className} text-sm text-gray-500`}>Order before 3pm and get your order the next day as standard</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="flex items-center">
            <IoIosCheckmarkCircleOutline className="w-10 h-10  mr-4" />
            <div>
              <h4 className={`${hostgrotesk.className} text-lg font-bold mb-2`}>Made by true artisans</h4>
              <p className={`${hostgrotesk.className} text-sm text-gray-500`}>Handmade crafted goods made with real passion and craftmanship</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="flex items-center">
            <BiPurchaseTag className="w-10 h-10  mr-4" />
            <div>
              <h4 className={`${hostgrotesk.className} text-lg font-bold mb-2`}>Unbeatable prices</h4>
              <p className={`${hostgrotesk.className} text-sm text-gray-500`}>For our materials and quality you won’t find better prices anywhere</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="flex items-center">
            <LuSprout className="w-10 h-10  mr-4" />
            <div>
              <h4 className={`${hostgrotesk.className} text-lg font-bold mb-2`}>Recycled packaging</h4>
              <p className={`${hostgrotesk.className} text-sm text-gray-500`}>We use 100% recycled packaging to ensure our footprint is manageable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;