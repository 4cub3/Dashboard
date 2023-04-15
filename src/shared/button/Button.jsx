import React from 'react'

const Button = ({children, onclick, className}) => {
  return (
    <button className={`flex items-center justify-center gap-[.8rem] ${className} rounded-[.8rem]`} onClick={onclick}>{children}</button>
  )
}

export default Button