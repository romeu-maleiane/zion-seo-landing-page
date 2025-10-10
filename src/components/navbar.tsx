'use client'
import Image from 'next/image'
import { Button } from './ui/button'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ColoredText from './coloredText';


gsap.registerPlugin(ScrollTrigger);


function Navbar() {

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: '#navbar',
        start: 'bottom top',
      }
    })

    navTween.fromTo('#navbar', { backgroundColor: 'transparent' }, {
      backgroundColor: '#dddddd50',
      backgroundFilter: 'blur(10px)',
      borderRadius: '50px',
      width: '70rem',
      duration: 1,
      ease: 'power1.inOut'
    })
  }, [])

  return (
    <header className='flex-x-center'>
      <div id='navbar' className='personalized-conteiner mt-2 py-1.5  px-4 fixed z-50'>
        <nav className='flex items-center justify-between h-13'>
          <div className='gap-3'>
            <Image src={'/zion-seo-logo.webp'} height={40} width={40} alt='logo' className='rounded-md' />
          </div>

          <div className=''>
            <ul className='flex-center text-black gap-5 text-xl font-medium '>
              <li className='hover:text-black/75'>About</li>
              <li className='hover:text-black/75'>Features</li>
              <li className='hover:text-black/75'>Pricing</li>
            </ul>
          </div>

          <div className=''>
            <Button variant={'primary'}>
              <ColoredText text='Try for free' />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
