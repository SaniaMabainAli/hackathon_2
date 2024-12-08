import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import Link from 'next/link';
import React from 'react';

const TopNav = () => {
  return (
    <div className="h-32 bg-white">
      <div className="container mx-auto px-8 flex items-center justify-between">
        <Link href="/">
          <CiSearch className="w-6 h-6 text-gray-500" />
        </Link>
        <p className="text-xl font-bold">Avion</p>
        <div className="flex items-center space-x-4">
          <Link href="http://localhost:3000/cart">
            <CiShoppingCart className="w-6 h-6 text-gray-500" />
          </Link>
          <Link href="/">
            <RxAvatar className="w-6 h-6 text-gray-500" />
          </Link>
        </div>
      </div>
      <hr className="border-gray-300" />
      <ul className="flex flex-col md:flex-row items-center justify-center h-[22px] font-regular text-[16px] space-x-5 sm:space-x-0 sm:flex-wrap sm:justify-center sm:p-4"> 
        <Link href={'#'} className="hover:bg-blue-200 px-3 py-2 rounded">Plant pots</Link>
        <Link href={'#'} className="hover:bg-blue-200 px-3 py-2 rounded">Ceramics</Link>
        <Link href={'#'} className="hover:bg-blue-200 px-3 py-2 rounded">Tables</Link>
        <Link href={'#'} className="hover:bg-blue-200 px-3 py-2 rounded">Chairs</Link>
        <Link href={'#'} className="hover:bg-blue-200 px-3 py-2 rounded">Crockery</Link>
        <Link href={'#'} className="hover:bg-blue-200 px-3 py-2 rounded">Tableware</Link>
        <Link href={'#'} className="hover:bg-blue-200 px-3 py-2 rounded">Cutlery</Link>
      </ul>
    </div>
  );
};

export default TopNav;