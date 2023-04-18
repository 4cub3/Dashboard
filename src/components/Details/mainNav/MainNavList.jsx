import React from 'react'
import { MAIN_NAV } from './list';
import {Link} from 'react-router-dom';
const MainNavList = () => {

    const listItem = MAIN_NAV.map(list =>(
        <li key={list.id}>
                <Link to='/' className='flex items-center gap-2 space-y-12 smm:space-y-0 text-zinc-400 font-medium text-[1.4rem] leading-[1.7rem]'>
                    <img src={list.icon} alt="" />
                    <p className='hidden smm:block'>{list.desc}</p>
                </Link>
        </li>
    ))

  return (
    <ul className='flex  items-center justify-between smm:justify-start sm:space-x-6 backdrop-blur-2xl'>
       {listItem}
    </ul>
  )
}

export default MainNavList