import React from 'react'

import Photo from '../assets/photo.jpeg'

function PSection() {
  return (
    <div>
        <div className='flex justify-center py-10'>
            <h1 className='text-2xl font-semibold'>On a mission to teach Millions</h1>
        </div>

        <div className='px-28 pb-20'>
            <img src={Photo} alt='not showing'/>
        </div>
    </div>
  )
}

export default PSection