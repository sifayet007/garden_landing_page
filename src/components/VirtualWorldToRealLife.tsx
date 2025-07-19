import virtualToRealLifeData from '@/constant/fromToRealLife';
import { IVirtualToRealDataType } from '@/interfaces/fromToReal.interface';
import Image from 'next/image';
import React from 'react';
import Button from './ui/ButtonProps';
import LeafWatereMark from './ui/LeafWatereMark';

const VirtualWorldToRealLife = () => {
    return (
       <div>
         <div className='px-[clamp(20px,6vw,173px)] mt-[clamp(40px,4vw,60px)] '>
            <h1 className='uppercase text-[clamp(24px,2.5vw,57px)]  font-bold' >From Virtual</h1>
            <h1 className='uppercase text-[clamp(24px,2.5vw,57px)]    font-bold '>world to real Life</h1>
            <div className='flex flex-col md:flex-row md:gap-x-10 md:gap-y-0 gap-y-[31px] mt-[clamp(31px,5vw,94px)]'>
                {
                   virtualToRealLifeData?.map((item , index: number) => (
                        <div key={index} className='pt-[clamp(38px,4vw,64px)] px-[clamp(20px,4vw,45px)] pb-10 drop-shadow-2xl bg-white rounded-4xl w-full'>
                           <div className='relative bg-[#45B26B] w-[66px] h-[66px] rounded-full flex justify-center items-center p-4'>
                            <Image src={item.image} alt={item.title} className='w-full h-full
                             object-cover object-center inset-0' />

                           </div>
                           <div>
                            <h1 className='text-[clamp(22px,2.5vw,26px)] font-bold  mt-[clamp(20px,2.5vw,15px)] uppercase'>{item.title}</h1>
                            <p className='text-[clamp(14px,2.5vw,18px)] mt-[clamp(20px,2.5vw,15px)]'>{item.description}</p>
                            <Button label={item.buttonText} className='md:text-base text-sm outline-2 outline-[#45B26B] py-[clamp(10px,2.5vw,20px)] rounded-full px-[clamp(20px,2vw,33px)] mt-[clamp(20px,2vw,40px)]' />
                           </div>
                        </div>
                   ))
                }
            </div>
        </div>
        <div>
            <LeafWatereMark/>
        </div>
       </div>
    );
};

export default VirtualWorldToRealLife;