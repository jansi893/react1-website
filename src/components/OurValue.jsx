import React from 'react'
import Card2 from './Card2'

const OurValue = () => {
    return (
        <div className='flex overflow-hidden flex-col gap-10  mt-15'>
            <Card2 />
            <div className='lg:ml-[40vw] w-full'>
                <Card2 />
            </div>
            <div className='w-full items-center flex justify-center'>
                <div className='lg:w-[40vw]  h-[80vh]'>
                    <h1 className='text-2xl lg:text-4xl'>Crafting Exceptional Digital Experiences Across All Platforms: Our Goal at Øliv.</h1>
                    <div className='lg:flex lg:flex-row flex flex-col mt-8 gap-3'>
                        <p className='text-[2.2vh] lg:text-[2.5vh] text-gray-600'> At Øliv, our goal is to craft exceptional digital experiences across all platforms. In today's digitally driven world, having a strong online presence is paramount for businesses to connect with their target audience effectively. We understand the importance of delivering seamless and engaging experiences that leave a lasting impression.</p>
                        <p className='text-[2.2vh] lg:text-[2.5vh] text-gray-600'>Our team of skilled designers, developers, and digital strategists collaborate to create customized digital solutions tailored to your unique business needs. Whether it's designing a user-friendly website, developing a mobile application, or enhancing your e-commerce platform, we strive to provide solutions that not only meet but exceed your expectations.</p>
                    </div>
                </div>
            </div>
            <h1 className='mt-24 lg:mt-0 text-2xl text-gray-600'>Footer</h1>

        </div>
    )
}

export default OurValue