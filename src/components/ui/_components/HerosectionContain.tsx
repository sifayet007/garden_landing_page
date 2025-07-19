import React from 'react';
import ButtonProps from '../ButtonProps';
import Button from '../ButtonProps';

const HerosectionContain = () => {
    return (
        <div className='lg:px-0 '>
            <h1 className='text-[clamp(30px,2.5vw,64px)] font-bold custom-cunia'>WELCOME TO THE GARDEN</h1>
            <p className='mt-[clamp(12px,2vw,30px)] text-[clamp(14px,2vw,20px)]'>Are you an emerging artist mastering your skills, a newcomer passionate about creative work, or just a person who loves cr eative content? 
</p>
            <p className='text-[clamp(14px,2vw,20px)]'>Whoever you are, The Garden has a place for you. </p>
            <div className='flex gap-x-[clamp(16px,2.5vw,52px)] mt-[clamp(12px,2vw,30px)]'>
                <Button label='I’m a Creator' className='  hover:bg-[#45B26B] outline-2 outline-[#45B26B] text-[#45B26B] hover:text-white py-[clamp(8px,2vw,19px)] px-[clamp(17px,2vw,25px)] rounded-full text-[clamp(12px,2vw,20px)]' />
                <Button label='I’m a Supporter' className=' hover:bg-[#45B26B] outline-2 outline-[#45B26B] text-[#45B26B] hover:text-white py-[clamp(8px,2vw,19px)] px-[clamp(17px,2vw,25px)] rounded-full text-[clamp(12px,2vw,20px)]' />
               
            </div>
        </div>
    );
};

export default HerosectionContain;