import React,{useState,useEffect} from 'react'
import { LearnMoreButton } from '../home/learnMoreButton'

export const AboutUs = () => {

  const [about,setAbout] = useState<string>("opacity-0")

  const scroll = () => {
    if(window.scrollY >= 750){
      setAbout("")
    }else{
      setAbout("opacity-0")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll",scroll)
  },[])
  
  return (
    <section id="aboutUs" className={`${about} transition duration-500 mb-10 w-full relative gap-3 flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xs:h-[700px] sm:h-[700px] md:h-[600px] lg:h-[600px]  before:content-"" before:absolute before:brightness-75 before:w-full before:h-full before:bg-laptop before:bg-cover before:bg-center`}>
      <div className='flex relative flex-col justify-center items-center xs:w-full sm:w-full md:w-2/5 lg:w-2/5 xs:h-full sm:h-full font-black text-white text-[100px]'>
        <span>ABOUT</span>
        <span>US</span>
      </div>
      <div className={`flex justify-center items-center relative xs:w-full sm:w-full md:w-3/5 lg:w-3/5 xs:h-full sm:h-full xs:before:w-full sm:before:w-full md:before:w-[450px] before:content-"" lg:before:w-[500px] before:h-full before:opacity-[0.699999988079071] before:mix-blend-normal before:bg-whitish before:absolute`}>
        <div className='flex justify-center flex-col relative items-center font-semibold text-lg '>
        <span>Spaandeepp is making advertising technology more</span>
        <span>emotionally connected by using combination of</span>
        <span>contextual advertising, content learning and behavior</span>
        <span>analysis. Our team of highly experienced data analysts</span>
        <span>and engineers use AI and ML to build an algorithm and</span>
        <span>architecture to power our saas solutions</span>
        <button className="bg-lightBlue mt-10 text-white p-3 cursor-pointer">LEARN MORE</button> 
        </div>
      </div>
    </section>
  )
}