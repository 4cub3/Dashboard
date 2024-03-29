import React from 'react'

const Label = ({title, number}) => {
  return (
    <article className='flex items-center justify-between py-[0.8rem] px-[1.6rem] rounded-xl bg-labelColor  dark:bg-slate-800 transition-colors duration-500'>
        <p className='text-gray-400 leading-7 font-light'>{title}</p>
        <span className='py-[0.8rem] px-[1.2rem] bg-black text-white flex items-center justify-center w-[3.5rem] h-[3.5rem] rounded-xl'>{number}</span>
    </article>
  )
}

export default Label