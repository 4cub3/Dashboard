import React from 'react'
import Button from '../../../shared/button/Button'
const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row items-center justify-between sticky top-0 bg-white z-50'>
        <article>
        <h1 className='text-[3.8rem] leading-[4.6rem] font-semibold tracking-[-0.02rem]'>New Campaign Run </h1>
        <p className='text-zinc-300 text-[1.4rem] leading-[1.7rem]'>A new campaign launch work for brand new featur in May month</p>
        </article>
        <Button className='py-[1.4rem] px-[1.8rem] bg-black text-white text-[1.4rem] leading-[1.7rem]'> ADD MEMBERS</Button>
    </header>
  )
}

export default Header