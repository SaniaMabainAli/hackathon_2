import React from 'react';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  weight: '400',
  subsets: ['latin'],
});

const Signup = () => {
  return (
    <div className="h-[364px] my-auto flex flex-col items-center justify-center">
      <div className="h-[481px] w-full  rounded-md bg-slate-100 shadow-md">
        <div className="h-[114px] text-center content-center">
          <h1 className={`h-[50px] ${orbitron.className} text-[20px] `}>Join the club and get the benefits</h1>
          <p className={`h-[48px] ${orbitron.className} text-[16px] text-center content-center`}>
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
          </p>
        </div>
        <div className="content-center text-center h-[56px] bg-slate-100">
          <input
            type="text"
            placeholder="your@email.com"
            className="border border-gray-300 px-4 py-2 mb-4"
          />
          <button
            type="submit"
            className="bg-[#2A254B] hover:bg-blue-500 text-white font-bold py-2 px-4"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;