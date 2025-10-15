'use client'

import React from 'react'
import { Button } from './ui/button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function CallToAction() {

    useGSAP(() => {
        const callToActionTextTween = gsap.timeline({
            scrollTrigger: {
                trigger: '#title,#description',
                start: 'top 85%'
            }
        })

        callToActionTextTween.from('#title,#description',{
            yPercent: 50,
            opacity: 0,
            duration: 0.80
        })

        const callToActionButtomTween = gsap.timeline({
            scrollTrigger: {
                trigger: '#description',
                start: 'bottom 80%',
            }
        })

        callToActionButtomTween.from('#action',{
            yPercent: 600,
            opacity: 0,
            duration: 0.30,
        })
    })

    return (
        <div className='flex-center flex-col gap-5 md:gap-10 md:mb-30 mb-20'>
            <h2 id='title' className='text-center text-black/80 xl:text-6xl  md:text-5xl sm:text-4xl text-3xl font-semibold'>Start for free today</h2>
            <p id='description' className='md:w-150 w-80 text-center md:text-xl text-lg'>
                At Zion SEO, we deliver results that make a real difference.
                Hear directly from our clients about their experiences and the impact we’ve made.
            </p>
            <div id='action' >
                <Button variant={'secondary'} size={'lg'} className='w-fit' >Start now</Button>
            </div>
        </div>
    )
}

export default CallToAction
