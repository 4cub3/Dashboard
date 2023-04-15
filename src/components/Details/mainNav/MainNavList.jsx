import React from 'react'
import { MAIN_NAV } from './list';
import {Link} from 'react-router-dom';
const MainNavList = () => {

    const listItem = MAIN_NAV.map(list =>(
        <li key={list.id}>
                <Link to='/' className='flex items-center gap-2 text-zinc-400 font-medium text-[1.4rem] leading-[1.7rem]'>
                    <img src={list.icon} alt="" />
                    {list.desc}
                </Link>
        </li>
    ))

  return (
    <ul className='flex flex-col space-y-6 sm:flex-row items-center sm:space-x-6 sm:space-y-0 '>
       {listItem}
    </ul>
  )
}

export default MainNavList