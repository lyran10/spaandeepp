import React,{useEffect,useState} from 'react'
import { PubAndAd } from './pubAndAd'
import { LearnMoreButton } from './learnMoreButton'

export const Home = () => {
const [show,setShow] = useState<string>("opacity-[0]")

useEffect(() => {
setTimeout(() => {setShow("opacity-[1]")},100)
},[])

  const homeClass = "flex justify-center flex-col gap-2 items-center overflow-hidden mt-[80px] relative h-[638px] before:content-'' before:absolute before:h-auto before:top-0 before:right-0 before:left-0 before:bottom-0 xs:before:bg-homeImage1 sm:before:bg-homeImage1 md:before:bg-homeImage1 lg:before:bg-homeImage1  before:bg-cover before:bg-center before:bg-fixed after:content-'' after:absolute after:w-full  after:bg-lightBlue after:right-0   md:after:bottom-14 lg:after:bottom-48 after:left-0 after:h-96 after:rotate-[-60.663339066346055deg] after:mix-blend-hue sm:after:opacity-[0] lg:after:opacity-[1] md:after:opacity-[1] xs:after:opacity-[0] md:after:left-60 lg:after:left-40"

  return (
    <div id="home" className={`${show} transition duration-500 pb-10 border border-b-4 border-white`}>
    <section className={`${homeClass}`}>
      <div className='mb-28 relative flex flex-col text-white justify-center items-center gap-2 '>
      <span className='relative xs:text-[20px] sm:text-[25px] md:text-[30px]  tracking-wide'>WELCOME TO SPAANDEEPP</span>
      <span className='xs:text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px]  font-black tracking-wide'>CONTEXTUAL AND BEHAVIORAL</span>
      <span className='xs:text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px]  font-black tracking-wide'>COMPANY</span>
      <div className='mt-10'>
      <LearnMoreButton/>
      </div>
      </div>
    </section>
    <PubAndAd/>
    </div>
  )
}



{/* <div style="opacity: 1; mix-blend-mode: normal; border-style: solid; border-style: solid; align-items: inherit; background-image: url(unsplash:UbJMy92p8wk); background-size: cover; background-position: center; background-repeat: no-repeat; width: 1701px; height: 942px"></div> */}