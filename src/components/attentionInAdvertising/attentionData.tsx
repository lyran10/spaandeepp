import React from 'react'
import { Data } from '../utils/interface'
import { data1,data2 } from '../utils/data'

export const AttentionData = () => {

  const info = (array : Data[]) => {
    return (
      array.map((data : Data ,index : number) => {
        return(
          <div key={index} className='w-full p-5 flex flex-col items-start tracking-wide gap-5 xs:items-center sm:items-center md:items-center lg:items-start'>
          {data.icon}
          <span className='font-bold text-lg flex flex-col'>{data.title}</span>
          <div className='flex flex-col'>
          <span className=''>{data.line1}</span>
          <span className=''>{data.line2}</span>
          <span className={`${data.line3 === "span" ?"invisible": ""}`}>{data.line3}</span>
          </div>
        </div>
        )
      })
    )
  }
 
  return (
    <div className='p-5 flex gap-4 justify-center items-center sm:w-full md:w-full lg:w-3/5 xs:w-full xs:flex-col sm:flex-col md:flex-row lg:flex-row '>
    <div className='w-1/2 flex flex-col gap-10 xs:w-full sm:w-full md:w-1/2 lg:w-1/2'>
    {info(data1)}
    </div>
    <div className='w-1/2 flex flex-col gap-10 xs:w-full sm:w-full md:w-1/2 lg:w-1/2'>
    {info(data2)}
    </div>
    </div>
  )
}