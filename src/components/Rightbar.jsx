import React from 'react'
import Online from './Online'

function Rightbar() {
  return (
    <div className='rightbar w-100 dark:border-l dark:border-l-pink-300 md:h-[calc(100vh-50px)] overflow-y-scroll'>
      <div className="w-100 px-3">
        <div className='flex mt-6 items-center'>
          <img src={'../../public/gift.png'} className='w-10' alt="" />
          <p><b>Ajay</b> and <b>3 other friends</b> <span className=' font-light'>have a birthday today</span></p>
        </div>
        <div className='py-3'>
          <img src={'../../public/ad.png'} className='rounded-lg' alt="" />
        </div>
        <h4 className='font-bold mt-6 mb-2'>Online Friends</h4>
        <div className='flex flex-col gap-2'>
          <Online />
          <Online />
          <Online />
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Rightbar
