'use client'
import { testimonials } from '../../constants'
import FeedbackCol from './feedbackCol'

function Feedback() {
    const firstTestemonials = testimonials.slice(0, 3)
    const secondTestemonials = testimonials.slice(3, 6)
    const thirdTestemonials = testimonials.slice(6, 9)

    return (
        <section className='font-poppins md:pb-30 pb-20 flex-x-center'>
            <div className='personalized-conteiner flex-center gap-5 md:gap-10 flex-col'>
                <h2 className='text-center text-black/80 xl:text-6xl  md:text-5xl sm:text-4xl text-3xl font-semibold'>What our clients say</h2>
                <p className='md:w-150 w-80 text-center md:text-lg'> 
                    At Zion SEO, we deliver results that make a real difference. 
                    Hear directly from our clients about their experiences and the impact we’ve made.  
                </p>
                <div className="feedback-carousel">
                    <FeedbackCol testimonials={firstTestemonials} duration={13} />
                    <FeedbackCol testimonials={secondTestemonials} duration={21} className='hidden md:block' />
                    <FeedbackCol testimonials={thirdTestemonials} duration={18} className='hidden lg:block' />
                </div>
            </div>
        </section>
    )
}

export default Feedback
