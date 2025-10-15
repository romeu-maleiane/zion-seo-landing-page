import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from '../../constants'


function FAQ() {
    return (
        <section className='md:pb-30 pb-20 flex-x-center'>
            <div className='personalized-conteiner'>
                <h2 className='md:pb-10 pb-5 text-center text-black/80 xl:text-6xl  md:text-5xl sm:text-4xl text-3xl font-semibold'>
                    Frequently Asked Questions
                </h2>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                >
                    {faqs.map(({ title, description }, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className='lg:px-8 sm:px-6 px-4'>
                            <AccordionTrigger className='text-black/80 md:text-2xl text-xl font-semibold'>{title}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-5 md:text-lg">{description}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

export default FAQ
