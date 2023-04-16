import React from 'react'
import NavList from './NavList';
import Button from '../../shared/button/Button';
import powerIcon from '../../assets/icons/VectoractivitiesIcon.svg';
import addIcon from '../../assets/icons/PlusIcon.svg';
const NavBar = () => {
  return (
    <nav className='bg-primary p-12 flex flex-col flex-3'>
        {/* Nav button*/}
        <Button className='bg-onPrimary text-white py-[1.2rem] px-[1.6rem] leading-[1.9rem] '>
            <img src={powerIcon} alt="" className='w-[2.2rem] h-[2.2rem]' />
            <p className='line-clamp-1 xl:line-clamp-none'>Welcome  Keerthi</p>
        </Button>
        
         {/* Nav links*/}
        <NavList/>


         {/* New Project Btn*/}
        <Button className="p-[1.6rem] bg-onPrimary text-white mt-auto">
        <img src={addIcon} alt="" />
            <p className='uppercase font-light leading-[1.9rem] line-clamp-1 xl:line-clamp-none'>New project</p>
        </Button>
    </nav>
  )
}

export default NavBar