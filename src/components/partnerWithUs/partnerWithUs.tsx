import React,{useState,useEffect} from 'react'
import { PartnerData } from '../utils/interface'
import { partnerData } from '../utils/data'

export const PartnerWithUs = () => {

  const [partner,setPartner] = useState<string>("opacity-0")

  const scroll = () => {
    if(window.scrollY >= 2700){
      setPartner("")
    }else{
      setPartner("opacity-0")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll",scroll)
  },[])

const data = () => {
  return (
    partnerData.map((info : PartnerData,index : number) => {
      return(
      <div className={` text-white font-bold flex flex-col justify-center items-center w-[200px] h-[200px] ${index%2 === 0 ? "bg-lightBlue": " bg-yellow"}`}>
        <span>{info.line1}</span>
        <span>{info.line2}</span>
        <span>{info?.line3}</span>
        <span>{info?.line4}</span>
        <span>{info?.line5}</span>
      </div>
      )
    })
  )
}

  return (
    <section className={`${partner} transition duration-500 flex justify-center items-center gap-10 flex-col`}>
    <span className='mt-10 text-[40px] tracking-wide'>Why <span className='text-lightBlue'>partner</span> with us?</span> 
    <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10 justify-center items-center'>
      {data()}
    </div> 
    </section>
  )
}