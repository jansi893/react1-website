import React from 'react'

const Navbar = () => {
  return (
 <>
 <nav className="flex justify-between items-center h-[9vh]">
    <div className="section-1 flex items-center justify-center gap-5">
        <img className="h-[4vh]" src="https://cdn.prod.website-files.com/63c3f1995d4c3581bbc944b5/63c3fed42405e70f33df42ee_logo.svg" alt="" />
    <button className="px-3 py-2 bg-[#F8EDE3] rounded-xl hover:bg-[#B4CBE2] duration-150 text-xs">We are hiring!</button>
    </div>
    <div className="section-2 flex items-center gap-8">
        <a className="" href="#">Work</a>
        <a className="" href="#">Service</a>
        <a className="" href="#">About</a>
        <a className="" href="#">Blog</a>
        <a className="" href="#">Pages</a>
        <a className="flex items-center gap-4" href="#">Cart <span className="px-1 rounded-full bg-[#F8EDE3]">0</span></a>
        <a className="px-4 py-2 border rounded-full hover:bg-black hover:text-white duration-300" href="#">Get in Touch</a>
    </div>
 </nav>
 </>

  )
}

export default Navbar