import React from 'react';
import Button from './ui/ButtonProps';
import Image from 'next/image';
import assets from '@/assets';

const RoadmapIntroSection = () => {
    return (
        <div className='px-[clamp(20px,6vw,108px)] w-full md:text-center flex flex-col md:items-center  mt-[clamp(40px,4vw,60px)]'>
            <div className='relative bg-[#45B26B] pt-[60px] pb-[44px] text-center flex flex-col items-center w-full rounded-4xl overflow-hidden'>
            <h1 className='text-[48px] font-bold text-white custom-cunia'>SOMEWHERE DOWN THE ROAD</h1>
            <p className='max-w-[715px] text-white mt-[16px]'>
                We are a small group of passionate individuals trying to do a meaningful project for the creative community. We are reaching our goal step-by-step and are happy to share with you our journey. Check out our updates and milestones!
            </p>
            <Button label='See Roadmap' className=' mt-[clamp(26px,4vw,41px)] bg-[#45B26B] w-fit outline-2 outline-white  text-white py-[clamp(8px,2vw,10px)] px-[clamp(17px,2vw,25px)] rounded-full text-[clamp(12px,2vw,20px)]' />
            <Image src={assets.roadmapLeafImg} alt='roadmap leaf' className='absolute bottom-0 w-full'/>
        </div>
        </div>
    );
};

export default RoadmapIntroSection;