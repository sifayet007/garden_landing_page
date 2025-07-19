import React from 'react';
import Button from './ui/ButtonProps';
import Image from 'next/image';
import assets from '@/assets';

const SeedTokenInfoSection = () => {
    return (
        <div className='px-[clamp(20px,6vw,108px)] mt-[clamp(40px,4vw,60px)] w-full md:text-center flex flex-col md:items-center relative'>
             <div className='md:hidden block md:w-[398px] w-[200px] md:h-[398px] h-[200px] bg-[#FFCF29]/20 absolute right-1/3  blur-[80px]'></div>
            
            <div className='flex justify-center'>

                <Image src={assets.leafBag} alt='leat bag' width={147} height={164} className='md:absolute left-[clamp(20px,10vw,214px)] bottom-0 md:w-[clamp(80px,10vw,147px)]'/>
                <Image src={assets.leaf} alt='leat bag' width={104} height={104}  className='md:absolute right-[clamp(20px,10vw,214px)] top-0 -translate-y-10 md:-translate-0'/>
            </div>
            <h1 className='text-[clamp(36px,4vw,48px)] font-semibold uppercase custom-cunia'>it’s not just that...</h1>
            <p className='leading-relaxed md:max-w-[607px] mt-[clamp(18px,4vw,30px)] '>You can also support the creators by commenting on their posts and giving donations directly to them in $SEED. The creators can later use their $SEaED to buy tools and materials in our Marketplace.</p>
            <h3 className='text-[#45B26B] mt-[clamp(25px,4vw,37px)] text-[clamp(24px,2.5vw22px)] mb-5'>What is $SEED?</h3>
            <p className='md:max-w-[604px]'>When you buy $SEED, a part of them will go to The Garden fund, which is used for spotlighting emerging talents andorganizing Grassroots events.</p>
             <Button label='Become a Supporter' className=' mt-[clamp(26px,4vw,41px)] bg-[#45B26B] w-fit outline-2 outline-[#45B26B]  text-white py-[clamp(8px,2vw,10px)] px-[clamp(17px,2vw,25px)] rounded-full text-[clamp(12px,2vw,20px)]' />
        </div>
    );
};

export default SeedTokenInfoSection;