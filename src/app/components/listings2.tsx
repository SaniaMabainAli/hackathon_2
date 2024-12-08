import React from 'react'
import Image from 'next/image'
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({
  weight: '400', 
  subsets: ['latin'],
});

const Listings2 = () => {
  return (
    // main div
    <div className='h-[744px]'>
        {/* heading ka div */}
        <div className={`${orbitron.className} w-full sm:w-[330px] h-[45px] p-9`}> 
            <h3 className='text-[#2A254B]  sm:text-[28px]'>Our Popular Products</h3>
        </div>
        {/* saare products ka main div */}
        <div className='flex flex-wrap justify-center sm:justify-evenly gap-4'>

            {/* product1 ka div */}
            <div className='w-full sm:w-[305px] h-[462px] m-11'>
                {/* image */}
                <Image  src="/images/sofa.JPG" alt='sofa-image' width={630} height={462} layout="responsive"/>
                {/* text ka div */}
                <div className='w-full sm:w-[630px] h-[375px]'>
                    <h4 className='py-2 text-center sm:text-left'>The Popular suedesofa</h4>
                    <p className='py-1 text-center sm:text-left'>£980</p>
                </div>
            </div>

            {/* product2 ka div */}
            <div className='w-full sm:w-[305px] h-[462px]'>
                {/* image */}
                <Image  src="/images/Parent.png" alt='chair-image' width={305} height={375} layout="responsive"/>
                {/* text ka div */}
                <div className='w-full sm:w-[154px] h-[63px]'>
                    <h4 className='py-2 text-center sm:text-left'>The Dandy Chair</h4>
                    <p className='py-1 text-center sm:text-left'>£250</p>
                </div>
            </div>

            {/* product3 ka div */}
            <div className='w-full sm:w-[305px] h-[462px]'>
                {/* image */}
                <Image  src="/images/chair.png" alt='chair-image' width={305} height={375} layout="responsive"/>
                {/* text ka div */}
                <div className='w-full sm:w-[154px] h-[63px]'>
                    <h4 className='py-2 text-center sm:text-left'>The Dandy Chair</h4>
                    <p className='py-1 text-center sm:text-left'>£250</p>
                </div>
            </div>

        </div>

        {/* button div */}
        <div className='flex justify-center mt-4'>
            <button className='text-center py-3 text-[#4E4D93] hover:bg-slate-200'>
                View Collection
            </button>
        </div>
    </div>
  );
};

export default Listings2;
