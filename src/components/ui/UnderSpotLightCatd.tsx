import nftItems from '@/constant/under-spotlight-data';
import { IUnderDataType } from '@/interfaces/under-data-interface';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import { FaComment } from 'react-icons/fa';

const UnderSpotLightCatd = () => {
    const geeksForGeeksRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
      const el = geeksForGeeksRef.current
      if(!el) return
      const onWheel = (e: WheelEvent)=>{
        if(e.deltaY === 0 ) return
        e.preventDefault()
        el.scrollBy({
          left: e.deltaY,
          behavior: 'smooth',
        })
      }
      el.addEventListener('wheel', onWheel , {passive:false})
      return()=>{
        el.removeEventListener('wheel', onWheel)
      }
    },[])
   
    return (
        <div ref={geeksForGeeksRef} className='flex flex-row w-full gap-x-5 overflow-auto scrolbar-none'>
            {
                nftItems.map((item ,  index : number) => (
                    <div key={index} className='bg-white p-[15px] rounded-lg ' >
                       <div className='flex gap-x-2.5'>
                        <div className='relative rounded-full h-[27px] w-[27px]'>
                            <Image src={item.avatar} className='rounded-full w-full object-center object-cover inset-0 ' fill alt={item.title} />
                        </div>
                        <h1 className='font-medium text-xs whitespace-nowrap'>{item.creator}</h1>
                       </div>
                       <div className='mt-2.5 w-[195px] h-[195px]'>
                        <Image src={item.Image} width={195} height={195} className='' alt={item.title} />
                       </div>
                       <div className='flex justify-between mt-3'>
                        <span className='bg-[#F7F7F7] text-[12px] h-fit p-[3px] rounded-md'>{item.mintStatus}</span>
                        <div>
                            <span></span>
                            <span className='text-[14px]'>{item.price}</span>
                        </div>

                       </div>
                        <h1 className='mt-2.5 text-[12px]'>{item.title}</h1>
                        <div className='flex items-center gap-x-5 mt-2.5'>
                            <div className='flex gap-x-2.5 items-center'>
                                <span><BsFillHeartFill className='text-[#FF0000]'/></span>
                                <span className='text-[12px]'>{item.likes}</span>
                            </div>
                            <div className='flex gap-x-2.5 items-center'>
                                <span><FaComment className='text-[#616161]'/></span>
                                <span className='text-[12px]'> {item.comment}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default UnderSpotLightCatd;