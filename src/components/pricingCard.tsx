import { Button } from './ui/button'
import ColoredText from './coloredText'
import { Check } from 'lucide-react'
import Link from 'next/link'

type PricingCardProps = {
    name: string
    price: number
    description: string
    features: string[]
    url: string
    mostPopular?: boolean
    className?: string
}

const PricingCard = ({
    name,
    price,
    description,
    features,
    url,
    mostPopular = false,
    className = '',
}: PricingCardProps) => {
    return (
        <div
            className={`font-poppins w-full shadow-sm rounded-3xl ${mostPopular
                ? 'text-white bg-gradient-to-r from-green-500 to-blue-400'
                : 'bg-white'
            } lg:p-8 sm:p-6 p-4 ${className}`}
        >
            <h3
                className={`md:text-2xl text-xl font-semibold pb-2.5 ${mostPopular ? 'text-white' : 'text-black/80'}`}
            >
                {name}
            </h3>
            <h4
                className={`md:text-3xl text-2xl font-bold pb-5 ${mostPopular ? 'text-white' : 'text-black/80'}`}
            >
                ${price.toFixed(2)}{' '}
                <span className="tex-sm md:text-[0.900rem] font-semibold">/month</span>
            </h4>
            <p className={`pb-5 md:text-lg ${mostPopular ? 'text-white/90' : ''}`}>
                {description}
            </p>
            <Link href={url}>
                <Button
                    className="mb-5 w-full"
                    variant={mostPopular ? 'primary' : 'secondary'}
                >
                    {mostPopular ? <ColoredText text="Start for free" /> : 'Start for free'}
                </Button>
            </Link>
            <hr className="mb-5" />
            <ul className="md:text-[1rem]/8">
                {features.map((feature, i) => (
                    <li key={i}>
                        <p className="flex items-center justify-start gap-1">
                            <Check size={20} className={mostPopular ? '' : 'text-blue-400'} />
                            {feature}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PricingCard