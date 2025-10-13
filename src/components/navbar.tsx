'use client'
import Image from 'next/image'
import { Button } from './ui/button'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from "gsap/all";
import ColoredText from './coloredText';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';


gsap.registerPlugin(ScrollTrigger, SplitText);


function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false)

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: '#navbar',
        start: 'bottom top',
      }
    })

    navTween.fromTo('#navbar', { backgroundColor: 'transparent' }, {
      backgroundColor: '#ffffff70',
      backdropFilter: 'blur(10px)',
      borderRadius: '25px',
      width: '70%',
      duration: 1,
      ease: 'power1.inOut',
    })
  }, [])

  return (
    <header className='font-poppins flex-x-center'>
      <div id='navbar' className='personalized-conteiner mt-2 py-1.5  px-4 fixed z-50'>
        <nav className='flex items-center flex-wrap justify-between h-13'>
          <Link href={'/'}>
            <Image src={'/zion-seo-logo.webp'} height={40} width={40} alt='logo' className='rounded-md' />
          </Link>

          <div className='hidden md:block'>
            <ul className='flex-center text-black gap-5 md:text-xl text-lg font-medium '>
              <li className='hover:text-black/75 cursor-pointer'><Link href={'#about'}> About </Link></li>
              <li className='hover:text-black/75 cursor-pointer'><Link href={'#features'}> Features </Link></li>
              <li className='hover:text-black/75 cursor-pointer'><Link href={'#pricing'}> Pricing </Link></li>
            </ul>
          </div>

          <div className='hidden md:block'>
            <Button className='md:text-xl text-lg' variant={'primary'}>
              <ColoredText text='Try for free' />
            </Button>
          </div>

          <button className='md:hidden' onClick={() => setOpenDropdown(!openDropdown)}>
            <Menu />
          </button>
        </nav>
        <div className={`${!openDropdown && 'hidden'} md:hidden space-y-2 mt-2 w-full `}>
          <ul className='flex flex-col items-start gap-2 text-black text-lg font-medium px-2'>
            <li className='hover:text-black/75 cursor-pointer'><Link href={'#about'}> About </Link></li>
            <li className='hover:text-black/75 cursor-pointer'><Link href={'#features'}> Features </Link></li>
            <li className='hover:text-black/75 cursor-pointer'><Link href={'#pricing'}> Pricing </Link></li>
          </ul>
          <div className='px-2'>
            <Button className='text-lg w-full' variant={'primary'}>
              <ColoredText text='Try for free' />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
