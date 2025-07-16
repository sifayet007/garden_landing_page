import assets from '@/assets';
import Image from 'next/image';
import React from 'react';

const HerosectonImg = () => {
    return (
        <div className='md:bg-gradient-to-r bg-gradient-to-b md:mt-0 mt-5 to-[#45B26BB0] flex justify-items-center'>
            <Image src={assets.heroSectionImage} height={606} alt='herrosectionImage' className='objcet-cover w-full h-full' />
        </div>
    );
};

export default HerosectonImg;