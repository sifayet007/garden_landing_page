import React from 'react';
import HerosectionContain from './ui/_components/HerosectionContain';
import HerosectonImg from './ui/_components/HerosectonImg';

const HeroSection = () => {
    return (
        <div className='lg:pl-[100px] pl-5'>
           <div className='md:flex items-center'>
             <div className=' w-full'>
                <HerosectionContain/>
            </div>
            <div className='w-full'>
                <HerosectonImg/>
            </div>
           </div>
        </div>
    );
};

export default HeroSection;