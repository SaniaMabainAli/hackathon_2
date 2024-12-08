import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Listings1 from '../components/listings1';
import Feature from '../components/feature';
import Signup from '../components/signup';
import Footer from '../components/footer';
import { CiSearch, CiShoppingCart} from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";

const About = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white text-black py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Avion</h1>
          <div className="flex items-center space-x-4">
          <ul className="flex items-center justify-center h-[22px] font-regular text-[16px] space-x-5 py-9"> 
        <Link href={'#'} className=" hover:bg-blue-200"><li>Plant pots</li></Link>
        <Link href={'#'} className=" hover:bg-blue-200"><li>Ceramics</li></Link>
        <Link href={'#'} className=" hover:bg-blue-200"><li>Tables</li></Link>
        <Link href={'#'} className=" hover:bg-blue-200"><li>Chairs</li></Link>
        <Link href={'#'} className=" hover:bg-blue-200"><li>Crockery</li></Link>
        <Link href={'#'} className=" hover:bg-blue-200"><li>Tableware</li></Link>
        <Link href={'#'} className=" hover:bg-blue-200"><li>Cutlery</li></Link>
        </ul>
        <div className="flex items-center justify-between px-8">
        <Link href="/">
          <CiSearch className="w-6 h-6 text-gray-500" />
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="http://localhost:3000/cart">
            <CiShoppingCart className="w-6 h-6 text-gray-500" />
          </Link>
          <Link href="/">
            <RxAvatar className="w-6 h-6 text-gray-500" />
          </Link>
        </div>
      </div>
        </div>
        </div>
      </header>

      <main className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <Image
              src="/images/Image-Left.png" 
              alt="Product Image"
              width={721}
              height={759}
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">The Dandy Chair</h1>
            <p className="text-3xl font-bold mb-4">£250</p>

            <p className="text-gray-600 mb-4">
              A timeless design, with premium materials features as one of our most
              popular and iconic pieces. The Dandy chair is perfect for any stylish
              living space with beech legs and lambskin leather upholstery.
            </p>

            <ul className="list-disc list-inside mb-4">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>

            <h2 className="text-xl font-bold mb-2">Dimensions</h2>
            <ul className="list-none">
              <li className="flex justify-between">Height: 110cm</li>
              <li className="flex justify-between">Width: 75cm</li>
              <li className="flex justify-between">Depth: 50cm</li>
            </ul>

            <div className="flex items-center mt-4">
                <span>Amount: </span>
              <input type="number" className="border border-gray-300 px-7 py-2 w-24" defaultValue="1" />
              <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded ml-4">Add to Cart</button>
            </div>
          </div>
        </div>
      </main>
      <Listings1/>
      <Feature/>
      <Signup/>
      <Footer/>
    </div>
  );
};

export default About;