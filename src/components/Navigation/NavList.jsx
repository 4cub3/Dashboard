import React from "react";
import { Link } from "react-router-dom";
import {ICONS_LIST, UTILITY_ICONS} from './nav-icons';
const NavList = () => {

    const navLinks = ICONS_LIST.map(data => (
        <li key={data.id}>
        <Link className="gap-8 flex text-white text-[1.4rem] leading[1.7rem] capitalize hover:bg-onPrimary py-3 px-6 rounded-md transition-all duration-300" to='/'>
          <img src={data.icon} alt="" />
          {data.desc}
        </Link>
      </li>
    ))

    const utility = UTILITY_ICONS.map(data => (
        <li key={data.id}>
        <Link className="gap-8 flex text-white opacity-90 text-[1.4rem] leading[1.7rem] capitalize hover:bg-onPrimary py-3 px-6 rounded-md transition-all duration-200" to='/'>
          <img src={data.icon} alt="" />
          {data.desc}
        </Link>
      </li>
    ))
  return (
    <div className="my-12 px-3 space-y-10 divide-y divide-gray-50">
    <ul className=" list-none  space-y-8">
      {navLinks}      
    </ul>
        <ul className="list-none  space-y-8 pt-10">
            {utility}
        </ul>
    </div>
  );
};

export default NavList;
