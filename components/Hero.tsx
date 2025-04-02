"use client"
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div className='flex-1'>
            <section id='home' className='max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-6'>

                <div className='flex-1'>
                    <p className='text-gray-400 text-xl mb-4'>Hello I am</p>
                    <h1 className='text-3xl md:text-5xl font-bold mb-4'>Efe Görkem</h1>

                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'FullStack Developer',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            '',
                           
                        ]}
                        wrapper="span"
                        speed={50}
                        className='text-3xl md:text-5xl font-bold font-poppins mb-8 text-amber-500'
                        repeat={Infinity}
                    />

                    <p className='text-gray-400 text-lg mb-6 max-w-md mt-8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestiae animi deserunt saepe eaque harum voluptate in sed fugiat, porro quasi quisquam doloremque! Quisquam itaque nisi deleniti et fugit quas.
                    </p>
                    <div>
                        <Button className='bg-amber-500 hover:bg-amber-600 text-white px-6 py-6'>
                            Hire me
                        </Button>
                    </div>

                </div>

                <div className='flex-1 flex flex-col justify-center items-center'>
                    <div className='relative w-64 h-64 md:h-80 lg:w-80'>
                        <Image
                            src="/profile.jpg"
                            alt="Profile Photo"
                            width={500}
                            height={500}
                            className="object-cover rounded-full"
                            priority
                        />

                    </div>
                    <div className='flex items-center gap-3 mt-8'>
                        <Button variant={"secondary"} className='cursor-pointer hover:scale-125 transition-all duration-700'>
                            <Twitter />
                        </Button>
                        <Button variant={"secondary"} className='cursor-pointer hover:scale-125 transition-all duration-700'>
                            <Instagram />
                        </Button>
                        <Button variant={"secondary"} className='cursor-pointer hover:scale-125 transition-all duration-700'>
                            <Facebook />
                        </Button>
                        <Button variant={"secondary"} className='cursor-pointer hover:scale-125 transition-all duration-700'>
                            <Linkedin />
                        </Button>

                    </div>

                </div>


            </section>

        </div>
    )
}

export default Hero