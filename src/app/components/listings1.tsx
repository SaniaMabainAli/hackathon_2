import React from 'react';
import Image from 'next/image';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  weight: '400',
  subsets: ['latin'],
});

const Listings1 = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center mb-8">
        <h3 className={`${orbitron.className} text-[#2A254B] text-3xl`}>New Ceramics</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col items-center">
          <Image src="/images/Parent.png" alt="chair-image" width={305} height={375} />
          <div className="text-center mt-4">
            <h4 className={`${orbitron.className} text-lg font-bold`}>The Dandy chair</h4>
            <p className={`${orbitron.className} text-sm`}>£250</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/rust-vases.png" alt="chair-image" width={305} height={375} />
          <div className="text-center mt-4">
            <h4 className={`${orbitron.className} text-lg font-bold`}>Rustic Vase Set</h4>
            <p className={`${orbitron.className} text-sm`}>£155</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/silky-vase.png" alt="chair-image" width={305} height={375} />
          <div className="text-center mt-4">
            <h4 className={`${orbitron.className} text-lg font-bold`}>The Silky Vase</h4>
            <p className={`${orbitron.className} text-sm`}>£125</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/lucy-lamp.png" alt="chair-image" width={305} height={375} />
          <div className="text-center mt-4">
            <h4 className={`${orbitron.className} text-lg font-bold`}>The Lucy Lamp</h4>
            <p className={`${orbitron.className} text-sm`}>£399</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="text-center py-3 text-[#4E4D93] hover:bg-slate-200">view collection</button>
      </div>
    </div>
  );
};

export default Listings1;