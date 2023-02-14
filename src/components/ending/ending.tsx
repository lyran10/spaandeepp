import React from 'react'
import {AiOutlineCopyright} from "react-icons/ai"

export const Ending = () => {
  return (
    <div className='w-full h-8 bg-lightBlue text-white flex justify-center items-center'>
      <span className='flex gap-2 justify-center items-center'>
        <AiOutlineCopyright className='mt-1'/>
        2023 All copyrights reserved
        </span>
    </div>
  )
}