'use client'

import { CircleCheck, Globe } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'



function Hero() {

    useGSAP(() => {

        gsap.from('#hero', {
            yPercent: 100,
            opacity: 0,
            duration: 1,
            ease: 'power1.inOut'
        })

        gsap.from('#hero_image_2', {
            xPercent: 100,
            opacity: 0,
            duration: 1,
            ease: 'power1.inOut'
        })

    }, [])

    return (
        <section className='h-fit flex-x-center z-10 top-0'>
            <div className='personalized-conteiner'>
                <div id='hero' className='md:pt-30 pt-35 w-95 md:w-115 xl:w-175'>
                    <div className='flex-center gap-1 md:text-sm text-xs font-semibold py-2 px-4 bg-[#ffffff50] rounded-full w-fit'>
                        <Globe height={20} width={20} />
                        <p>Start ranking on Google and ChatGPT</p>
                    </div>
                    <h1 className='text-black/80 xl:text-8xl/25 md:text-7xl/19 text-6xl/17 font-bold md:pt-5 pt-10'>
                        AI-powered SEO to grow your store’s visibility
                    </h1>

                    <p className='pt-5 w-95 md:text-lg'>
                        Optimize your product content and generate LLMs.txt
                        to make your store visible on Google and ChatGPT.
                    </p>

                    <div className='pt-5'>
                        <Button variant={'secondary'}>
                            Start now
                        </Button>

                        <div className='flex items-center justify-start gap-1 text-lg pt-5'>
                            <CircleCheck className='text-blue-400' height={20} width={20} />
                            <p>No credit card required</p>
                        </div>
                    </div>
                </div>

                <div className='hidden lg:block absolute h-fit top-43 right-14'>
                    <Image className='border-8 border-[#ffffff50] rounded-xl shadow-2xl' src={'/hero_image_1.webp'} height={500} width={500} alt='hero image 1' />
                    <Image id='hero_image_2' className='rounded-md border-4 border-[#ffffff50] shadow-lg absolute -top-10 right-10' src={'/hero_image_2.webp'} height={200} width={200} alt='hero image 2' />
                </div>
            </div>
        </section>
    )
}

export default Hero
