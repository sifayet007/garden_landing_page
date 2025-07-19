'use client'
import React, { useEffect, useRef } from 'react';
import UnderSpotLightCatd from './ui/UnderSpotLightCatd';
import Button from './ui/ButtonProps';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const UnderSpotLighte = () => {
  
  
    return (
        <div className='bg-[#F4FFF8] lg:pl-[183px] pl-5 py-[clamp(50px,2.5vw,100px)] mt-[clamp(20px,2.5vw,38px)]' >
            <div className='flex justify-between pr-[20px] '>
                <h1 className='font-semibold text-[clamp(24px,2.5vw,30px)] custom-cunia'>UNDER THE SPOTLIGHT</h1>
               
            <div>                  
             <Button label='View gallery' icon={<FaRegArrowAltCircleRight />} iconPosition='right' className=' whitespace-nowrap text-[#45B26B] text-[clamp(14px,2vw,18px)] font-bold' />
            </div>              
            </div>
            <div className='mt-[clamp(20px,2vw,50px)]' >
                <UnderSpotLightCatd/>
            </div>
        </div>
    );
}

export default UnderSpotLighte;