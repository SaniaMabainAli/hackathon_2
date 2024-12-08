import React from 'react';
import { Orbitron, Hanken_Grotesk } from 'next/font/google';
import Image from 'next/image';

const orbitron = Orbitron({
  weight: '400',
  subsets: ['latin'],
});
const hostgrotesk = Hanken_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

const Featurelast = () => {
  return (
    <div className="h-[603px] flex flex-col md:flex-row">
      <div className="md:w-1/2 h-[603px]">
        <div className="mx-auto max-w-md">
          <p className={`${orbitron.className} text-[#2A254B] text-center mb-4`}>From a studio in London to a global brand with over 400 outlets</p>
          <p className={`${hostgrotesk.className} text-[#2A254B] text-center mb-4`}>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
          <button className="bg-[#F9F9F9] text-[#4E4D93] px-4 py-2 rounded">Get in Touch</button>
        </div>
      </div>
      <div className="md:w-1/2">
        <Image src="/images/featurelast.png" alt="Feature Image" width={720} height={603} />
      </div>
    </div>
  );
};

export default Featurelast;