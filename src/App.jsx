import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Marque from './components/Marque'
import Cards1 from './components/Cards1'
import Selected from './components/Selected'
import OurValue from './components/OurValue'
import Last from './components/Last'


const App = () => {
  return (
    <div className="bg-[#FFFFFF] font-[gilroy] px-10 py-5" >
      <Navbar />
    <hr className="border-gray-200" />
      <Content />
<Marque />
<Cards1 />
<h1 className='text-zinc-600 text-xl'>Our works</h1>
<hr className='border-gray-200' />
<Selected />
<h1 className='text-2xl  text-gray-500 mt-[20vh]'>OUR VALUES</h1>
<OurValue />
<hr className='border-gray-200' />
<Last />
    </div>
  )
}

export default App