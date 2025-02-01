import React from 'react'

const Navbar = () => {
  return (
 <>
 <nav className="flex justify-between items-center h-[9vh]">
    <div className="section-1 flex items-center justify-center gap-5">
        <img className="h-[4vh]" src="https://cdn.prod.website-files.com/63c3f1995d4c3581bbc944b5/63c3fed42405e70f33df42ee_logo.svg" alt="" />
    <button className="lg:flex hidden px-3 py-2 bg-[#F8EDE3] rounded-xl hover:bg-[#B4CBE2] duration-150 text-xs">We are hiring!</button>
    </div>
    <div className="section-2 flex items-center gap-8">
        <a className="hidden lg:flex relative group" href="#">Work
<span className='absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full'></span>
        </a>
        <a className="hidden lg:flex relative group" href="#">Service
        <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full'></span>
        </a>
        <a className="hidden lg:flex relative group" href="#">About
        <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full'></span>
        </a>
        <a className="hidden lg:flex relative group" href="#">Blog
        <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full'></span>
        </a>
        <a className="hidden lg:flex relative group" href="#">Pages
        <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full'></span>
        </a>
        <a className="hidden lg:flex items-center gap-4 relative group" href="#">Cart 
          <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full'></span>
          <span className="px-1 rounded-full bg-[#F8EDE3]">0</span></a>
        <a className="lg:px-4 lg:py-2 px-2 py-1 border rounded-full hover:bg-black hover:text-white duration-300" href="#">Get in Touch</a>
    </div>
 </nav>
 </>

  )
}

export default Navbar