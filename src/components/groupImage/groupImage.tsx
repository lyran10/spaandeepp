import React from 'react'

export const GroupImage = () => {
  return (
    <section className='relative flex justify-center items-center w-full lg:h-[580px] md:h-[500px] sm:h-[400px] xs:h-[400px] before:top-0 before:bottom-0 before:left-0 before:right-0 before:content-""  before:absolute before:bg-atWork before:bg-cover before:bg-center before:w-full before:h-full after:top-0 after:bottom-0 after:left-0 after:right-0 after:content-""  after:absolute after:bg-lightBlue after:w-full after:h-full after:opacity-80'>
      <div className='relative z-30 flex justify-center items-center flex-col gap-3 font-black lg:text-[50px] md:text-[40px] sm:text-[30px] xs:text-[25px]'>
        <span className='text-white'>GREAT THINGS IN BUSINESS ARE NEVER</span>
        <span>
        <span className='text-white'>DONE BY ONE PERSON. </span>
        <span>THEY'RE DONE BY</span>
        </span>
        <span>A TEAM OF PEOPLE.</span>
      </div>
      </section>
  )
}