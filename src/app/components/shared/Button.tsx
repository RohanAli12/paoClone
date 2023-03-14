import React, { FC } from 'react'

const Button:FC<{text:string}> = ({text}) => {
  return (
    <button className="bg-[#00616C] hover:shadow-lg duration-300 hover:scale-105 text-sm  text-white font-semibold  md:text-lg sm:mt-8 sm:px-4 sm:py-3  rounded-full px-3 py-2  hover:bg-[#418e96]" >{text}</button>
  )
}

export default Button
