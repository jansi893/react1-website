import React from 'react'
import Selected2 from './Selected2'

const Selected = () => {
  return (
    <div className='overflow-hidden'>
        <div className='section-1 py-5 flex flex-col gap-10'>
            <div className='p-1 flex w-full items-center justify-between '>
            <h1 className='lg:text-4xl text-2xl font-semi text-zinc-600'>Selected Work</h1>
            <button className='lg:px-5 lg:py-2 px-2 py-1 text-sm lg:text-xl border rounded-full hover:bg-black hover:text-white duration-300 '>All Work</button>
            </div>
            <br />
           < Selected2 />
                   </div>
    </div>
  )
}

export default Selected