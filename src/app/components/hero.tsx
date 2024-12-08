import React from 'react';
import { Orbitron } from 'next/font/google';
import Image from 'next/image';

const orbitron = Orbitron({
  weight: '400',
  subsets: ['latin'],
});

const Hero = () => {
  return (
    <div className="p-6">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex items-center justify-evenly bg-myblue">
          <div className="flex flex-col items-start">
            <h1 className={`${orbitron.className} text-white text-3xl font-bold mb-4`}>The furniture brand for the future, with timeless designs</h1>
            <button className="bg-mybutton text-white px-6 py-4 rounded-md">view collection</button>
            <p className={`${orbitron.className} text-white mt-4`}>A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.</p>
          </div>
          <Image src="/images/hero.jpg" alt="hero-image" width={520} height={584} />
        </div>
      </div>
    </div>
  );
};

export default Hero;