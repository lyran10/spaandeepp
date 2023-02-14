import React from 'react'
import {BiTargetLock,BiBrain} from "react-icons/bi"
import {TbBrandGoogleAnalytics} from "react-icons/tb"

export const PubBox = () => {
  const publishers = ["Contextual analysis and content learning","predictive analysis","emotion intelligence and attention measurement","creative analysis"]

  const span = (num : number,item : string) => {
      if(item.split(" ")[num + 1] === "and"){
        return(
          <span>{item.split(" ")[num]?.toLocaleUpperCase() + " and"?.toLocaleUpperCase()}</span>
        )
      }else if(item.split(" ")[num] === "and"){
        return
      }else{
        return(
          <span>{item.split(" ")[num]?.toLocaleUpperCase()}</span>
        )
      }
  }


  const publishersDiv = (array : string[]) => {
    return(
      array.map((item,index) => {
          return(
            <div key={index} className={`flex flex-col text-thin shadow-custom tracking-wide justify-center items-center w-[200px] h-[200px]  font-bold border-lightBlue ${index === 0 ? "border-[3px]": "border-[2px]"}`}>
             {span(0,item)}
             {span(1,item)}
             {span(2,item)}
             {span(3,item)}
             {span(4,item)}
            </div>
          )
        // else{
        //   return(
        //     <div key={index} className={`flex flex-col shadow-custom border-2 justify-center items-center w-[150px] h-[150px] tracking-wide ${array[index] === publishers[index] ? "border-lightBlue": "border-yellow"}`}>
        //        {array[index][0] === "c" ? <BiTargetLock className={`${iconClass(array,index)}`} size={20} /> : array[index][0] === "b" ? <BiBrain size={20} className={`${iconClass(array,index)}`}/> : <TbBrandGoogleAnalytics size={20} className={`${iconClass(array,index)}`}/>}
        //       <span>{item.split(" ")[0].toLocaleUpperCase()}</span>
        //       <span>{item.split(" ")[1].toLocaleUpperCase()}</span>
        //     </div>
        //   )
        // }
      })
    )
  }


  return (
    <div className='mt-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 lg:gap-20 md:gap-10 sm:gap-10 xs:gap-10'>
      {publishersDiv(publishers)}
      {/* {publishersDiv(advertisers)} */}
    </div>
  )
}


  // const advertisers = ["advertisers:","behavior intelligence","contextual intelligence","predictive intelligence"]

  // const iconClass = (array : string[],index :number) => {
  //   return array[index] === publishers[index] ? "text-lightBlue": "text-yellow"
  // }