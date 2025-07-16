import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { LuMoveRight } from 'react-icons/lu';
import Button from './ButtonProps';

const HighlightSocialMedia = () => {
    return (
        <div className='md:flex gap-x-16  lg:px-[100px] mt-[clamp(40px,4vw,60px)] px-9'>
            <div className='space-y-3'>
                <div><FaInstagram className='text-[30px]'/></div>
                <p>We highlight creators and their works via our Instagram</p>
                 <Button label='Visit Our Instagram' iconPosition='right' className='text-[#259F46] text-[clamp(14px,2vw,18px)] font-bold' icon={<LuMoveRight />}  />
            </div>
            <div className='space-y-3 md:mt-0 mt-[clamp(20px,1.5vw,30px)]'>
                <div><FaInstagram className='text-[30px]'/></div>
                <p className='font-medium text-[14px,2vw,20px]'>We highlight creators and their works via our Instagram</p>
                 <Button label='Visit Our Instagram' iconPosition='right' className='text-[#259F46] text-[clamp(14px,2vw,18px)] font-bold' icon={<LuMoveRight />}  />
            </div>
            
        </div>
    );
};

export default HighlightSocialMedia;