
import React from 'react';
import {Orbitron} from 'next/font/google'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Link from 'next/link';




const orbitron = Orbitron({
    weight: '400', 
    subsets: ['latin'],
  });
const Footer = () => {
  return (
    <footer className="bg-[#2A254B] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-center">
        <div className="flex flex-col space-y-4">
          <h3 className={`font-bold ${orbitron.className} `}>Menu</h3>
          <Link href="#" className="hover:underline">New Arrivals</Link>
          <Link href="#" className="hover:underline">Best Sellers</Link>
          <Link href="#" className="hover:underline">Recently Viewed</Link>
          <Link href="#" className="hover:underline">Popular this week</Link>
          <Link href="http://localhost:3000/product-listing" className="hover:underline">Product Detail</Link>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className={`font-bold ${orbitron.className} `}>Categories</h3>
          <Link href="#" className="hover:underline">Crockery</Link>
          <Link href="#" className="hover:underline">Furniture</Link>
          <Link href="#" className="hover:underline">Homeware</Link>
          <Link href="#" className="hover:underline">Plant Pots</Link>
          <Link href="#" className="hover:underline">Chairs</Link>
          <Link href="#" className="hover:underline">Crockery</Link>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className={`font-bold ${orbitron.className} `}>Our Company</h3>
          <Link href="http://localhost:3000/about" className="hover:underline">About Us</Link>
          <Link href="#" className="hover:underline">Our Stores</Link>
          <Link href="#" className="hover:underline">Contact Us</Link>
          <Link href="#" className="hover:underline">Privacy</Link>
          <Link href="#" className="hover:underline">Returns Policy</Link>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className={`font-bold ${orbitron.className} `}>Join Our Mailing List</h3>
          <div className="flex">
            <input type="email" placeholder="Your email address" className="border border-[#4E4D93] rounded-l px-4 py-2 bg-[#4E4D93]" />
            <button className="bg-white hover:bg-purple-900 text-black px-4 py-2 rounded-r">Sign Up</button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-4 ">
        <div>
        <p className="text-sm text-gray-400 text-start">Copyright © 2023 Avion LTD</p>
        </div>
        <div className="flex justify-end content-end ">
          <Link href="#" className="text-gray-400 mx-2">
          <FaLinkedin />
          </Link>
          <Link href="#" className="text-gray-400 mx-2">
          <FaFacebookSquare />
          </Link>
          <Link href="#" className="text-gray-400 mx-2">
          <FaInstagram />
          </Link>
          <Link href="#" className="text-gray-400 mx-2">
          <FaSkype />
          </Link>
          <Link href="#" className="text-gray-400 mx-2">
          <FaTwitter />
          </Link>
          <Link href="#" className="text-gray-400 mx-2">
          <FaPinterest />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;