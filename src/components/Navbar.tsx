'use client'
import assets from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import navData from '@/constant/nav-data';
import { MdMenu } from 'react-icons/md';
import Button from './ui/ButtonProps';

const Navbar = () => {
    return (
        <nav className='md:flex justify-between  items-center max-w-7xl mx-auto py-[clamp(20px,2.5vw,28px)] p-5'>
           <div className='flex items-center justify-between gap-x-2.5'>
           <div className='w-[clamp(33px,2.5vw,67px)] '>
             <Image src={assets.gardenLogo.src} className='object-cover w-full h-auto' alt="logo" width={67} height={60} />
           </div>
            <span className='whitespace-nowrap font-bold text-[min(1.2vw,_19px)] md:inline hidden'>THE GARDEN <br />PLATFORM</span>
          <span className="md:hidden block">
            <MdMenu className='text-2xl'/>
          </span>
           </div>
          <div className='flex items-center gap-x-[clamp(16px,2.5vw,52px)]'>
             <div className='md:flex gap-x-[clamp(20px,3vw,50px)] hidden'>
            {
                navData?.map((item, index) => (
                    <Link className='font-medium whitespace-nowrap text-[min(1.6vw,_16px)] text-[#777E90]' key={index} href={item.href}>{item.name}</Link>
                ))
            }
           </div >
         
         
<div className='md:inline hidden'>              <Button label='Sign in'  className='outline-[#45B26B] whitespace-nowrap text-[#45B26B] font-bold outline-2 rounded-full px-[clamp(10px,2vw,27px)] py-[clamp(5px,1vw,12px)] md:text-sm text-xs ' />
</div>        
          </div>
        </nav>
    );
};

export default Navbar;