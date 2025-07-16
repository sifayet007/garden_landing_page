import assets from '@/assets';
import Image from 'next/image';
import React from 'react';
import Button from './ui/ButtonProps';

const AppreciationHeroSection = () => {
    return (
      
         <div className='px-[clamp(20px,4vw,108px)] mt-[clamp(40px,4vw,60px)] w-full'>
         <div className='flex flex-col md:flex-row gap-x-10 gap-y-5 items-center'>
            <div className='w-full relative'>
                <div className='md:w-[398px] w-[200px] md:h-[398px] h-[200px] bg-[#FFCF29]/20 absolute -left-16 blur-[80px]'></div>
                <Image src={assets.appreciationLeftCard} alt="appreciation-hero" className='w-full h-auto object-cover object-center relative' />
            </div>
            <div className='w-full relative '>
                <h1 className='uppercase text-[clamp(24px,4vw,64px)]  font-bold'>appreciation</h1>
                <h1 className='uppercase text-[clamp(24px,4vw,64px)]  font-bold'>matters</h1>
                <p className='my-[clamp(18px,2.5vw,41px)] text-[clamp(14px,2vw,20px)]'>You don’t have to be a millionaire to be an art supporter. Sometimes, your appreciation means millions to others. Join The Garden and show your love to the art you like and help shine the bright to our talented creators.</p>
                 <Button label='Become a Supporter' className=' bg-[#45B26B] outline-2 outline-[#45B26B]  text-white py-[clamp(8px,2vw,10px)] px-[clamp(17px,2vw,25px)] rounded-full text-[clamp(12px,2vw,20px)]' />
                 
            </div>
        </div>
       </div>
     
    );
};

export default AppreciationHeroSection;