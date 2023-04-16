import React, {useState} from 'react'
import NavList from './NavList';
import Button from '../../shared/button/Button';
import powerIcon from '../../assets/icons/VectoractivitiesIcon.svg';
import addIcon from '../../assets/icons/PlusIcon.svg';
import {FaBars} from 'react-icons/fa';
const NavBar = () => {
  const [navExpand, setNavExpand] = useState(false)
  return (
    <>
       <Button className='p-24 text-[2.5rem] text-gray-500 smd:hidden absolute top-[7rem] sm:top-28 right-0 z-[1000]' onclick={()=>{setNavExpand(prev => !prev)}}><FaBars/></Button>
    <nav className={`bg-primary absolute h-screen z-[900] smd:relative flex flex-col flex-3 overflow-hidden transition-all duration-300 ${navExpand ? 'p-12 transition-all duration-300' : 'w-0  p-0 smd:w-auto'}`}>
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
    </>
  )
}

export default NavBar