import React from 'react';
import Image from 'next/image';
import { Orbitron , Hanken_Grotesk} from 'next/font/google';
import TopNav from '../components/topNav';
import Feature from '../components/feature';
import Signup from '../components/signup';
import Footer from '../components/footer';

const orbitron = Orbitron({
  weight: '400',
  subsets: ['latin'],
});
const hostgrotesk = Hanken_Grotesk({
    weight: '400',
    subsets: ['latin'],
  });

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100">
        <TopNav/>
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">A brand built on the love of craftsmanship, quality and outstanding customer service</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
          <p className={`${orbitron.className} text-lg text-gray-700 my-5`}>From a studio in London to a global brand with over 400 outlets</p>

            <p className={`${hostgrotesk.className} text-lg text-gray-700 mb-4 my-5 `}>When we started Avion, the idea was simple: Make high quality furniture affordable and available for the mass market.</p>
            <p className={`${hostgrotesk.className} text-lg text-gray-700 mb-8`}>Handmade, lovingly crafted furniture and homeware is what we live, breathe and design, so our Chelsea boutique became the hotbed for the London interior design community.</p>
            <button className="bg-[#F9F9F9] hover:bg-gray-400 text-black px-4 py-2 rounded my-9">Get in Touch</button>
          </div>
          <Image src="/images/featurelast.png" alt="Image1" width={720} height={603} className="w-full h-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="flex flex-col">
            <p className={`${orbitron.className} text-lg text-gray-700 my-5`}>Our service isn't just personal, it's actually hyper personally exquisite</p>
            <p className={`${hostgrotesk.className} text-lg text-gray-700 mb-4 my-5 `}>When we started Avion, the idea was simple: Make high quality furniture affordable and available for the mass market.</p>
            <p className={`${hostgrotesk.className} text-lg text-gray-700 mb-8`}>Handmade, lovingly crafted furniture and homeware is what we live, breathe and design, so our Chelsea boutique became the hotbed for the London interior design community.</p>
            <button className="bg-[#F9F9F9] hover:bg-gray-400 text-black px-4 py-2 rounded my-9">Get in Touch</button>
            </div>
            <div><img src="/images/about.png" alt="Image description" width={720} height={603} className="w-full h-auto md:order-2" />
            </div>
          

        </div>
      </div>
      <Feature/>
      <Signup/>
      <Footer/>
    </div>
  );
};

export default AboutUsPage;