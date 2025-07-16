import assets from '@/assets';
import Image from 'next/image';
import React from 'react';

const LeafWatereMark = () => {
    return (
         <div className='flex overflow-hidden'>
            <Image src={assets.leafWaterMarkImg} alt="leaf-watermark" />
            <Image src={assets.leafWaterMarkImg} alt="leaf-watermark" />
        </div>
    );
};

export default LeafWatereMark;