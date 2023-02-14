import React from 'react'
import { AttentionData } from './attentionData'


export const AttentionInAdvertising = () => {
  return (
    <section id="solutions" className='relative mb-10 p-5 w-full gap-3 flex xs:flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center'>
    <div className='flex justify-center flex-col xs:w-full sm:w-full md:w-full lg:w-2/5 xs:h-full sm:h-full items-center'>
      <div className='text-[50px] flex flex-col'>
      <span>Why is <span className='text-lightBlue'>attention</span> the</span>
    <span>new metric in</span>
    <span>advertising?</span>
      </div>
  
    </div>
    <AttentionData/>
  </section>
  )
}



{/* <div className='absolute mt-10 ml-10 border-4 border-yellow w-[400px] h-[400px] flex flex-col justify-center items-center text-[30px] font-extrabold text-white tracking-wide'>
      <span>WHY ATTENTION</span>
      <span>IN</span>
      <span>ADVERTISING?</span>
    </div>
     <div className='w-[400px] h-[400px] bg-lightBlue'></div> */}


