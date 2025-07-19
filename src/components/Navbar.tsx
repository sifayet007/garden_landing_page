'use client'
import assets from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import navData from '@/constant/nav-data';
import Button from './ui/ButtonProps';
import { CiMenuFries } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
    return (
       <> <nav className='md:flex justify-between  items-center max-w-7xl mx-auto py-[clamp(20px,2.5vw,28px)] p-5'>
           <div className='flex items-center justify-between gap-x-2.5'>
           <div className='w-[clamp(33px,2.5vw,67px)] '>
             <Image src={assets.gardenLogo.src} className='object-cover w-full h-auto' alt="logo" width={67} height={60} />
           </div>
            <span className='whitespace-nowrap font-bold text-[min(1.2vw,_19px)] md:inline hidden custom-cunia'>THE GARDEN <br />PLATFORM</span>
          <span className="md:hidden block">
            <CiMenuFries  onClick={() => setIsOpen(!isOpen)} className='text-2xl'/>
          </span>
           </div>
          <div className='flex items-center gap-x-[clamp(16px,2.5vw,52px)]'>
             <div className='md:flex gap-x-[clamp(20px,3vw,50px)] hidden '>
            {
                navData?.map((item, index) => (
                    <Link className='font-medium whitespace-nowrap text-[min(1.6vw,_16px)]  text-[#777E90]' key={index} href={item.href}>{item.name}</Link>
                ))
            }
           </div >
         
         
<div className='md:inline hidden'> 
   <Button label='Sign in'  className='outline-[#45B26B] whitespace-nowrap text-[#45B26B] font-bold outline-2 rounded-full px-[clamp(10px,2vw,27px)] py-[clamp(5px,1vw,12px)] md:text-sm text-xs ' />
</div>        
    </div>
    </nav>
   {/* mobile nav */}
  {
    isOpen && ( <div className='md:hidden block h-screen w-full  backdrop-blur-xs fixed top-0 left-0 z-50'>
      <nav className='md:hidden block h-screen w-[70%] md:w-1/2 bg-white fixed top-0 left-0 z-50 felx flex-col justify-center justify-items-center pt-24'>
      <div>
       <RxCross2 onClick={() => setIsOpen(!isOpen)} className='text-2xl absolute top-5 right-5  cursor-pointer'/>
      </div>
       <div className='w-[clamp(33px,2.5vw,67px)] '>
             <Image src={assets.gardenLogo.src} className='object-cover w-full h-auto' alt="logo" width={67} height={60} />
           </div>
    <div>
      {
      navData?.map((item, index) => (
            <Link className=' flex flex-col justify-center items-center whitespace-nowrap font-medium  text-[#777E90] p-4' key={index} href={item.href}>{item.name}</Link>
        ))
    }
    </div>
    <div className=''> 
   <Button label='Sign in'  className='outline-[#45B26B] whitespace-nowrap text-[#45B26B] font-bold outline-2 rounded-full px-[clamp(10px,2vw,27px)] py-[clamp(5px,1vw,12px)] md:text-sm text-xs ' />
</div>
    
    </nav>
    </div>)
  }
    </>
    );
};

export default Navbar;