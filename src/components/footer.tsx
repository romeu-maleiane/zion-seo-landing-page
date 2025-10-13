'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


function Footer() {

    useGSAP(() => {
        const footerTween = gsap.timeline({
            scrollTrigger: {
                trigger: '#footer',
                start: 'top 10%',
            }
        })

        footerTween.from('#footer',{
            opacity: 0,
            duration: 0.30,
        })
    })

    return (
        <footer id='footer' className='font-poppins flex-x-center md:h-180 h-200 overflow-hidden bg-blue-500 clip-reverse-trapezoid' >
            <div className='personalized-conteiner text-white flex flex-col justify-between'>
                <div className='flex md:flex-row flex-col md:gap-0 gap-5 md:items-center items-start justify-between pt-70'>
                    <div className='w-70 flex justify-start gap-5 flex-col'>
                        <Link href={'/'}>
                            <Image src={'/zion-seo-logo.webp'} height={40} width={40} alt='logo' className='rounded-md' />
                        </Link>

                        <p className='text-sm'>
                            Zion SEO uses AI to help e-commerce stores grow by automating keyword research, content generation, 
                            and SEO optimization driving more traffic, visibility, and sales effortlessly.
                        </p>
                    </div>

                    <div className='flex flex-col  items-start justify-center gap-2'>
                        <Link href={'/#'}>
                            Terms of service
                        </Link>
                        <Link href={'/#'}>
                            Privacy policy
                        </Link>
                    </div>

                    <div className='flex flex-col  items-start justify-center gap-2'>
                        <Link type='email' href={'mailto:romeumaleiane1@gmail.com'}>Send us a message</Link>
                        <p>© {new Date().getFullYear()} Zion SEO</p>
                    </div>
                </div>

                <div className='text-center md:text-9xl text-7xl font-extrabold'>
                    <Link href={'/'}>
                        Zion SEO
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
