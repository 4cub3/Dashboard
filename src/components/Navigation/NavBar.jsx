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
       <Button className='text-[2.5rem] text-gray-500  smd:hidden absolute top-[11rem] sm:top-44 smm:top-[9.5rem] right-[2.5rem] sm:right-20 z-[900]' onclick={()=>{setNavExpand(prev => !prev)}}><FaBars/></Button>
       {navExpand && <div className='absolute left-0 right-0 w-full h-full bg-black z-[900] smd:hidden opacity-70' onClick={()=>{setNavExpand(prev => !prev)}}></div>}
    <nav className={`bg-primary dark:bg-slate-950 absolute h-screen overflow-y-scroll z-[900] smd:relative flex flex-col flex-3 overflow-hidden  p-12 border-r border-gray-900  ${navExpand ? '' : '-translate-x-full smd:translate-x-0'} transition-translate duration-500`}>
        {/* Nav button*/}
        <Button className='bg-onPrimary text-white py-[1.2rem] px-[1.6rem] leading-[1.9rem] dark:bg-blue-950'>
            <img src={powerIcon} alt="" className='w-[2.2rem] h-[2.2rem]' />
            <p className='line-clamp-1 xl:line-clamp-none'>Welcome  Keerthi</p>
        </Button>
        
         {/* Nav links*/}
        <NavList/>


         {/* New Project Btn*/}
        <Button className="p-[1.6rem] bg-onPrimary text-white mt-auto dark:bg-blue-950">
        <img src={addIcon} alt="" />
            <p className='uppercase font-light leading-[1.9rem] line-clamp-1 xl:line-clamp-none'>New project</p>
        </Button>
    </nav>
    </>
  )
}

export default NavBar