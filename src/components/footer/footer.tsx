import React,{useState,useEffect} from 'react'
import Icon from '../utils/svg'
import { ContactIcon } from './contactIcon'

export const Footer = () => {
  const [contact,setContact] = useState<string>("opacity-0")

  const scroll = () => {
    if(window.scrollY >= 4116){
      setContact("")
    }else{
      setContact("opacity-0")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll",scroll)
  },[])

  return (
    <section id="contact" className={`${contact} transition duration-500 w-full flex p-10 justify-center items-center lg:flex-row md:flex-row sm:flex-col xs:flex-col gap-5`}>
      <div className='lg:w-1/2 md:w-1/2 sm:w-full xs:w-full flex justify-center items-center'>
        <div className='ml-24'>
        <Icon wid1={150} wid2={150} hig1={303} hig2={396}/>
        </div>
      </div>
      <div className='lg:w-1/2 md:w-1/2 sm:w-full xs:w-full flex justify-center items-center'>
        <div className="lg:w-4/5 md:w-4/5 sm-full xs:w-full gap-5 flex ">
        <div className='w-1/2 flex flex-col gap-5 lg:justify-start md:justify-start sm:justify-center xs:justify-center lg:items-start md:items-start sm:items-center xs:items-center'>
          <span>Contact Us</span>
          <div className='flex flex-col'>
          <span>Lorem ipsum dolor, sit</span>
          <span>amet consectetur</span>
          <span>adipisicing elit.</span>
          </div>
          <div className='flex flex-col mt-5'>
          <span>Lorem ipsum dolor, sit</span>
          <span>amet consectetur</span>
          </div>
        </div>
        <div className='w-1/2 flex flex-col gap-5'>
          <ContactIcon/>
        </div>
        </div>
      </div>
  
    </section>
  )
}