import React from 'react';
import bannerImg from '../../assets/images/hero.png'

const Banner = () => {
    return (
        <div className='min-h-[80vh] space-y-8 pt-13'>
          <h2 className='font-bold text-6xl text-center '>We Build <br /> <span className='text-purple-500'>Productive</span> Apps</h2>
          <p className=' text-gray-600 max-w-[50%] mx-auto' >At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter,and more exciting. Our goal is to turn your ideas into digital  experiences that truly make an impact.</p>

          <div className='flex justify-center gap-2'>
            <button className='btn'>Google Play</button>
            <button className='btn'>App Store</button>
          </div>
          <img className='mx-auto pt-5' src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;