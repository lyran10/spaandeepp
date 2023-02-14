import React from 'react'
import { PubBox } from './pubBox'

export const PubAndAd = () => {
  return (
    <section className='flex justify-center items-center flex-col gap-3' >
      <span className='pt-10 tracking-wide text-lightBlue'>SOLUTIONS WE ARE OFFERING</span>
      <div className='flex justify-center items-center flex-col gap-1'>
        <span className='font-black tracking-wide lg:text-[35px] md:text-[35px] sm:text-[35px] xs:text-[25px]'>Making Advertising Technology More</span>
        <span className='font-black tracking-wide lg:text-[35px] md:text-[35px] sm:text-[35px] xs:text-[25px]'>Human By Measuring Emotions And</span>
        <span className='font-black tracking-wide lg:text-[35px] md:text-[35px] sm:text-[35px] xs:text-[25px]'>Attention Using AI</span>
      </div>
      <PubBox/>
    </section>
  )
}