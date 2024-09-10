import React from 'react'
import img1 from '../assets/s1.png'
import img2 from '../assets/s2.png'
import img3 from '../assets/s3.png'
import img4 from '../assets/s4.png'
import img5 from '../assets/s5.png' 
import img6 from '../assets/s6.png' 
import img7 from '../assets/s7.png' 
import img8 from '../assets/s8.png' 
import img9 from '../assets/s9.png' 
import img10 from '../assets/s10.png' 
import img11 from '../assets/s11.png' 
import img12 from '../assets/s12.png'

function Selected() {
  return (
    <div className='bg-[#f8f8fd]'>
        <div className='flex justify-center items-center pt-10'>
            <h1 className='text-2xl text-[#5e75c8] font-bold'>Our Selected Students</h1>
        </div>

        <div className='px-28 flex justify-evenly pt-10'>
            <div className='flex flex-col w-[450px] gap-10'>
                <img src={img1} alt="not showing" />
                <img src={img2} alt="not showing" />
                <img src={img3} alt="not showing" />
                <img src={img4} alt="not showing" />
                <img src={img5} alt="not showing" />
                <img src={img6} alt="not showing" />
            </div>

            <div className='flex flex-col w-[450px] gap-10'>
                <img src={img7} alt="not showing" />
                <img src={img8} alt="not showing" />
                <img src={img9} alt="not showing" />
                <img src={img10} alt="not showing" />
                <img src={img11} alt="not showing" />
                <img src={img12} alt="not showing" />
            </div>
        </div>
        <div className='flex justify-center pt-10 pb-20'>
            <button className='bg-[#5e75c8] text-white text-xl px-4 py-2 rounded-lg font-semibold'>See More <i class="ri-arrow-right-s-line"></i> </button>
        </div>
    </div>
  )
}

export default Selected