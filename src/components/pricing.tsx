'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { SplitText } from 'gsap/all'
import { plans } from '../../constants'
import PricingCard from './pricingCard'

gsap.registerPlugin(SplitText);

function Pricing() {

    useGSAP(() => {
        const pricingSplit = new SplitText('#price-section-title', { type: 'chars, words' })
        
        const priceSectionTitleTeween = gsap.timeline({
            scrollTrigger: {
                trigger: '#price-section-title',
                scrub: true,
                start: 'top 85%',
                end: 'top 40%',
            }
        })

        priceSectionTitleTeween.to(pricingSplit.chars,{
            color: 'color-mix(in oklab, var(--color-black)  80%, transparent)',
            stagger: 0.10,
        })

    })

  return (
    <section className='md:pb-30 pb-20 flex-x-center'>
        <div className='personalized-conteiner'>
            <h2 id='price-section-title' className='md:pb-10 pb-5 text-center text-black/40 xl:text-6xl  md:text-5xl sm:text-4xl text-3xl font-semibold'>
                Flexible SEO Plans Built for Growing E-commerce Brands
            </h2>

            <div className='flex-x-center w-full'>
                <div className='h-fit grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 justify-items-center gap-5 lg:w-[70%]'>
                    {plans.map(({name, price, description, features, url, mostPopular}, i) => (
                        <PricingCard name={name} price={price} description={description} features={features} url={url} mostPopular={mostPopular} key={i} />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pricing
