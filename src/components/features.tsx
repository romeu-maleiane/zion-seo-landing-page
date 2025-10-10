/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { Button } from './ui/button'
import ColoredText from './coloredText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
// import { ScrollTrigger } from "gsap/ScrollTrigger";


// gsap.registerPlugin(ScrollTrigger);

function Features() {
    useGSAP(() => {
        const firstImageTeween = gsap.timeline({
            scrollTrigger: {
                trigger: '.feature-image-1',
                start: 'top 80%'
            }
        })

        firstImageTeween.from('.feature-image-1',{
            scale: 0.80,
            opacity: 0,
            duration: 0.50,
            ease: 'power1.out'
        })

        const secondImageTeween = gsap.timeline({
            scrollTrigger: {
                trigger: '.feature-image-2',
                start: 'top 80%'
            }
        })

        secondImageTeween.from('.feature-image-2',{
            scale: 0.80,
            opacity: 0,
            duration: 0.50,
            ease: 'power1.out'
        })

        const thirdImageTeween = gsap.timeline({
            scrollTrigger: {
                trigger: '.feature-image-3',
                start: 'top 80%'
            }
        })

        thirdImageTeween.from('.feature-image-3',{
            scale: 0.80,
            opacity: 0,
            duration: 0.50,
            ease: 'power1.out'
        })

        const firstTextTeween = gsap.timeline({
            scrollTrigger: {
                trigger: '.feature-text-1',
                start: 'top 120%',
            }
        })

        firstTextTeween.from('.feature-text-1',{
            opacity: 0,
            yPercent: 80,
            duration: 0.50,
            ease: 'power1.out'
        })

        const secondTextTeween = gsap.timeline({
            scrollTrigger: {
                trigger: '.feature-text-2',
                start: 'top 120%',
            }
        })

        secondTextTeween.from('.feature-text-2',{
            opacity: 0,
            yPercent: 80,
            duration: 0.50,
            ease: 'power1.out'
        })

        const thirdTextTeween = gsap.timeline({
            scrollTrigger: {
                trigger: '.feature-text-3',
                start: 'top 120%',
            }
        })

        thirdTextTeween.from('.feature-text-3',{
            opacity: 0,
            yPercent: 80,
            duration: 0.50,
            ease: 'power1.out'
        })

    })
    return (
        <section className='md:pb-30 pb-20 flex-x-center'>
            <div className='personalized-conteiner'>
                <div className="grid grid-rows-3 justify-items-center gap-10">
                    <div className='flex flex-col lg:flex-row justify-between items-center bg-white h-fit lg:w-full lg:p-12 sm:p-8 p-6 shadow-sm rounded-3xl'>
                        <div className=''>
                            <img src={'/feature-1.webp'} loading='lazy'  alt='feature 1' className='feature-image-1 rounded-2xl xl:w-130 xl:h-130 lg:w-110 lg:h-110 md:w-170 md:h-170 sm:w-140 sm:h-140 w-70 h-70 bg-black'>
                            </img>
                        </div>
                        <div className='feature-text-1 lg:w-[50%] justify-self-start lg:pt-0 pt-5 lg:h-100 sm:h-70 h-90 flex flex-col justify-between'>
                            <h3 className=' xl:text-5xl/15 md:text-4xl/12 sm:text-3xl/10 text-2xl/8 font-bold'>Boost Search Rankings with <ColoredText text='Optimized Meta Titles & Descriptions' /> </h3>
                            <p className='xl:text-xl md:text-lg'> 
                                Automatically create SEO-optimized meta titles and descriptions for every page. 
                                Improve visibility, click-through rates, and overall search performance — 
                                without writing a single line of copy.
                            </p>
                            <div>
                                <Button size={'lg'} variant={'secondary'}>
                                    Start now
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row-reverse justify-between items-center bg-white h-fit lg:w-full lg:p-12 sm:p-8 p-6 shadow-sm rounded-3xl'>
                        <div className=''>
                            <img src={'/feature-2.webp'} loading='lazy'  alt='feature 2' className='feature-image-2 rounded-2xl xl:w-130 xl:h-130 lg:w-110 lg:h-110 md:w-170 md:h-170 sm:w-140 sm:h-140 w-70 h-70 bg-black'>
                            </img>
                        </div>
                        <div className='feature-text-2 lg:w-[50%] justify-self-start lg:pt-0 pt-5 lg:h-100 sm:h-70 h-90 flex flex-col justify-between'>
                            <h3 className=' xl:text-5xl/15 md:text-4xl/12 sm:text-3xl/10 text-2xl/8 font-bold'>Convert More Visitors with <ColoredText text='AI-Powered Product Descriptions' /> </h3>
                            <p className='xl:text-xl md:text-lg'> 
                                Instantly generate engaging, keyword-rich product descriptions tailored to your brand. 
                                Save hours of writing and turn casual browsers into loyal customers with persuasive, 
                                search-friendly copy.
                            </p>
                            <div>
                                <Button size={'lg'} variant={'secondary'}>
                                    Start now
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between items-center bg-white h-fit lg:w-full lg:p-12 sm:p-8 p-6 shadow-sm rounded-3xl'>
                        <div className=''>
                            <img src={'/feature-3.webp'} loading='lazy'  alt='feature 3' className='feature-image-3 rounded-2xl xl:w-130 xl:h-130 lg:w-110 lg:h-110 md:w-170 md:h-170 sm:w-140 sm:h-140 w-70 h-70 bg-black'>
                            </img>
                        </div>
                        <div className='feature-text-3 lg:w-[50%] justify-self-start lg:pt-0 pt-5 lg:h-100 sm:h-70 h-90 flex flex-col justify-between'>
                            <h3 className=' xl:text-5xl/15 md:text-4xl/12 sm:text-3xl/10 text-2xl/8 font-bold'>Expand Visibility Across AI Platforms with <ColoredText text='Smart LLM Indexing' /> </h3>
                            <p className='xl:text-xl md:text-lg'> 
                                Generate your llms.txt file to make your store discoverable to AI crawlers like ChatGPT and Gemini. 
                                Stay ahead of the competition by preparing your store for the future of AI search.
                            </p>
                            <div>
                                <Button size={'lg'} variant={'secondary'}>
                                    Start now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
