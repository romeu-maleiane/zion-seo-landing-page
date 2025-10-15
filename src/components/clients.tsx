import Image from 'next/image'
import { clients } from '../../constants'

function Clients() {
    return (
        <div className=' md:py-30 py-20 flex-x-center'>
            <div className='personalized-conteiner'>
                <h2 className='text-center text-black/80 md:text-3xl text-2xl font-semibold pb-5'>
                    Trusted by shopify stores scaling their visibility every day.
                </h2>
                <div className="carousel">
                    <div className="track">
                        <div className="group">
                            {clients.map((client, index) => (
                                <div key={index} className="client_image">
                                    <Image src={client.url} alt={client.alt} height={100} width={100} />
                                </div>
                            ))}
                        </div>
                        <div className="group">
                            {clients.map((client, index) => (
                                <div key={index} className="client_image">
                                    <Image src={client.url} alt={client.alt} height={100} width={100} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='absolute left-0 h-full bg-gradient-to-r z-10 from-gray-30 to-transparent w-20'></div>
                    <div className='absolute right-0 h-full bg-gradient-to-l z-10 from-gray-30 to-transparent w-20'></div>
                </div>
            </div>
        </div>
    )
}

export default Clients
