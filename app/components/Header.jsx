import React from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';

const Header = () => {
    return (
       <div className='w-11/12 max-w-3xl mx-auto text-center h-screen flex flex-col items-center justify-center gap-4'>
        <div>
            <Image src={assets.profile_img} alt='' className='rounded-full w-42'/>
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Binari Dissanayake <Image src={assets.hand_icon} alt='' className='w-6'/></h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'> Software Engineer</h1>
        <p className='max-w-2xl mx-auto font-Ovo'>I'm a passionate bla bla...</p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href='#contact' className='flex items-center gap-2 px-10 py-3 border-white border-gray-500 rounded-full ml-4 bg-black text-white font-Ovo'>Contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/></a>
            <a href='/sample-resume.pdf' download className='flex items-center gap-2 px-10 py-3 border border-gray-500 rounded-full ml-4 font-Ovo'>My Resume<Image src={assets.download_icon} alt='' className='w-4'/></a>
        </div>
       </div>
    );
}

export default Header;