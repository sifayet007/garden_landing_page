import assets from '@/assets';
import Image from 'next/image';
import React from 'react';
import Button from './ui/ButtonProps';
import HighlightSocialMedia from './ui/HighlightSocialMedia';


const EarnHeroSection = () => {
    return (
       <div>
         <div className='md:flex justify-between items-center lg:pl-[100px] mt-[clamp(40px,4vw,60px)] lg:px-0 px-5'>
            <div className='w-full'>
                <div className='font-bold flex flex-col text-[clamp(24px,2.5vw,64px)]'>
                    <span>CREATE.</span>
                    <span>EARN SPOTLIGHT.</span>
                    <span>REPEAT.</span>
                </div>
               <div className='space-y-5 mt-[clamp(20px,2.5vw,40px)]'>
                 <p className='text-[clamp(14px,2.5vw,20px)] text-[#878787] line-clamp-3'>At The Garden, creators are encouraged to show the world their creativity and receive appreciation from others, no matter how talented they are.</p>
                <p className='text-[clamp(14px,2.5vw,20px)] text-[#878787] line-clamp-3'>The Garden is a safe place where people are inspired to share without the fear of being judged. We aim to create an incubator where talented people at any level can learn and grow into their better selves.</p>
               </div>
                <div className='mt-[clamp(20px,2.5vw,40px)]'>
                    <Button label='Sign Up for Waiting List' className='py-[clamp(13px,2.5vw,19px)] px-[clamp(23px,2.5vw,26px)] rounded-full bg-[#45B26B] text-white text-[clamp(14px,1.5vw,16px)]'/>
                </div>
            </div>
            <div className='relative  w-full'>
                <div className='bg-[#FFCF29]/20 w-[300px] blur-[50px] h-[300px] rounded-full absolute top-0 right-0 '></div>
                <div className='bg-[#179c46]/30 w-[350px] h-[350px] rounded-full blur-[50px] absolute -bottom-10 right-[44%]  transform translate-x-1/2'></div>
                <div className='relative'>
                    <Image src={assets.eranHerosectionImg} alt='Eran hero section image' />
                </div>
            </div>
        </div>
        <div>
           <HighlightSocialMedia/>
        </div>

       </div>
    );
};

export default EarnHeroSection;