import assets from '@/assets';
import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='px-[clamp(20px,6vw,108px)] w-full mt-[clamp(40px,4vw,60px)] border-t-2 border-[#CECECE] pt-[60px] pb-[25px]'>
            <div className='flex md:flex-row flex-col md:justify-between  items-center gap-y-[clamp(20px,2.5vw,54px)]'>
                <div className='flex flex-col md:justify-start justify-center items-center'>
                <div className='flex gap-x-2.5 '>
                    <div>
                        <Image src={assets.gardenLogo.src} alt="logo" width={67} height={60} />
                    </div>
                    <h1 className='font-bold text-[19px] flex flex-col '>
                        <span>THE GARDEN</span>
                        <span>PLATFORM</span>
                    </h1>
                </div>
                <div className='mt-[clamp(20px,2.5vw,54px)]'>
                    <h1 className='text-[#878787] text-sm'>Connect with Us</h1>
                    <div className='flex gap-x-[clamp(15px,2.5vw,36px)] mt-[clamp(10px,2.5vw,19px)]'>
                        <span><FaTwitter className='text-lg text-[#45B26B]'/></span>
                        <span><FaFacebook className='text-lg text-[#45B26B]'/></span>
                        <span><FaLinkedinIn className='text-lg text-[#45B26B]'/></span>
                        <span><FaYoutube className='text-lg text-[#45B26B]'/></span>
                    </div>
                </div>
            </div>
           <div className='flex flex-row flex-responsive gap-x-[clamp(35px,4vw,124px)] md:mt-0 mt-[clamp(20px,2.5vw,54px)] text-center md:text-start space-y-5 md:space-y-0'>
             <div className='flex flex-col gap-y-5'>
                <span>Gallery </span>
                <span>For Creator</span>
                <span>For Supporter</span>
            </div>
            <div className='flex flex-col gap-y-5'>
                <span>Local Collection</span>
                <span>Marketplace</span>
            </div>
            <div className='flex flex-col gap-y-5'>
        <span>Cookie Policy</span>
        <span>Privacy Policy</span>
        <span>Term and Conditions</span>
            </div>
           </div>
            </div>
            <div className='flex justify-center mt-[clamp(40px,4vw,60px)]'>
                <p>© 2022 The Garden Platform</p>
            </div>
        </div>
    );
};

export default Footer;