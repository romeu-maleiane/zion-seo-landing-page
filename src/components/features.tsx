/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { Button } from './ui/button'
import ColoredText from './coloredText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Features() {
    useGSAP(() => {
        const firstImageTeween = gsap.timeline({
            scrollTrigger: {
                trigger: '#feature-image-1',
                start: 'top 80%'
            }
        })

        firstImageTeween.from('#feature-image-1', {
            scale: 0.80,
            opacity: 0,
            duration: 0.50,
            ease: 'power1.out'
        })

        const secondImageTeween = gsap.timeline({
            scrollTrigger: {
                trigger: '#feature-image-2',
                start: 'top 80%'
            }
        })

        secondImageTeween.from('#feature-image-2', {
            scale: 0.80,
            opacity: 0,
            duration: 0.50,
            ease: 'power1.out'
        })

        const thirdImageTeween = gsap.timeline({
            scrollTrigger: {
                trigger: '#feature-image-3',
                start: 'top 80%'
            }
        })

        thirdImageTeween.from('#feature-image-3', {
            scale: 0.80,
            opacity: 0,
            duration: 0.50,
            ease: 'power1.out'
        })

        const fourthImageTeween = gsap.timeline({
            scrollTrigger: {
                trigger: '#feature-image-4',
                start: 'top 80%'
            }
        })

        fourthImageTeween.from('#feature-image-4', {
            scale: 0.80,
            opacity: 0,
            duration: 0.50,
            ease: 'power1.out'
        })

        const firstTextTeween = gsap.timeline({
            scrollTrigger: {
                trigger: '#feature-text-1',
                start: 'top 120%',
            }
        })

        firstTextTeween.from('#feature-text-1', {
            opacity: 0,
            yPercent: 80,
            duration: 0.50,
            ease: 'power1.out'
        })

        const secondTextTeween = gsap.timeline({
            scrollTrigger: {
                trigger: '#feature-text-2',
                start: 'top 120%',
            }
        })

        secondTextTeween.from('#feature-text-2', {
            opacity: 0,
            yPercent: 80,
            duration: 0.50,
            ease: 'power1.out'
        })

        const thirdTextTeween = gsap.timeline({
            scrollTrigger: {
                trigger: '#feature-text-3',
                start: 'top 120%',
            }
        })

        thirdTextTeween.from('#feature-text-3', {
            opacity: 0,
            yPercent: 80,
            duration: 0.50,
            ease: 'power1.out'
        })

        const fourthTextTeween = gsap.timeline({
            scrollTrigger: {
                trigger: '#feature-text-4',
                start: 'top 90%',
            }
        })

        fourthTextTeween.from('#feature-text-4', {
            opacity: 0,
            yPercent: 80,
            duration: 0.50,
            ease: 'power1.out'
        })

    })
    return (
        <section id='features' className='md:pb-30 pb-20 flex-x-center'>
            <div className='personalized-conteiner space-y-10'>
                <div className="grid grid-rows-3 justify-items-center gap-10">
                    <div className='feature-card'>
                        <div className=''>
                            <img src={'/feature-1.webp'} loading='lazy' alt='feature 1' id='feature-image-1 ' className='rounded-2xl xl:w-130 xl:h-130 lg:w-110 lg:h-110 md:w-170 md:h-170 sm:w-140 sm:h-140 w-70 h-70 bg-black'>
                            </img>
                        </div>
                        <div id='feature-text-1' className='feature-content'>
                            <h3 className='feature-title'>Boost Search Rankings with <ColoredText text='Optimized Meta Titles & Descriptions' /> </h3>
                            <p className='feature-description'>
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
                    <div className='feature-card-reverse'>
                        <div className=''>
                            <img src={'/feature-2.webp'} loading='lazy' alt='feature 2' id='feature-image-2' className='rounded-2xl xl:w-130 xl:h-130 lg:w-110 lg:h-110 md:w-170 md:h-170 sm:w-140 sm:h-140 w-70 h-70 bg-black'>
                            </img>
                        </div>
                        <div id='feature-text-2' className=' feature-content'>
                            <h3 className='feature-title'>Convert More Visitors with <ColoredText text='AI-Powered Product Descriptions' /> </h3>
                            <p className='feature-description'>
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
                    <div className='feature-card'>
                        <div className=''>
                            <img src={'/feature-3.webp'} loading='lazy' alt='feature 3' id='feature-image-3' className='rounded-2xl xl:w-130 xl:h-130 lg:w-110 lg:h-110 md:w-170 md:h-170 sm:w-140 sm:h-140 w-70 h-70 bg-black'>
                            </img>
                        </div>
                        <div id='feature-text-3' className='feature-content'>
                            <h3 className='feature-title'>Expand Visibility Across AI Platforms with <ColoredText text='Smart LLM Indexing' /> </h3>
                            <p className='feature-description'>
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
                <div className='flex flex-col justify-between items-center text-white feature-bg w-full h-fit gap-5 lg:pt-12 pt-8 lg:px-12 sm:px-8 p-x6 shadow-sm rounded-3xl'>
                    <div id='feature-text-4' className='flex flex-col justify-between items-center gap-5'>
                        <h3 className='feature-title text-center  w-[80%]'>Rank on Google and AI assistants like ChatGPT with <ColoredText text='AI-powered content' /> </h3>
                        <p className='feature-description text-center w-[70%] '>
                            Optimize your content to reach shoppers wherever they search
                            — from Google to the next generation of AI tools.
                        </p>
                        <div>
                            <Button size={'lg'} variant={'secondary'}>
                                Start now
                            </Button>
                        </div>
                    </div>
                    <img src="/google-chatgpt.webp" loading='lazy' alt="google and chatgpt" id='feature-image-4' className='lg:w-190 lg:h-140 sm:w-170 sm:h-120 w-full h-fit' />
                </div>
            </div>
        </section>
    )
}

export default Features
