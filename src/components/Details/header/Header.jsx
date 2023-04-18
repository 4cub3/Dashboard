import React from 'react'
import Button from '../../../shared/button/Button';

const Header = () => {
  return (
    <section className='sticky top-0 lg:relative z-50 '>  
      <header className='flex flex-col space-y-12 items-start smm:space-y-0 smm:flex-row smm:items-center justify-between   transition-colors duration-300 dark:text-white  px-9 py-12 sm:px-[4.4rem] sm:py-[3rem] backdrop-blur-lg'>
        <article>
        <h1 className='text-[3rem] sm:text-[3.8rem] leading-[4.6rem] font-semibold tracking-[-0.02rem] line-clamp-1 sm:line-clamp-none'>New Campaign Run </h1>
        <p className='text-zinc-400 text-[1.4rem] leading-[1.7rem] line-clamp-1 sm:line-clamp-none'>A new campaign launch work for brand new featur in May month</p>
        </article>
        <Button className='py-[1.4rem] px-[1.8rem] bg-black text-white text-[1.4rem] leading-[1.7rem]'> ADD MEMBERS</Button>
    </header>
    </section>
  
  )
}

export default Header