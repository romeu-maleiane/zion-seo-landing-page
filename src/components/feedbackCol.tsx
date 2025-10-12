/* eslint-disable react/no-unescaped-entities */
'use client'

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

interface FeedbackColProps { 
    testimonials: Array<{ 
        feedback: string 
        name: string
        photo: string
        store: string 
    }>
    duration?: number
    className?: string 
}

function FeedbackCol({ testimonials, duration, className }: FeedbackColProps) {

    const trackRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const track = trackRef.current;
        if (!track) return;

        const group = track.children[0] as HTMLElement;
        const totalHeight = group.offsetHeight 

        gsap.to(track, {
            y: -totalHeight,
            duration: duration || 15,
            ease: "linear",
            repeat: -1,
            modifiers: {
                y: gsap.utils.unitize((y) => parseFloat(y) % totalHeight),
            },
        });
    }, []);

    return (
        <div className={twMerge(`feedback-track ${className}`)} ref={trackRef}>
            {[...Array(3)].map((_, i) => (
                <div key={i} className="feedback-group">
                    {testimonials.map(({ feedback, name, photo, store }, j) => (
                        <div key={j} className="feedback-card">
                            <p className="md:text-lg">" {feedback} "</p>
                            <div className="flex items-center gap-2">
                                <Image src={photo} width={40} height={40} alt={`${name} testimonial`} className="rounded-full" />
                                <div className="flex flex-col">
                                    <div className="font-medium tracking-tight leading-5">{name}</div>
                                    <div className="leading-5 tracking-tight">{store}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default FeedbackCol
