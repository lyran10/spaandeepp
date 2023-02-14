import React from 'react'

type String = {
  string ?: string
  children? : JSX.Element
}

export const BlueDiv = ({string,children} : String) => {
  return (
    <div className='bg-lightBlue w-full h-52 flex justify-center gap-10 items-center text-white'>
      <span className='lg:text-[35px] md:text-[35px] sm:text-[25px] xs:text-[25px]'>{string}</span>
      {children}
    </div>
  )
}