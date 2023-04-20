import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { ICONS_LIST, UTILITY_ICONS } from "./nav-icons";
import { FaSun,FaMoon } from "react-icons/fa";
import { DarkModeContext } from "../../store/DarkContext";
const NavList = () => {
  const ctxDarkMode = useContext(DarkModeContext)
  const navLinks = ICONS_LIST.map((data) => (
    <li key={data.id}>
      <Link
        className="gap-8 flex text-white text-[1.4rem] leading[1.7rem] capitalize hover:bg-onPrimary hover:dark:bg-blue-950 py-3 px-6 rounded-md transition-all duration-300"
        to="/"
      >
        <img src={data.icon} alt="" />
        {data.desc}
      </Link>
    </li>
  ));
  

  const utility = UTILITY_ICONS.map((data) => (
    <li key={data.id}>
      <Link
        className="gap-8 flex text-white opacity-90 text-[1.4rem] leading[1.7rem] capitalize hover:bg-onPrimary hover:dark:bg-blue-950 py-3 px-6 rounded-md transition-all duration-200"
        to="/"
      >
        <img src={data.icon} alt="" />
        {data.desc}
      </Link>
    </li>
  ));
  return (
    <div className="my-12 px-3 space-y-10 divide-y divide-gray-50">
      <ul className=" list-none  space-y-8">{navLinks}</ul>
      <ul className="list-none  space-y-8 pt-10">
        {utility}
        <li>
          <button
            className={`overflow-hidden relative gap-8 flex items-center text-white opacity-90 text-[1.4rem] leading[1.7rem] capitalize hover:bg-onPrimary hover:dark:bg-blue-950 px-6 py-3 rounded-md transition-all duration-200 w-full `}
            onClick={()=>{ctxDarkMode.toggleDarkmode()}}
          >
            <FaSun className={`  absolute top-[50%] left-6  ${ctxDarkMode.isDark ? 'translate-y-[-50%]': 'translate-y-[-300%]'} text-[1.6rem] text-orange-300 transition-all duration-500`}/>  <FaMoon className={`text-[1.6rem] transition-all duration-500 ${ctxDarkMode.isDark ? 'translate-y-[200%]' : 'translate-y-0'}`} />  {ctxDarkMode.isDark ? 'Light' : 'Dark' }
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
