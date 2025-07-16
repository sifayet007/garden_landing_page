'use client'
import { hallOfFameData } from '@/constant/hallOfFameData'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Button from './ui/ButtonProps'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'



const CARD_WIDTH = 198;

function HallOfFameUser() {
 
 const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -CARD_WIDTH : CARD_WIDTH,
      behavior: 'smooth',
    });
  };
  
  useEffect(()=>{
    const el = scrollRef.current
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
   <div>
     <div className=' lg:px-[173px] mt-[clamp(40px,4vw,60px)] px-5 relative'>
      <h1 className='text-[clamp(24px,2.5vw,57px)] font-bold mb-[clamp(35px,2vw,57px)]'>
        Hall Of Fame
      </h1>
      <div className='lg:block hidden '>
    <Button icon={<FaArrowRightLong />}  className='text-[#777E90] text-[clamp(14px,2vw,18px)] font-bold absolute right-20 top-[60%] translate-y-1/2 ' onclick={()=>scrollByCard('right')}  />
    <Button icon={<FaArrowLeftLong />} className='text-[#777E90] text-[clamp(14px,2vw,18px)] font-bold absolute  left-20 bottom-1/3 translate-y-1/2'  onclick={()=>scrollByCard('left')}/>
      </div>
      <div className='flex justify-between gap-x-5 overflow-x-auto ' ref={scrollRef}>
        {
          hallOfFameData.map((user, index : number) => (
            <div key={index} className='w-[198px] bg-[#FCFCFD] hover:scale-110 duration-300 ease-in-out'>
              
             <div className='w-[198px] flex flex-col items-center gap-y-2.5 p-6'>
               <div className='w-[64px] h-[64px] rounded-full flex '>
                <Image src={user.avatar} alt={user.name} width={64} height={46} className='w-full h-auto object-cover object-center  rounded-full' />
              </div>
              <div className='text-center'>
                <h1 className='text-sm font-medium'>{user.name}</h1>
                <span className='text-[#A0A0A0] text-xs'>
                   {user.highlights} Highlight
                </span>
                <p className='text-xs'><span>{user.seed}</span>
                  <span className='text-[#A0A0A0]'> $SEED</span>
                </p>
              </div>
              
            </div>
             </div>
          ))
        }
      </div>
    </div>
    <div>
     
    </div>
   </div>
  )
}

export default HallOfFameUser
