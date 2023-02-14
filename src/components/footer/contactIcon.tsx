import React from 'react'
import {FaFacebookF,FaLinkedin,FaTwitter,FaYoutube} from "react-icons/fa"

export const ContactIcon = () => {
  return (
    <>
    <div className='flex flex-col gap-5 lg:justify-start md:justify-start sm:justify-center xs:justify-center lg:items-start md:items-start sm:items-center xs:items-center'>
    <span>Social</span>
    <div className='flex flex-col gap-2'>
      <div className='flex gap-5 '>
        <FaFacebookF className='text-lightBlue' size={20}/>
        <span>FaceBook</span>
      </div >
      <div className='flex gap-5'>
        <FaLinkedin className='text-lightBlue' size={20}/>
        <span>LinkedIn</span>
      </div>
      <div className='flex gap-5'>
        <FaTwitter className='text-lightBlue' size={20}/>
        <span>Twitter</span>
      </div>
      <div className='flex gap-5'>
        <FaYoutube className='text-lightBlue' size={20}/>
        <span>Youtube</span>
      </div>
      </div> 
    </div>
    </>
  )
}