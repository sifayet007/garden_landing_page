import React from 'react';
import Image from 'next/image';
import assets from '@/assets';
import { LuMoveRight } from 'react-icons/lu';
import Button from './ui/ButtonProps';

const GardenCommunityStory = () => {
    return (
        <div className='flex justify-between lg:px-[100px] mt-[clamp(40px,4vw,60px)] px-5'>
            <div className=''>
                <p className='text-[clamp(14px,2vw,20px)] line-clamp-3 '>The Garden was born out of an effort to create a community for creators to show their work, learn and grow through the community’s support.</p>
                <Button label='Read our story' iconPosition='right' className='text-[#259F46] text-[clamp(14px,2vw,18px)] font-bold' icon={<LuMoveRight />}  />
            </div>
            <div >
                <Image src={assets.storyCommunityImg} alt='story community image' />
            </div>
        </div>
    );
};

export default GardenCommunityStory;