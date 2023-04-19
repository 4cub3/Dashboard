import React from 'react'

const Card = ({children,className}) => {

  return (
    <div className={`p-[1.6rem] gap-[1.8rem] bg-white ${className} dark:bg-slate-950 transition-colors duration-300 `}>
        {children}
    </div>
  )
}

export default Card