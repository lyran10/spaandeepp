import React from 'react'
import { BlueDiv } from './blueDiv'
import { LearnMoreButton } from '../home/learnMoreButton'

export const Trusted = () => {
  return (
    <section className='mt-32 relative flex flex-col'>
      <BlueDiv/>
      <div className='relative flex lg:flex-row md:flex-row sm:flex-col xs:flex-col justify-center items-center p-10'>
        <div className='bottom-24 right-52 h-[400px] bg-group bg-cover bg-center lg:relative md:static sx:static sm:static lg:w-[400px] md:w-full xs:w-full sm:w-full'></div>
        <div className='w-[800px] h-[400px] bg-offWhite right-0 lg:absolute md:static sx:static sm:static lg:w-[800px] md:w-[800px] sx:w-full sm:w-full top-0 flex flex-col gap-10 lg:justify-start md:justify-start sm:justify-center xs:justify-center lg:items-start md:items-start sm:items-center xs:items-center p-10'>
          <div className='flex flex-col'>
          <span className='text-[30px]'>WE ARE TRUSTED BY MORE</span>
          <span className='text-[30px]'>THEN 8900 CITIES</span>
          </div>
          <div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sunt ad omnis doloribus possimus quaerat atque assumenda hic illum? Neque animi sint a iste sed. Doloremque voluptatum rem blanditiis velit?
            </span>
          </div>
          <div>
          <LearnMoreButton/>
        </div>
        </div>
      </div>
      <BlueDiv string={"LETS GET YOUR PROJECT STARTED !"}>
        <LearnMoreButton/>
      </BlueDiv>
      </section>
  )
}


// 


