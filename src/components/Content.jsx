import React from 'react'

const Content = () => {
  return (
    <div className="h-[85vh] flex items-center ">
      <div className="flex flex-col gap-10">
      <div className="part-1 w-[80%] flex flex-col gap-3">     
         <h1 className="lg:text-8xl text-4xl">Building Brands, One Success Story at a Time.</h1>
         <h3 className="lg:w-[60%] lg:text-2xl">Create a Brand That Resonates: We Can Help You Define and Communicate Your Unique Message.</h3>
         </div>
         <div className="part-2">
         <button className="px-10 py-4 border bg-black text-white rounded-full hover:bg-zinc-900 duration-300">Our Services</button>
         </div>
      </div>

    </div>
  )
}

export default Content